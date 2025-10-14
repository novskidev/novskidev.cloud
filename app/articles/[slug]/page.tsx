import { getArticleBySlug, getAllArticles } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/app/utils/date';
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
    <div className="mx-auto mt-8 w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-verdigris transition-colors duration-200 hover:text-kappel dark:text-[#56D3A8] dark:hover:text-[#34A0A4]"
        >
          <span aria-hidden>←</span>
          <span>Back to Articles</span>
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-gray-600 dark:text-gray-400 sm:text-sm">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingTime}</span>
        </div>
      </div>
      <article className="prose max-w-none dark:prose-invert">
        <MDXRemote source={article.content} />
      </article>
      
      <ShareButtons 
        title={article.title}
        url={articleUrl}
        description={article.description}
      />
      
      <div className="mt-10">
        <Utterances 
          repo="novskidev/novskidev.cloud"
          issueMap="pathname"
          theme="preferred-color-scheme"
          label="blog-comments"
        />
      </div>
    </div>
  );
}
