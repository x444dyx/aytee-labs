'use client'

import { motion } from 'framer-motion'

const items = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
]

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4">
		<a href="#top" className="flex items-center gap-2">
		  <img
			src="/logo.png"
			alt="AyTee Labs"
			className="h-6 w-auto"
		  />
		  <span className="text-sm font-medium tracking-wide">
			AyTee Labs
		  </span>
		</a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-text transition"
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
