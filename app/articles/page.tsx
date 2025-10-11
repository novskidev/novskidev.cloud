import type { Metadata } from "next";

import { getAllArticles } from "../utils/mdx";
import ArticleList from "../components/ui/articleList";
import { formatDate } from "../components/articles";
import { MotionDiv } from "../components/motion-wrapper";

export const metadata: Metadata = {
  title: "Articles | Novskidev.cloud",
  description:
    "Thoughts on software engineering, teaching, and applied AI from Novian Nadari – tutorials, guides, and personal reflections.",
  openGraph: {
    title: "Articles | Novskidev.cloud",
    description:
      "Read the latest articles by Novian covering Next.js, education technology, AI workflows, and developer productivity.",
    url: "https://novskidev.cloud/articles",
    type: "article",
    siteName: "Novskidev.cloud",
  },
  alternates: {
    canonical: "https://novskidev.cloud/articles",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 w-full max-w-4xl mx-auto"
        >
            {articles.map((article) => (
                <MotionDiv
                    key={article.slug}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArticleList
                        title={article.title}
                        date={formatDate(article.date)}
                        description={article.description}
                        link={`/articles/${article.slug}`}
                    />
                </MotionDiv>
            ))}
        </MotionDiv>
    );
}
