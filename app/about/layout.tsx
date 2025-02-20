import { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-8/12 bg-[#F7F7F7] dark:bg-[#1A1A1A] lg:mx-auto mx-6 my-[80px] p-4 flex flex-col items-center justify-center">
      <h1 className="w-8/12 font-pally font-bold text-5xl text-verdigris dark:text-[#56D3A8]">About Me</h1>
<p className="w-8/12 font-roboto text-sm sm:text-base md:text-lg text-wrap text-left dark:text-[#E4E4E4]">Anything you need to know about me.</p>
      {children}
    </div>
  );
}
