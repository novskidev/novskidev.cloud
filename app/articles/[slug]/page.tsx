import { getArticleBySlug, getAllArticles } from '@/app/utils/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate } from '@/app/components/articles'
import Link from 'next/link'

export const dynamic = 'force-static';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

type Props = {
    params: {
        slug: string
    }
}

export default async function ArticlePage({ params }: Props) {
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
