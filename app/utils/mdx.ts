import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export type ArticleMetadata = {
    title: string
    date: string
    description: string
    slug: string
    readingTime: string
}

export function getAllArticles(): ArticleMetadata[] {
    // Read all files from the articles directory
    const fileNames = fs.readdirSync(articlesDirectory)
    const allArticlesData = fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => {
            // Remove ".mdx" from file name to get slug
            const slug = fileName.replace(/\.mdx$/, '')

            // Read markdown file as string
            const fullPath = path.join(articlesDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const { data, content } = matter(fileContents)

            // Calculate reading time
            const stats = readingTime(content)

            return {
                slug,
                title: data.title,
                date: data.date,
                description: data.description,
                readingTime: stats.text,
            }
        })

    // Sort articles by date
    return allArticlesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getArticleBySlug(slug: string) {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
        readingTime: stats.text,
    }
}
