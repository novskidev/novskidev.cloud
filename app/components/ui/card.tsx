"use client";

import { projectType } from "@/app/utils/utility";
import Link from "next/link";
import Image from "next/image";

function Card({ title, description, imageSrc, link }: projectType[number]) {
  return (
    <Link href={link} className="block group w-full max-w-xs sm:max-w-sm md:max-w-md">
      <article className="w-full bg-white dark:bg-[#1A1A1A] rounded-3xl flex flex-col justify-between p-4 sm:p-5 shadow-md overflow-hidden transition-all duration-300 min-h-[200px] h-auto cursor-pointer group-hover:shadow-lg">
        <div className="flex-1 flex flex-col">
          <h1 className="text-verdigris font-roboto font-semibold text-base sm:text-lg md:text-xl dark:text-[#56D3A8]">
            {title}
          </h1>
          <p className="font-roboto text-xs py-2 text-[#838383] dark:text-[#E4E4E4] sm:text-sm md:text-base lg:text-md">
            {description}
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] mt-3">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-2xl brightness-100 dark:brightness-90 transition-all duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </article>
    </Link>
  );
}

export default Card;
