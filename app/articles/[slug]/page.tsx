import { getArticleBySlug, getAllArticles } from '@/app/utils/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate } from '@/app/components/articles'
import Link from 'next/link'
import { Metadata } from 'next'

export const dynamic = 'force-static';

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const article = getArticleBySlug(params.slug);
    return {
        title: `${article.title} | Novskidev.cloud`,
        description: article.description,
    };
}

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params, searchParams }: PageProps) {
    const article = getArticleBySlug(params.slug)

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
        </div>
    )
}
