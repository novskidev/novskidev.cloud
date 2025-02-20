import { ReactNode } from "react";

export default function ArticlesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[#F7F7F7] dark:bg-[#1A1A1A] mx-auto my-[80px] p-4 flex flex-col items-center justify-center">
      <h1 className="font-pally font-bold text-5xl w-8/12 text-verdigris dark:text-[#56D3A8]">Articles</h1>
<p className="font-roboto w-8/12 text-sm sm:text-base md:text-lg text-wrap  dark:text-[#E4E4E4]">Guides, references, life and tutorials written by me.</p>
      {children}
    </div>
  );
}
