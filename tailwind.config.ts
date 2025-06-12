import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx"
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mindaro: "#D9ED92",
        light_green: "#B5E48C",
        light_green_2: "#99D98C",
        emerald: "#76C893",
        kappel: "#52B69A",
        verdigris: "#34A0A4",
        bondi_blue: "#168AAD",
        cerulean: "#1A759F",
        primary: '#0070f3',
        'primary-dark': '#0051a2' 
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontFamily: 'Pally, sans-serif',
              color: '#34A0A4',
              'font-weight': 'bold',
            },
            p: {
              fontFamily: 'Roboto, sans-serif',
              color: '#1a1a1a',
            },
            '--tw-prose-headings': '#34A0A4',
            '.dark &': {
              '--tw-prose-body': '#E4E4E4',
              '--tw-prose-headings': '#56D3A8',
              color: '#E4E4E4',
              'h1, h2, h3, h4': {
                color: '#56D3A8',
              },
              p: {
                color: '#E4E4E4',
              },
            },
          },
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        pally: ["var(--font-pally)", "monospace"],
        boldpally : ["var(--font-pally-bold)", "monospace"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
