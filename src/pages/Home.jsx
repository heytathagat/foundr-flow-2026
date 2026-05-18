import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

const MARQUEE_ITEMS = [
  'Venture Studio', 'Tier 2 India', 'Early Stage', 'Tier 3 Founders',
  'Co-Building', '45+ Cities', 'Product to Market', 'Foundr X Tour',
  'Venture Studio', 'Tier 2 India', 'Early Stage', 'Tier 3 Founders',
  'Co-Building', '45+ Cities', 'Product to Market', 'Foundr X Tour',
]

const FOCUS = [
  { title: 'Student & Campus Founders', desc: 'Makers building products out of college corridors, tech societies, and early careers in Tier 2 & 3 cities.' },
  { title: 'SaaS & Tools from the Edges', desc: 'Vertical tools, automation, and AI helpers that start with a real workflow in smaller markets.' },
  { title: 'Community & Creator-Led Products', desc: 'Products that start with an audience: content, community, and niche distribution loops.' },
  { title: 'Brands from Bharat', desc: 'Digital-first brands with unfair go-to-market in Tier 2 & 3 — offline + online done right.' },
]

const STUDIO_SUPPORT = [
  { title: 'Product & Engineering', desc: 'From MVP scoping to shipped features — we help founders build products users actually adopt, not decks.' },
  { title: 'Brand & Narrative', desc: 'Positioning, visual identity, and pitch narrative that translate local insight into a story investors understand.' },
  { title: 'GTM & Distribution', desc: 'Channel design, sales collateral, and repeatable loops — distribution before product, built for Bharat markets.' },
  { title: 'Fundraising Pipeline', desc: 'Treat your raise like a sales motion: sequencing, investor targeting, and diligence-ready materials.' },
  { title: 'Hiring & Operations', desc: 'Early team design, hiring plans, and operator discipline so execution keeps pace with ambition.' },
  { title: 'Ecosystem Access', desc: '30+ capital and ecosystem partners, 45+ city network via Foundr X, and introductions that compound.' },
]

const PROCESS = [
  { step: '01', title: 'Apply & Align', desc: 'Share what you\'re building, your market edge, and stage. We respond with clear next steps — not generic holds.' },
  { step: '02', title: 'Co-Build Sprint', desc: 'Hands-on studio sprints on product, brand, and GTM — tailored to founders shipping from Tier 2 & 3 India.' },
  { step: '03', title: 'Launch & Scale', desc: 'Distribution loops, fundraising support, and ecosystem intros as you grow from first users to first cheque.' },
]

const HOME_INSIGHTS = [
  {
    slug: 'tier2-advantage',
    date: 'Jan 12, 2026',
    read: '16 min read',
    title: 'The Tier 2/3 Advantage: distribution before product',
    tags: ['Thesis', 'GTM'],
  },
  {
    slug: 'fundraising-pipeline',
    date: 'Dec 2, 2025',
    read: '18 min read',
    title: 'Fundraising is a sales process — build a pipeline',
    tags: ['Fundraising', 'Strategy'],
  },
  {
    slug: 'diligence-notes',
    date: 'Oct 18, 2025',
    read: '20 min read',
    title: 'Diligence notes we wish every founder wrote',
    tags: ['Operations', 'Metrics'],
  },
]

const HIGHLIGHT_CITIES = ['Jaipur', 'Indore', 'Coimbatore', 'Lucknow', 'Surat', 'Patna', 'Bhubaneswar', 'Nagpur']

