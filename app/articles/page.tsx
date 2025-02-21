"use client";

import { useEffect, useState } from "react";
import ArticleList from "../components/ui/articleList";
import { formatDate } from "../components/articles";

export interface ArticleMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  useEffect(() => {
    // Fetch articles on component mount
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const articleData = await response.json();
      setArticles(articleData);
    };

    fetchArticles();
  }, []);

  const loadMoreArticles = () => {
    setVisibleCount((prevCount: number) => prevCount + 2);
  };

  return (
    <div className="mt-5 w-8/12 ">
      {articles.slice(0, visibleCount).map((article) => (
        <ArticleList
          key={article.slug}
          title={article.title}
          date={formatDate(article.date)}
          description={article.description}
          link={`/articles/${article.slug}`}
        />
      ))}
      {visibleCount < articles.length && (
        <button
          onClick={loadMoreArticles}
          className="bg-kappel hover:bg-green-800 transition-all duration-300 mt-1 sm:text-sm md:text-base text-white font-light text-xs py-1  rounded-xl w-full"
        >
          Load More
        </button>
      )}
    </div>
  );
}
