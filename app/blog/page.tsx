'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import { posts } from '@/data/posts'

export default function BlogPage() {
  const featured = posts[posts.length - 1]
  const rest = [...posts].reverse().slice(1)

  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="grain" />

      <Nav />

      <section className="mx-auto w-full max-w-5xl px-5 pt-36 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">AyTee Labs</p>
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-3 text-muted max-w-xl">
            Build notes, technical decisions, and honest writing from the process of building products.
          </p>
        </Reveal>

        {/* FEATURED POST */}
        <Reveal delay={0.08}>
          <Link href={`/blog/${featured.slug}`} className="group block mt-14">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f14] p-10 transition-all duration-300 group-hover:border-white/15"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-yellow-500/10 via-yellow-400/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
                    <span>{featured.category}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="rounded-full bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 text-[10px] uppercase tracking-widest text-yellow-400 font-medium">
                    New
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-white/5" />

                <div className="mt-8 flex items-start justify-between gap-8">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 max-w-3xl leading-tight">
                    {featured.title}
                  </h2>
                  <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400 shrink-0 text-xl mt-1">
                    ↗
                  </span>
                </div>

                <p className="mt-5 text-base leading-relaxed text-white/60 max-w-3xl">
                  {featured.excerpt}
                </p>

                <div className="mt-8 h-px w-full bg-white/5" />

                <div className="mt-6 text-sm text-white/40 group-hover:text-yellow-400 transition-colors duration-300">
                  Read post →
                </div>
              </div>
            </motion.div>
          </Link>
        </Reveal>

        {/* GRID */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.07}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f14] p-7 transition-all duration-300 group-hover:border-white/10 h-full flex flex-col"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/35">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="mt-4 h-px w-full bg-white/5" />

                      <div className="mt-5 flex items-start justify-between gap-4">
                        <h2 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400 leading-snug">
                          {post.title}
                        </h2>
                        <span className="text-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400 shrink-0 text-sm mt-0.5">
                          ↗
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-white/55 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 h-px w-full bg-white/5" />

                      <div className="mt-4 flex items-center justify-between text-xs text-white/35">
                        <span>{post.date}</span>
                        <span className="group-hover:text-white/60 transition-colors duration-300">Read →</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 pb-16 flex items-center justify-between text-xs text-muted">
        <Link href="/" className="hover:text-text transition">← Back to home</Link>
        <span>© {new Date().getFullYear()} AyTee Labs</span>
      </div>
    </main>
  )
}
