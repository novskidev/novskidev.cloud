"use client";

import { projectType } from "@/app/utils/utility";
import Link from "next/link";
import Image from "next/image";

function Card({ title, description, imageSrc, link, key }: projectType[number] & { key?: number }) {
  return (
    <Link href={link} className="block group">
      <article className="w-full max-w-[320px] bg-white dark:bg-[#1A1A1A] rounded-3xl flex flex-col justify-between p-5 shadow-md overflow-hidden transition-all duration-300 min-h-[280px] cursor-pointer group-hover:shadow-lg hover:scale-[1.02]">
        <div className="flex-1 flex flex-col">
          <h1 className="text-verdigris font-roboto font-semibold text-lg dark:text-[#56D3A8] leading-tight">
            {title}
          </h1>
          <p className="font-roboto text-sm py-3 text-[#838383] dark:text-[#E4E4E4] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative w-full h-40 mt-3">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-2xl brightness-100 dark:brightness-90 transition-all duration-300"
            sizes="320px"
          />
        </div>
      </article>
    </Link>
  );
}

export default Card;
