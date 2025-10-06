"use client";

import Link from "next/link";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  key?: number;
}

function Card({ title, description, imageSrc, link }: CardProps) {
  return (
    <Link href={link} className="group block h-full">
      <article className="flex h-full w-full flex-col justify-between rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-[#1A1A1A]">
        <div className="flex flex-1 flex-col">
          <h1 className="text-lg font-roboto font-semibold leading-tight text-verdigris dark:text-[#56D3A8]">
            {title}
          </h1>
          <p className="py-3 text-sm leading-relaxed text-[#838383] dark:text-[#E4E4E4]">
            {description}
          </p>
        </div>

        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover brightness-100 transition-all duration-300 group-hover:scale-105 dark:brightness-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      </article>
    </Link>
  );
}

export default Card;
