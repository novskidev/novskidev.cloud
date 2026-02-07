import ArticleList from "./ui/articleList";
import { type ArticleMetadata } from "../utils/mdx";

export const formatDate = (dateString: string) => {
    if (!dateString) {
        return "";
    }

    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("id-ID", { year: "numeric", month: "long" });
};

interface ArticlesProps {
    articles: ArticleMetadata[];
}

function Articles({ articles }: ArticlesProps) {
    return (  
        <section className="w-full bg-[#F7F7F7] py-16 sm:py-24 dark:bg-[#1A1A1A]">
            <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
                <header className="space-y-3 text-center sm:text-left">
                    <h1 className="font-pally text-3xl font-bold text-verdigris dark:text-[#56D3A8] sm:text-4xl lg:text-5xl">
                        Articles
                    </h1>
                    <p className="font-roboto text-sm text-gray-600 dark:text-[#E4E4E4] sm:text-base lg:text-lg">
                        Guides, references, life and tutorials written by me.
                    </p>
                    <h2 className="text-base font-bold underline decoration-verdigris/80 underline-offset-4 dark:text-white sm:text-lg">
                        Latest Articles
                    </h2>
                </header>

                <div className="grid gap-4 sm:gap-6">
                    {articles.slice(0, 3).map((article) => (
                        <ArticleList
                            key={article.slug}
                            title={article.title}
                            date={formatDate(article.date)}
                            description={article.description}
                            link={`/articles/${article.slug}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Articles;
