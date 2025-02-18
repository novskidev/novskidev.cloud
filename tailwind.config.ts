import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Roboto: ["var(--font-roboto)", "sans-serif"],
        Pally: ["var(--font-pally)", "monospace"],
        Boldpally : ["var(--font-pally-bold)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
