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
        <article className="flex flex-col gap-1 ">
         <h1 className="font-roboto font-semibold text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]">{title}</h1> 
         <p className="font-roboto text-xs sm:text-sm md:text-base text-[#838383]">{date}</p>
         <p className="font-roboto text-xs sm:text-sm md:text-base dark:text-[#E4E4E4] text-wrap">{description}</p>
         <Link className="bg-kappel hover:scale-110 transition-all duration-300 mt-1 sm:text-sm md:text-base text-white font-light text-xs py-[2px] px-2 rounded-2xl w-fit" href={link}>
         <button className="flex text-xs items-center justify-center">Read More</button>
         </Link>
         <Divider/>
        </article>
      );
}

export default ArticleList;