export default function Home({ onNav }) {
  useReveal()

  return (
    <div className="home-page">
      <section className="hero hero-large">
        <div className="hero-inner">
          <div className="eyebrow reveal">Venture Studio · Early-Stage Investments · Bharat</div>
          <h1 className="hdline hdline-hero reveal reveal-delay-1">
            Co-building<br />with <em>Tier 2 &</em><br />
            <span className="accent">Tier 3</span> founders.
          </h1>
          <p className="body-text body-text-hero reveal reveal-delay-2">
            Foundr Flow is a venture studio and early investor that helps underdog founders from
            Tier 2 & 3 India design, build, and launch companies — product, brand, distribution,
            and capital support included.
          </p>
          <div className="btn-actions reveal reveal-delay-3">
            <button type="button" className="btn btn-dark btn-lg" onClick={() => onNav('contact')}>Apply to the Studio</button>
            <button type="button" className="btn btn-outline btn-lg" onClick={() => onNav('thesis')}>How We Work →</button>
          </div>
        </div>

        <div className="hero-marquee-wrap hero-marquee-large">
          <div className="hero-marquee">
            {MARQUEE_ITEMS.map((item, i) => (
              <span className="marquee-item marquee-item-lg" key={i}>
                <span className="marquee-dot" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="stats-grid container stats-grid-large" style={{ padding: 0, maxWidth: '100%' }}>
          {[
            { num: '45', suffix: '+', label: 'Cities in Foundr X Network' },
            { num: '30', suffix: '+', label: 'Capital & Ecosystem Partners' },
            { num: 'T2/T3', suffix: '', label: "India's Underdog Founders" },
            { num: '6', suffix: '', label: 'Studio Support Pillars' },
          ].map((s, i) => (
            <div className="stat-cell stat-cell-lg reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-num stat-num-lg">
                <span className="red">{s.num}</span>{s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <section className="section section-home">
        <div className="container">
          <div className="section-head section-head-lg">
            <div className="eyebrow reveal">Where the Studio Goes Deep</div>
            <h2 className="hdline hdline-section reveal reveal-delay-1">
              We back founders who<br /><em>understand their market.</em>
            </h2>
            <p className="body-text body-text-wide reveal reveal-delay-2">
              We work with founders who know their local markets and want help productizing that insight — brand, tech, and GTM included.
            </p>
          </div>
          <div className="focus-grid focus-grid-lg">
            {FOCUS.map((f, i) => (
              <div className={`focus-card focus-card-lg reveal reveal-delay-${i + 1}`} key={i}>
                <div className="fc-num fc-num-lg">0{i + 1}</div>
                <div className="fc-title">{f.title}</div>
                <div className="fc-desc fc-desc-lg">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section section-home section-alt">
        <div className="container">
          <div className="section-head section-head-lg">
            <div className="eyebrow reveal">What We Bring</div>
            <h2 className="hdline hdline-section reveal reveal-delay-1">
              Studio support,<br /><em>not just capital.</em>
            </h2>
            <p className="body-text body-text-wide reveal reveal-delay-2">
              Operators who co-build from day zero — product, brand, distribution, and fundraising in one motion.
            </p>
          </div>
          <div className="thesis-grid">
            {STUDIO_SUPPORT.map((item, i) => (
              <div className={`thesis-item reveal reveal-delay-${(i % 2) + 1}`} key={item.title}>
                <div className="t-num">0{i + 1}</div>
                <div className="t-title">{item.title}</div>
                <div className="t-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section section-home">
        <div className="container">
          <div className="section-head section-head-lg">
            <div className="eyebrow reveal">How It Works</div>
            <h2 className="hdline hdline-section reveal reveal-delay-1">
              From application<br /><em>to scale.</em>
            </h2>
          </div>
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <div className={`process-card reveal reveal-delay-${i + 1}`} key={p.step}>
                <div className="process-step">{p.step}</div>
                <div className="process-title">{p.title}</div>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section section-home section-alt">
        <div className="container">
          <div className="fx-hero-box reveal">
            <div className="fx-badge">Foundr X · 2026 India Tour</div>
            <h2 className="hdline hdline-section" style={{ marginBottom: '1rem' }}>
              45+ cities.<br /><em>One connected network.</em>
            </h2>
            <p className="body-text" style={{ maxWidth: '520px' }}>
              A national networking tour connecting founders, investors, and ecosystem partners
              across India — keynotes, panels, live pitches, and curated networking at every stop.
            </p>
            <div className="cities-grid cities-grid-compact">
              {HIGHLIGHT_CITIES.map((city) => (
                <span className="city-pill" key={city}>{city}</span>
              ))}
              <span className="city-pill city-pill-more">+37 more</span>
            </div>
            <div className="btn-actions" style={{ marginTop: '2rem' }}>
              <button type="button" className="btn btn-dark" onClick={() => onNav('foundrx')}>Explore Foundr X</button>
              <button type="button" className="btn btn-outline" onClick={() => onNav('contact')}>Partner / Sponsor</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section section-home">
        <div className="container">
          <div className="section-head section-head-lg">
            <div className="eyebrow reveal">Insights</div>
            <h2 className="hdline hdline-section reveal reveal-delay-1">
              Notes from the<br /><em>studio floor.</em>
            </h2>
            <p className="body-text body-text-wide reveal reveal-delay-2">
              Practical writing on distribution, fundraising, and operations for Tier 2 & 3 founders.
            </p>
          </div>
          <div>
            {HOME_INSIGHTS.map((ins, i) => (
              <div
                className={`insight-item insight-item-link reveal reveal-delay-${i + 1}`}
                key={ins.slug}
                onClick={() => onNav('article', ins.slug)}
                onKeyDown={(e) => e.key === 'Enter' && onNav('article', ins.slug)}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="ins-meta">{ins.date} · {ins.read}</div>
                  <div className="ins-title">{ins.title}</div>
                  <div className="ins-tags">
                    {ins.tags.map((tag) => (
                      <span className="ins-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="ins-arrow">→</div>
              </div>
            ))}
          </div>
          <div className="btn-actions reveal" style={{ marginTop: '2.5rem' }}>
            <button type="button" className="btn btn-outline" onClick={() => onNav('insights')}>All Insights →</button>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="cta-strip cta-strip-lg">
        <div className="eyebrow reveal">Building from outside the usual hotspots?</div>
        <h2 className="hdline hdline-section reveal reveal-delay-1">
          If you're shipping,<br />we want to <em>hear from you.</em>
        </h2>
        <p className="body-text reveal reveal-delay-2">
          Student, operator, or creator from Tier 2 or Tier 3 — expect clear next steps, not generic "let's keep in touch".
        </p>
        <div className="btn-actions reveal reveal-delay-3">
          <button type="button" className="btn btn-dark btn-lg" onClick={() => onNav('contact')}>Apply to Foundr Flow</button>
          <button type="button" className="btn btn-outline btn-lg" onClick={() => onNav('foundrx')}>Explore Foundr X</button>
        </div>
      </section>

      <Footer onNav={onNav} />
    </div>
  )
}
