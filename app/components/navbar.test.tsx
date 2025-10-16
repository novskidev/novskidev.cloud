import { render, screen, fireEvent } from '@/app/utils/test-utils'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

// Mock theme provider hook
jest.mock('../utils/theme-provider', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Sun: () => <div data-testid="sun-icon">Sun</div>,
  Moon: () => <div data-testid="moon-icon">Moon</div>,
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  X: () => <div data-testid="x-icon">X</div>,
}))

describe('Navbar Component', () => {
  const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  it('renders logo with correct link', () => {
    render(<Navbar />)

    const logoLink = screen.getByLabelText('Home')
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders navigation menu items', () => {
    render(<Navbar />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Articles')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Product')).toBeInTheDocument()
  })

  it('highlights active page correctly', () => {
    mockUsePathname.mockReturnValue('/projects')
    render(<Navbar />)

    const projectsLink = screen.getByText('Projects')
    expect(projectsLink).toHaveAttribute('aria-current', 'page')
    expect(projectsLink).toHaveClass('text-verdigris')
  })

  it('shows theme toggle button', () => {
    render(<Navbar />)

    const themeButton = screen.getByLabelText('Toggle theme')
    expect(themeButton).toBeInTheDocument()

    const sunIcon = screen.getByTestId('sun-icon')
    expect(sunIcon).toBeInTheDocument()
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />)

    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toBeInTheDocument()

    fireEvent.click(menuButton)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.getByTestId('x-icon')).toBeInTheDocument()

    // Mobile menu should be visible
    const mobileMenu = screen.getByText('Home').closest('.md\\:hidden')
    expect(mobileMenu).toBeInTheDocument()
  })

  it('closes mobile menu when link is clicked', () => {
    render(<Navbar />)

    // Open mobile menu
    const menuButton = screen.getByLabelText('Open menu')
    fireEvent.click(menuButton)

    // Click on a menu item
    const projectsLink = screen.getByText('Projects')
    fireEvent.click(projectsLink)

    // Menu should close (X icon should not be visible)
    expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument()
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'w-full')

    const logo = screen.getByText('Novskidev')
    expect(logo).toHaveClass('bg-gradient-to-r', 'from-[#99D98C]', 'to-[#34A0A4]')
  })

  it('has proper accessibility attributes', () => {
    render(<Navbar />)

    const logoLink = screen.getByLabelText('Home')
    expect(logoLink).toHaveAttribute('aria-label', 'Home')

    const themeButton = screen.getByLabelText('Toggle theme')
    expect(themeButton).toHaveAttribute('aria-label', 'Toggle theme')

    const menuButton = screen.getByLabelText('Open menu')
    expect(menuButton).toHaveAttribute('aria-label', 'Open menu')
  })
})