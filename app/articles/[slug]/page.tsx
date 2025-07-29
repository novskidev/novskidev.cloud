import { getArticleBySlug, getAllArticles } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/app/components/articles';
import Link from 'next/link';
import { Metadata } from 'next';
import Utterances from '@/app/components/utterances';
import ShareButtons from '@/app/components/share-buttons';

export const dynamic = 'force-static';

type Params = { slug: string };

type Props = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  const article = getArticleBySlug(slug);
  return {
    title: `${article.title} | Novskidev.cloud`,
    description: article.description,
  };
}

export async function generateStaticParams(): Promise<Params[]> {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params; // Await the params Promise
  const article = getArticleBySlug(slug);
  
  // Construct the full URL for sharing
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://novskidev.cloud';
  const articleUrl = `${baseUrl}/articles/${slug}`;

  return (
    <div className="w-8/12 mt-8">
      <div className="mb-8">
        <Link
          href="/articles"
          className="inline-flex items-center text-verdigris hover:text-kappel dark:text-[#56D3A8] dark:hover:text-[#34A0A4] mb-6 transition-colors duration-200"
        >
          <span>← Back to Articles</span>
        </Link>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-8">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime}</span>
        </div>
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote source={article.content} />
      </article>
      
      <ShareButtons 
        title={article.title}
        url={articleUrl}
        description={article.description}
      />
      
      <Utterances 
        repo="novskidev/novskidev.cloud"
        issueMap="pathname"
        theme="preferred-color-scheme"
        label="blog-comments"
      />
    </div>
  );
}