import { ReactNode } from "react";

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[#F7F7F7] dark:bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <header className="space-y-3 text-center sm:text-left">
          <h1 className="font-pally font-bold text-3xl sm:text-4xl lg:text-5xl text-verdigris dark:text-[#56D3A8]">
            About Me
          </h1>
          <p className="font-roboto text-sm sm:text-base lg:text-lg text-gray-600 dark:text-[#E4E4E4]">
            Anything you need to know about me.
          </p>
        </header>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </div>
  );
}
