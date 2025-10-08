import type { Metadata } from "next";
import "./style/globals.css";
import {roboto, myPally, myPallyBold} from "@/app/utils/fonts"
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/client-wrapper";

export const metadata: Metadata = {
  title: "Novskidev.cloud | Novian's Portfolio",
  description: "Portofolio Website to Share my Ideas",
  icons: {
    icon: '/favicon1.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${myPally.variable} ${myPallyBold.variable} bg-[#F7F7F7] dark:bg-[#1A1A1A] antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <ClientWrapper>
          <Navbar />
          <main className="flex-1 pt-16 sm:pt-20">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
