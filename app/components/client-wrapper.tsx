'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "@/app/utils/theme-provider";

export default function ClientWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <ThemeProvider>
      <body className={className}>
        {children}
      </body>
    </ThemeProvider>
  );
}
