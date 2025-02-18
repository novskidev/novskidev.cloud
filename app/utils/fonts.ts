import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
 
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const myPally = localFont({
  src: '../../public/fonts/Pally-Regular.otf',
  variable: '--font-pally',
})

export const myPallyBold = localFont({
  src: '../../public/fonts/Pally-Bold.otf',
  variable: '--font-pally-bold',
})


