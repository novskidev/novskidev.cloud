import { ReactNode } from "react";

export default function ProductLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-[#F7F7F7] dark:bg-[#1A1A1A] my-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="font-pally font-bold text-3xl sm:text-4xl lg:text-5xl text-verdigris dark:text-[#56D3A8] mb-4">
            Product
          </h1>
          <p className="font-roboto text-sm sm:text-base lg:text-lg text-gray-600 dark:text-[#E4E4E4] max-w-3xl mx-auto leading-relaxed">
            Digital products from me including e-books, templates, and plugins to boost your productivity.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
