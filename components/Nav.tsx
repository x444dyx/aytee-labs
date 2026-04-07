'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const homeItems = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="AyTee Labs"
            className="h-6 w-auto"
          />
          <span className="text-sm font-medium tracking-wide">
            AyTee Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {homeItems.map((it) => (
            <a
              key={it.href}
              href={isHome ? it.href.replace('/', '') : it.href}
              className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-text transition"
            >
              {it.label}
            </a>
          ))}
          <Link
            href="/blog"
            className={`rounded-xl px-3 py-2 text-sm transition hover:bg-white/5 hover:text-text ${
              pathname.startsWith('/blog') ? 'text-text' : 'text-muted'
            }`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
