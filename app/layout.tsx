import './globals.css'
import type { Metadata } from 'next'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'AyTee Labs — Build. Refine. Ship.',
  description: 'Adil — Software Test Lead & Product Engineer. AyTee Labs portfolio.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}