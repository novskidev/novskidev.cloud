import type { Metadata } from "next";
import "./style/globals.css";
import { roboto, myPally, myPallyBold } from "@/app/utils/fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/client-wrapper";

const themeInitScript = `(() => {
  try {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('color-scheme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('color-scheme', 'light');
    }
  } catch (error) {
    console.warn('Theme init failed', error);
  }
})();`;

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novskidev.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Novskidev.cloud | Novian's Portfolio",
    template: "%s | Novskidev.cloud",
  },
  description: "Portfolio Website to Share my Ideas",
  openGraph: {
    type: "website",
    siteName: "Novskidev.cloud",
    url: BASE_URL,
    title: "Novskidev.cloud | Novian's Portfolio",
    description: "Portfolio Website to Share my Ideas",
    images: [
      {
        url: `${BASE_URL}/images/novski.png`,
        width: 1200,
        height: 630,
        alt: "Novskidev.cloud - Novian's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon1.ico",
  },
  alternates: {
    canonical: BASE_URL,
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
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
