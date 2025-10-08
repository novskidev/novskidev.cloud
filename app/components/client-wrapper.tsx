'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "@/app/utils/theme-provider";

export default function ClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
