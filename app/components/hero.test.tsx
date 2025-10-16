import { render, screen } from '@/app/utils/test-utils'
import Hero from './hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

// Mock react-icons
jest.mock('react-icons/fa', () => ({
  FaReact: () => <div data-testid="react-icon">React</div>,
  FaPython: () => <div data-testid="python-icon">Python</div>,
}))

jest.mock('react-icons/ri', () => ({
  RiNextjsFill: () => <div data-testid="nextjs-icon">Next.js</div>,
}))

jest.mock('react-icons/si', () => ({
  SiAstro: () => <div data-testid="astro-icon">Astro</div>,
  SiSvelte: () => <div data-testid="svelte-icon">Svelte</div>,
  SiVuedotjs: () => <div data-testid="vue-icon">Vue</div>,
  SiSupabase: () => <div data-testid="supabase-icon">Supabase</div>,
  SiExpress: () => <div data-testid="express-icon">Express</div>,
}))

describe('Hero Component', () => {
  it('renders hero section with main content', () => {
    render(<Hero />)

    expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
    expect(screen.getByText('Novian')).toBeInTheDocument()
    expect(screen.getByText('👋')).toBeInTheDocument()
    expect(screen.getByText('A Passionate Software Engineer, Educator and Coffee Sipper ☕')).toBeInTheDocument()
    expect(screen.getByText('Helping businesses and individuals solve problems with clean code, innovative solutions, and engaging education.')).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)

    const collaborateButton = screen.getByText("Let's Collaborate")
    const projectsButton = screen.getByText('View My Projects')

    expect(collaborateButton).toBeInTheDocument()
    expect(collaborateButton).toHaveAttribute('href', 'mailto:novskidev@gmail.com')
    expect(projectsButton).toBeInTheDocument()
    expect(projectsButton).toHaveAttribute('href', '#projects')
  })

  it('renders technology icons', () => {
    render(<Hero />)

    expect(screen.getByTestId('react-icon')).toBeInTheDocument()
    expect(screen.getByTestId('nextjs-icon')).toBeInTheDocument()
    expect(screen.getByTestId('astro-icon')).toBeInTheDocument()
    expect(screen.getByTestId('svelte-icon')).toBeInTheDocument()
    expect(screen.getByTestId('vue-icon')).toBeInTheDocument()
    expect(screen.getByTestId('supabase-icon')).toBeInTheDocument()
    expect(screen.getByTestId('express-icon')).toBeInTheDocument()
    expect(screen.getByTestId('python-icon')).toBeInTheDocument()
  })

  it('renders profile image with correct attributes', () => {
    render(<Hero />)

    const profileImage = screen.getByAltText('Profile Picture')
    expect(profileImage).toBeInTheDocument()
    expect(profileImage).toHaveAttribute('src')
  })

  it('applies correct CSS classes for styling', () => {
    render(<Hero />)

    const heroSection = screen.getByRole('main') || screen.getByText("Hi, I'm").closest('section')
    expect(heroSection).toHaveClass('bg-[#F7F7F7]', 'dark:bg-[#1A1A1A]')

    const nameSpan = screen.getByText('Novian')
    expect(nameSpan).toHaveClass('bg-gradient-to-r', 'from-[#99D98C]', 'to-[#34A0A4]')
  })

  it('has proper semantic structure', () => {
    render(<Hero />)

    // Check for heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()

    // Check for buttons/links
    const actionButtons = screen.getAllByRole('link')
    expect(actionButtons.length).toBeGreaterThan(0)
  })
})