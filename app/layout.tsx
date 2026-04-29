import './globals.css'
import type { Metadata } from 'next'
import SmoothScroll from '@/components/SmoothScroll'
import AnimatedFavicon from '@/components/AnimatedFavicon'

export const metadata: Metadata = {
  title: 'AyTee Labs',
  description: 'Adil — Software Test Lead & Product Engineer. AyTee Labs portfolio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AnimatedFavicon />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
