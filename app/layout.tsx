import type { Metadata } from "next";
import "./style/globals.css";
import {roboto, myPally, myPallyBold} from "@/app/utils/fonts"
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Novskidev.cloud - Personal Portofolio Website",
  description: "Portofolio Website to Share my Ideas",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
