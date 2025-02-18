"use client";

import { projectType } from "@/app/utils/utility";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/icon/tabler-icon-arrow-narrow-right.png";

function Card({ title, description, imageSrc, link }: projectType[number]) {
  return (
    <article className="w-[220px] h-[200px] md:w-[320px] md:h-[300px] bg-white rounded-3xl flex flex-col justify-between p-5 shadow-md">
      <div>
        <h1 className="text-verdigris font-roboto font-semibold text-lg">{title}</h1>
        <p className="font-roboto text-xs sm:text-sm md:text-base lg:text-md text-[#838383]">{description}</p>
      </div>

      <Link href={link}>
        <button className="flex items-center my-1 gap border-2 border-verdigris text-verdigris font-roboto text-xs font-light rounded-full px-3 py-1">
          Visit
          <Image src={arrow} alt="arrow" width={16} height={16} />
        </button>
      </Link>

      <Image src={imageSrc} alt={title} width={200} height={200} className="self-center" />
    </article>
  );
}

export default Card;
