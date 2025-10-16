import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Mock theme provider for testing
const MockThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <div data-theme="light">{children}</div>
}

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <MockThemeProvider>{children}</MockThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }