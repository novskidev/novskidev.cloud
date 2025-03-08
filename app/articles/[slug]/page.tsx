import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

// Define type for component props
type ComponentProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  [key: string]: unknown;
}

// Format date for display
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Custom components for MDX with dark mode support
const mdxComponents = {
  h1: (props: ComponentProps) => <h1 className="text-3xl font-bold text-verdigris dark:text-[#56D3A8] my-4" {...props} />,
  h2: (props: ComponentProps) => <h2 className="text-xl font-bold text-verdigris dark:text-[#56D3A8] my-3" {...props} />,
  h3: (props: ComponentProps) => <h3 className="text-lg font-bold text-verdigris dark:text-[#56D3A8] my-2" {...props} />,
  p: (props: ComponentProps) => <p className="my-2 text-gray-800 dark:text-gray-200" {...props} />,
  a: (props: ComponentProps) => <a className="text-verdigris dark:text-[#56D3A8] hover:underline" {...props} />,
  ul: (props: ComponentProps) => <ul className="list-disc pl-5 my-2 text-gray-800 dark:text-gray-200" {...props} />,
  ol: (props: ComponentProps) => <ol className="list-decimal pl-5 my-2 text-gray-800 dark:text-gray-200" {...props} />,
  li: (props: ComponentProps) => <li className="my-1 text-gray-800 dark:text-gray-200" {...props} />,
  blockquote: (props: ComponentProps) => <blockquote className="border-l-4 border-verdigris dark:border-[#56D3A8] pl-4 italic my-2 text-gray-700 dark:text-gray-300" {...props} />,
  code: (props: ComponentProps) => <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-gray-800 dark:text-gray-200" {...props} />,
  pre: (props: ComponentProps) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-4 text-gray-800 dark:text-gray-200" {...props} />,
};

// Generate static paths for all MDX files
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'app/articles/[slug]');
  
  try {
    const files = fs.readdirSync(articlesDir);
    
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        slug: file.replace('.mdx', ''),
      }));
  } catch (error) {
    console.error('Error reading article directory:', error);
    return [];
  }
}

// Page component props type
type ArticlePageProps = {
  params: { slug: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'app/articles/[slug]', `${slug}.mdx`);
  
  // Read and parse the MDX file
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <article className="flex flex-col w-8/12 lg:prose-xl mx-auto gap-1">
      <Link href="/articles">
        <button className="bg-verdigris dark:bg-[#56D3A8] text-white my-2 px-2 py-1 rounded-md hover:opacity-90 transition-opacity font-roboto">
          Back to All Articles
        </button>
      </Link>
      
      <h1 className="text-2xl text-verdigris dark:text-[#56D3A8] font-bold mt-4">
        {data.title}
      </h1>
      
      <div className="text-gray-600 dark:text-[#E4E4E4] mb-4">
        {formatDate(data.date)}
      </div>
      
      <div className="text-gray-800 dark:text-gray-200">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
