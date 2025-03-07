import { articleType } from "@/app/utils/utility";
import Link from "next/link";
import Divider from "./divider";



function ArticleList({title, date, description, link} : articleType[number]) {
    return ( 
        <article className="flex flex-col gap-1 ">
          <Link href={link}>
         <h1 className="font-roboto font-semibold text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]">{title}</h1> 
          </Link>
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