# Foundr Flow — Website

A modern, animated React website for Foundr Flow — a venture studio and early-stage investor for Tier 2 & 3 founders across India.

## Tech Stack

- **React 18** + **Vite 5**
- **Montserrat** (Google Fonts)
- Pure CSS animations & transitions
- Custom cursor with lerp smoothing
- Scroll-triggered reveal animations (IntersectionObserver)
- No external animation libraries — just CSS + JS

## Pages

1. **Home** — Hero, marquee ticker, stats, focus areas, CTA strip
2. **Thesis** — 6-point investment philosophy grid
3. **Foundr X** — India tour info + 32-city grid
4. **Team** — Team cards with hover animations
5. **Partners** — Investor & campus partner grids
6. **Insights** — Article listings with hover effects
7. **Contact** — Info + contact form

## Features

- 🖱 Custom animated cursor (dot + ring with lerp)
- ⚡ Page load animation (loader screen)
- 🎞 Page transition animations (fade + slide)
- 👁 Scroll-triggered staggered reveals
- 🎭 Hover micro-interactions on all cards
- 📌 Sticky nav with blur + shadow on scroll
- 📰 Animated marquee ticker
- 🔴 Red accent system (logo, key numbers, hover states)
- 📱 Responsive-friendly (desktop optimized)
- 🔇 Noise texture overlay for print-like feel

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173)

## Customization

- Colors: edit CSS variables in `src/index.css` `:root`
- Content: edit page files in `src/pages/`
- Components: `src/components/`
- Animations: `.reveal` classes in `src/index.css`

## Deployment

```bash
npm run build
# Upload /dist folder to any static host (Netlify, Vercel, etc.)
```

---

Built with ❤️ for Foundr Flow · © 2026 Avergent (OPC) Pvt. Ltd.
