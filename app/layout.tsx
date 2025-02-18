import type { Metadata } from "next";
import "./style/globals.css";
import {roboto, myPally, myPallyBold} from "@/app/utils/fonts"

export const metadata: Metadata = {
  title: "Novskidev",
  description: "Novian Developer Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${myPally.variable} ${myPallyBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
