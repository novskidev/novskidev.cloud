import { ReactNode } from "react";

export default function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[#F7F7F7] dark:bg-[#1A1A1A] lg:mx-auto mx-6 my-[80px] p-4 flex flex-col items-center justify-center">
      <h1 className="font-pally font-bold w-8/12 text-5xl text-verdigris dark:text-[#56D3A8]">Product</h1>
      <p className="font-roboto my-2 text-sm sm:text-base w-8/12 md:text-lg text-wrap text-left dark:text-[#E4E4E4]">Digital product from me from  e-book, template, and plugin to boost your productivity.</p>
      {children}
    </div>
  );
}
