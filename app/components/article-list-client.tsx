'use client';

import { motion } from 'framer-motion';
import ArticleList from './ui/articleList';
import { formatDate } from '../utils/date';
import type { ArticleMetadata as Article } from '../utils/mdx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function AnimatedArticleList({ articles }: { articles: Article[] }) {
  return (
    <motion.div
      className="mt-6 w-full max-w-4xl space-y-4 mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {articles.map((article) => (
        <ArticleList
          key={article.slug}
          title={article.title}
          date={formatDate(article.date)}
          description={article.description}
          link={`/articles/${article.slug}`}
        />
      ))}
    </motion.div>
  );
}
