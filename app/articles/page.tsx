"use client";

import { useState } from "react";
import ArticleList from "../components/ui/articleList";
import { article } from "../utils/utility";
import { formatDate } from "../components/articles";


export default function ArticlesPage() {
const [visibleCount, setVisibleCount] = useState<number>(4);

const loadMoreArticles = () => {
  setVisibleCount((prevCount: number) => prevCount + 2);
}
    return (
      <div className="mt-5 w-8/12 ">
        {article.slice(0, visibleCount).map((article) => (
                    <ArticleList
                        key={article.key}
                        title={article.title}
                        date={formatDate(article.date)}
                        description={article.description}
                        link={article.link}
                    />
                ))}
      {visibleCount < article.length && (
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
  