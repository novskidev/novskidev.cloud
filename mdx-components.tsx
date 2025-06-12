import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <Image
        {...props}
        alt={props.alt || ''}
        width={800}
        height={400}
        className="rounded-lg my-8"
        quality={100}
      />
    ),
    a: (props) => (
      <Link {...props} href={props.href || ''} className="text-verdigris hover:text-kappel dark:text-[#56D3A8] dark:hover:text-[#34A0A4] transition-colors duration-200">
        {props.children}
      </Link>
    ),
    // Let Tailwind Typography handle the base styles
    ...components,
  }
}
