# Novskidev.cloud

Personal portfolio and blog website built with Next.js 15, showcasing projects, articles, and ideas.

## Features

- Modern, responsive design with dark/light theme support
- MDX-powered blog with GitHub Flavored Markdown
- SEO optimized with dynamic sitemap and robots.txt
- Static site generation for optimal performance
- Smooth animations with Framer Motion
- Reading time estimates for articles
- Social sharing buttons
- Custom fonts and styling with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with `@next/mdx`
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your site URL

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create an optimized production build:

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── articles/          # Blog articles
│   ├── components/        # React components
│   ├── product/           # Product pages
│   ├── projects/          # Projects showcase
│   ├── style/             # Global styles
│   └── utils/             # Utility functions
├── content/               # MDX content files
│   └── articles/         # Blog post content
├── public/                # Static assets
│   ├── fonts/            # Custom fonts
│   ├── icon/             # Icons
│   └── images/           # Images
└── ...config files
```

## Writing Articles

Create a new MDX file in `content/articles/`:

```mdx
---
title: "Your Article Title"
date: "2025-01-01"
description: "Brief description"
---

Your content here...
```

## License

This project is for personal use.

## Contact

Visit [novskidev.cloud](https://novskidev.cloud) for more information.
