import { articleType } from "@/app/utils/utility";
import Link from "next/link";
import Divider from "./divider";



function ArticleList({title, date, description, link} : articleType[number]) {
    return ( 
        <article className="flex flex-col gap-1 ">
         <h1 className="font-roboto font-semibold text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]">{title}</h1> 
         <p className="font-roboto text-xs sm:text-sm md:text-base text-[#838383]">{date}</p>
         <p className="font-roboto text-xs sm:text-sm md:text-base dark:text-[#E4E4E4] text-wrap">{description}</p>
         <Link className="bg-kappel mt-1 sm:text-sm md:text-base text-white font-light text-xs py-[2px] px-2 rounded-2xl w-fit" href={link}>
         <button>Read More</button>
         </Link>
         <Divider/>
        </article>
      );
}

export default ArticleList;