# AyTee Labs — POC (one-page animated portfolio)

This is a proof-of-concept one-page portfolio site for **AyTee Labs**.

## What’s included
- Next.js (App Router)
- Tailwind CSS
- Framer Motion reveal + de-emphasis animations
- Lenis smooth scrolling on desktop (auto-disabled on touch devices)

## Getting started

### 1) Install
```bash
npm install
```

### 2) Run
```bash
npm run dev
```

Open http://localhost:3000

## Where to edit
- Main page: `app/page.tsx`
- Scroll smoothing: `components/SmoothScroll.tsx`
- Reveal animation: `components/Reveal.tsx`
- Project cards: `components/ProjectCard.tsx`

## Next tweaks we can do
- Sticky/pinned project storytelling section
- Real logo integration (SVG)
- Replace mock links + add real project details
- Add “score share” card for Pulse
- Add ultra-smooth section transitions and mobile-specific tuning
