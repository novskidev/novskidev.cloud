import { render, screen } from '@/app/utils/test-utils'
import Card from './card'

const mockProps = {
  title: 'Test Project',
  description: 'This is a test project description',
  imageSrc: '/images/test.png',
  link: '/projects/test'
}

describe('Card Component', () => {
  it('renders card with correct content', () => {
    render(<Card {...mockProps} />)

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
    expect(screen.getByAltText('Test Project')).toBeInTheDocument()
  })

  it('renders external link for HTTP URLs', () => {
    const externalProps = {
      ...mockProps,
      link: 'https://external-site.com'
    }

    render(<Card {...externalProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://external-site.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders internal link for relative URLs', () => {
    render(<Card {...mockProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/projects/test')
    expect(link).not.toHaveAttribute('target')
  })

  it('handles mailto links as external', () => {
    const mailtoProps = {
      ...mockProps,
      link: 'mailto:test@example.com'
    }

    render(<Card {...mailtoProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'mailto:test@example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('applies correct CSS classes', () => {
    render(<Card {...mockProps} />)

    const article = screen.getByRole('article')
    expect(article).toHaveClass('bg-white', 'dark:bg-[#1A1A1A]', 'rounded-3xl')

    const title = screen.getByText('Test Project')
    expect(title).toHaveClass('text-verdigris', 'dark:text-[#56D3A8]')
  })

  it('has proper accessibility attributes', () => {
    render(<Card {...mockProps} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass('group', 'block', 'h-full')

    const image = screen.getByAltText('Test Project')
    expect(image).toHaveAttribute('alt', 'Test Project')
  })
})