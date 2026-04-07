'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Nav from '@/components/Nav'
import { posts } from '@/data/posts'

type Props = {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Post not found</h1>
          <Link href="/blog" className="mt-6 inline-block text-sm underline">
            Back to blog
          </Link>
        </div>
      </main>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="grain" />

      <Nav />

      <Link
        href="/blog"
        className="fixed top-8 left-8 z-50 text-sm tracking-wide text-white/50 hover:text-white transition"
      >
        ← Back
      </Link>

      {/* HERO */}
      <section className="mx-auto w-full max-w-3xl px-5 pt-36 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/40">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-10 h-px w-full bg-white/10" />
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-3xl px-5 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 leading-relaxed text-base"
        >
          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h2 key={i} className="text-xl font-semibold text-white mt-10 mb-3">
                  {para.replace(/\*\*/g, '')}
                </h2>
              )
            }
            return (
              <p key={i} className="text-white/65 leading-[1.85] mb-5">
                {para.replace(/\*\*/g, '')}
              </p>
            )
          })}
        </motion.div>
      </section>

      {/* FOOTER */}
      <div className="mx-auto w-full max-w-3xl px-5 pb-16 flex items-center justify-between text-xs text-muted border-t border-white/5 pt-8">
        <Link href="/blog" className="hover:text-text transition">← All posts</Link>
        <span>© {new Date().getFullYear()} AyTee Labs</span>
      </div>
    </main>
  )
}
