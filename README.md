# FoundrFlow — Website (React + Vite)

Marketing site for FoundrFlow, a venture studio backing founders across
Tier 2 & 3 India. Built with **React 19**, **Vite**, and **React Router** for
real client-side routing across pages. Plain CSS design system (no UI library).

## Getting started

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build -> /dist
npm run preview   # serve the production build locally
```

Requires Node.js 18+.

## Routes
| Path         | Page                                    |
|--------------|-----------------------------------------|
| `/`          | Home                                    |
| `/studio`    | What We Do (six studio pillars)         |
| `/portfolio` | Portfolio (filterable: All/Active/Exited)|
| `/process`   | The Process (six-month sprint + FAQ)    |
| `/about`     | About (manifesto, team, milestones)     |
| `/apply`     | Apply (validated application form)      |
| `*`          | 404                                     |

## Project structure
```
src/
├── main.jsx                 # entry
├── App.jsx                  # router + routes
├── styles/global.css        # design tokens + all component styles
├── data/content.js          # single source for all copy/data
├── hooks/
│   ├── useScrollReveal.js    # IntersectionObserver reveal-on-scroll
│   └── useDocumentMeta.js    # per-route <title> + meta description
├── components/
│   ├── Layout.jsx            # Header + Outlet + Footer, scroll/hash handling
│   ├── Header.jsx            # sticky nav, active link, mobile menu
│   ├── Footer.jsx
│   ├── common.jsx            # Eyebrow, CtaBand, PageHead, Ticker, PfRow
│   └── icons.jsx             # inline SVG icon set
└── pages/                    # Home, Studio, Portfolio, Process, About, Apply, NotFound
```

## Design system
- **Base colour:** warm paper `#fffef9`
- **Accent:** brand cyan (`#0fa3da` / `#2ec8f3`) from the logo, used sparingly
- **Ink:** charcoal `#15171c`; dark sections use near-black `#121317`
- **Type:** Fraunces (display) · Hanken Grotesk (body) · DM Mono (labels)
- All tokens are CSS custom properties at the top of `src/styles/global.css`.

## Logo
The supplied logo had a baked-in black background, so two transparent PNGs were
generated in `public/`:
- `logo.png` — original colours, for the light header
- `logo-light.png` — recoloured for the dark footer

Swap in SVG versions when available for crisper rendering.

## Deployment
The app uses `BrowserRouter` (clean URLs), so the host must rewrite all paths to
`index.html`:
- **Netlify** — handled by the included `public/_redirects`.
- **Vercel** — add a rewrite of `/(.*)` → `/index.html` (or use the React preset).
- **GitHub Pages / sub-path** — set `base: '/<repo>/'` in `vite.config.js` and add
  a SPA fallback (e.g. copy `index.html` to `404.html`).

## Notes
- Team names/photos (About) and footer email addresses are placeholders — replace
  before launch.
- The application form validates client-side and shows a success state, but does
  not yet send anywhere. Wire the `onSubmit` handler in `src/pages/Apply.jsx` to
  your backend or a service like Formspree to receive submissions.
- No tracking or cookies; the only external request is Google Fonts.
