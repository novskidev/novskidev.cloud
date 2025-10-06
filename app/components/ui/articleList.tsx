'use client';

import Link from "next/link";
import Divider from "./divider";

type ArticleListProps = {
    title: string;
    date: string;
    description: string;
    link: string;
};

function ArticleList({title, date, description, link}: ArticleListProps) {
    return ( 
        <article className="group rounded-2xl border border-gray-200 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-verdigris/70 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/50">
          <div className="flex flex-col gap-3">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-roboto text-sm font-semibold text-gray-900 dark:text-[#E4E4E4] sm:text-base md:text-lg">
                {title}
              </h2>
              <p className="font-roboto text-xs text-[#838383] sm:text-sm">
                {date}
              </p>
            </header>
            <p className="font-roboto text-xs text-gray-600 dark:text-[#D6D6D6] sm:text-sm md:text-base">
              {description}
            </p>
            <div className="flex items-center justify-between gap-3">
              <Link
                className="inline-flex items-center gap-1 text-xs font-semibold text-verdigris transition-colors duration-200 hover:text-kappel sm:text-sm"
                href={link}
              >
                Read More
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <Divider />
          </div>
        </article>
      );
}

export default ArticleList;
