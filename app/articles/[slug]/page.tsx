import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
  params: {
    slug: string;
  };
}

// Fungsi untuk memformat tanggal
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/articles/[slug]'));
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace('.mdx', ''),
    }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/articles/[slug]', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <article className="flex flex-col w-8/12 lg:prose-xl mx-auto">
      <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
      <div className="text-gray-600 mb-4">{formatDate(data.date)}</div>
      <MDXRemote source={content} />
    </article>
  );
}
