import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const articlesDirectory = path.join(process.cwd(), 'app/articles/[slug]');
  const files = fs.readdirSync(articlesDirectory);
  
  const articles = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(articlesDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        description: data.description
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

  return NextResponse.json(articles);
} 