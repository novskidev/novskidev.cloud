import { MetadataRoute } from "next";

import { getAllArticles } from "./utils/mdx";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://novskidev.cloud";

const staticRoutes = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    url: `${BASE_URL}/projects`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/articles`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/product`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

function getArticleRoutes(): MetadataRoute.Sitemap {
  try {
    const articles = getAllArticles();

    return articles.map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.warn("Failed to load articles for sitemap", error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...getArticleRoutes()];
}
