'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import { posts } from '@/data/posts'

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="grain" />

      <Nav />

      <section className="mx-auto w-full max-w-5xl px-5 pt-36 pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">AyTee Labs</p>
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-3 text-muted max-w-xl">
            Build notes, technical decisions, and honest writing from the process of building products.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="rounded-2xl border border-white/5 bg-[#0b0f14] p-8 transition-all duration-300 group-hover:border-white/10"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/40">
                    <span>{post.category}</span>
                    <span>{post.date} &nbsp;·&nbsp; {post.readTime}</span>
                  </div>

                  <div className="mt-5 h-px w-full bg-white/5" />

                  <div className="mt-6 flex items-start justify-between gap-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 max-w-2xl">
                      {post.title}
                    </h2>
                    <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400 shrink-0">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 h-px w-full bg-white/5" />

                  <div className="mt-5 text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">
                    Read post →
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 pb-16 flex items-center justify-between text-xs text-muted">
        <Link href="/" className="hover:text-text transition">← Back to home</Link>
        <span>© {new Date().getFullYear()} AyTee Labs</span>
      </div>
    </main>
  )
}
