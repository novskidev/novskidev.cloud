import { getAllArticles, getArticleBySlug } from './mdx'
import fs from 'fs'
import path from 'path'

// Mock the file system
jest.mock('fs')
jest.mock('path')

const mockFs = fs as jest.Mocked<typeof fs>
const mockPath = path as jest.Mocked<typeof path>

describe('MDX Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getAllArticles', () => {
    it('should return all articles sorted by date', () => {
      const mockArticlesDir = '/mock/content/articles'
      const mockFiles = ['article1.mdx', 'article2.mdx', 'article3.mdx']

      mockPath.join.mockImplementation((...args) => args.join('/'))
      mockPath.join.mockReturnValueOnce(mockArticlesDir)
      mockFs.readdirSync.mockReturnValue(mockFiles as any)

      // Mock file contents
      const mockFileContents = [
        `---
title: "Third Article"
date: "2023-01-03"
description: "Third article description"
---
Third article content`,
        `---
title: "First Article"
date: "2023-01-01"
description: "First article description"
---
First article content`,
        `---
title: "Second Article"
date: "2023-01-02"
description: "Second article description"
---
Second article content`
      ]

      mockFs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('article1.mdx')) return mockFileContents[0]
        if (filePath.includes('article2.mdx')) return mockFileContents[1]
        if (filePath.includes('article3.mdx')) return mockFileContents[2]
        return ''
      })

      const articles = getAllArticles()

      expect(articles).toHaveLength(3)
      // Articles should be sorted by date (newest first)
      expect(articles[0].date).toBe('2023-01-03') // Third Article (newest)
      expect(articles[1].date).toBe('2023-01-02') // Second Article
      expect(articles[2].date).toBe('2023-01-01') // First Article (oldest)
      expect(mockFs.readdirSync).toHaveBeenCalledWith(mockArticlesDir)
    })

    it('should filter out non-mdx files', () => {
      const mockArticlesDir = '/mock/content/articles'
      const mockFiles = ['article1.mdx', 'article2.txt', 'article3.mdx', 'readme.md']

      mockPath.join.mockReturnValue(mockArticlesDir)
      mockFs.readdirSync.mockReturnValue(mockFiles as any)
      mockFs.readFileSync.mockReturnValue('mock content')

      const articles = getAllArticles()

      expect(articles).toHaveLength(2)
      // Should only include .mdx files
      expect(articles.some(a => a.slug === 'article1')).toBe(true)
      expect(articles.some(a => a.slug === 'article3')).toBe(true)
      expect(articles.some(a => a.slug === 'article2')).toBe(false) // .txt file
    })
  })

  describe('getArticleBySlug', () => {
    it('should return article data for valid slug', () => {
      const mockSlug = 'test-article'
      const mockFilePath = `/mock/content/articles/${mockSlug}.mdx`
      const mockFileContent = `---
title: "Test Article"
date: "2023-01-01"
description: "Test description"
---
Test article content`

      mockPath.join.mockReturnValue(mockFilePath)
      mockFs.readFileSync.mockReturnValue(mockFileContent)

      const article = getArticleBySlug(mockSlug)

      expect(article).toEqual({
        slug: mockSlug,
        title: 'Test Article',
        date: '2023-01-01',
        description: 'Test description',
        content: 'Test article content',
        readingTime: expect.any(String)
      })
      expect(mockFs.readFileSync).toHaveBeenCalledWith(mockFilePath, 'utf8')
    })
  })
})