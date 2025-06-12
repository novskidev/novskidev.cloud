import { getAllArticles } from "../utils/mdx";
import ArticleList from "../components/ui/articleList";
import { formatDate } from "../components/articles";

export const dynamic = 'force-static';

export default function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <div className="mt-5 w-8/12">
            {articles.map((article) => (
                <ArticleList
                    key={article.slug}
                    title={article.title}
                    date={formatDate(article.date)}
                    description={article.description}
                    link={`/articles/${article.slug}`}
                />
            ))}
        </div>
    );
}
  