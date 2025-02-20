"use client";

import { projectType } from "@/app/utils/utility";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/icon/tabler-icon-arrow-narrow-right.png";

function Card({ title, description, imageSrc, link }: projectType[number]) {
  return (
    <article className="w-[180px] h-[165px] md:w-[320px] md:h-[300px] sm:w-[280px] sm:h-[260px] bg-white dark:bg-[#1A1A1A] rounded-3xl flex flex-col justify-between p-5 shadow-md overflow-hidden transition-all duration-300">
      <div>
        <h1 className="text-verdigris font-roboto font-semibold text-lg dark:text-[#56D3A8]">
          {title}
        </h1>
        <p className="font-roboto text-xs py-2 text-[#838383] dark:text-[#E4E4E4] sm:text-sm md:text-base lg:text-md">
          {description}
        </p>
      </div>

      <Link href={link}>
        <button className="flex hover:scale-110 items-center my-1 gap border-2 border-verdigris text-verdigris dark:border-[#56D3A8] dark:text-[#56D3A8] font-roboto text-xs font-light rounded-full px-3 py-1 transition-all duration-300 hover:bg-verdigris hover:text-white dark:hover:bg-[#56D3A8] dark:hover:text-black">
          Visit
          <Image src={arrow} alt="arrow" width={16} height={16} />
        </button>
      </Link>

      <Image
        src={imageSrc}
        alt={title}
        width={380}
        height={215}
        className="hidden sm:block ml-16 mt-12 object-cover rounded-2xl rotate-[-32deg] brightness-100 dark:brightness-90 transition-all duration-300"
      />
    </article>
  );
}

export default Card;
