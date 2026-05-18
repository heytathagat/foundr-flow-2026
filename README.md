# Foundr Flow — Website

A modern, animated React website for [Foundr Flow](https://foundr-flow-2026.vercel.app) — a venture studio and early-stage investor for Tier 2 & 3 founders across India.

**Repository:** [github.com/heytathagat/foundr-flow-2026](https://github.com/heytathagat/foundr-flow-2026)

## Tech Stack

- **React 18** + **Vite 5**
- **Montserrat** (Google Fonts)
- Pure CSS animations & transitions
- Custom cursor with lerp smoothing
- Scroll-triggered reveal animations (IntersectionObserver)
- Hash-based routing for shareable page links

## Pages

1. **Home** — Hero, stats, focus areas, studio support, process, Foundr X preview, insights, CTA
2. **Thesis** — 6-point investment philosophy grid
3. **Foundr X** — India tour info + city grid
4. **Team** — Team cards with hover animations
5. **Partners** — Investor & campus partner grids
6. **Insights** — 5 articles (all clickable, full long-form content)
7. **Contact** — Info + application form
8. **Privacy Policy** & **Terms of Use** — Legal pages matching site design

## Features

- FW logo (`public/foundrflow.jpg`) in nav, footer, and loader
- Custom animated cursor (dot + ring)
- Page load animation + page transitions
- Scroll-triggered staggered reveals
- **Contact Us** CTA in navigation
- Full insight articles with back navigation
- Legal pages with card grid layout

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview production build
```

## URL Routes (hash)

| URL | Page |
|-----|------|
| `/` | Home |
| `/#/thesis` | Thesis |
| `/#/insights` | Insights |
| `/#/article/tier2-advantage` | Article |
| `/#/privacy` | Privacy Policy |
| `/#/terms` | Terms of Use |
| `/#/contact` | Contact |

## Deployment (Vercel)

Connected to GitHub — pushes to `main` auto-deploy to Vercel.

```bash
npm run build
```

---

Built for Foundr Flow · © 2026 Avergent (OPC) Pvt. Ltd.
