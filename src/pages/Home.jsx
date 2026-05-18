import { useEffect } from 'react'
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

const HOW_WE_HELP = [
  { title: 'Product Design & Development', desc: 'From wireframes to shipped product — we help you build what users actually want, not what looks good in a pitch deck.' },
  { title: 'Brand & Positioning', desc: 'Craft your story, visual identity, and market positioning that resonates with your target audience.' },
  { title: 'Go-to-Market Strategy', desc: 'Distribution channels, pricing, and launch plans that work for Tier 2 & 3 markets, not just metro assumptions.' },
  { title: 'Fundraising Support', desc: 'Narrative building, deck refinement, and investor introductions — we help you tell your story to the right people.' },
  { title: 'Network & Community', desc: 'Access to 45+ cities of founders, operators, and mentors who understand building from the ground up.' },
  { title: 'Operational Guidance', desc: 'Hiring, legal, compliance, and day-to-day operations — practical help for early-stage chaos.' },
]

export default function Home({ onNav }) {
  useReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="eyebrow reveal">Venture Studio · Early-Stage Investments · Bharat</div>
          <h1 className="hdline reveal reveal-delay-1">
            Co-building<br />with <em>Tier 2 &</em><br />
            <span className="accent">Tier 3</span> founders.
          </h1>
          <p className="body-text reveal reveal-delay-2">
            Foundr Flow is a venture studio and early investor that helps underdog founders from
            Tier 2 & 3 India design, build, and launch companies — product, brand, distribution,
            and capital support included.
          </p>
          <div className="btn-actions reveal reveal-delay-3">
            <button className="btn btn-dark" onClick={() => onNav('contact')}>Apply to the Studio</button>
            <button className="btn btn-outline" onClick={() => onNav('thesis')}>How We Work →</button>
          </div>
        </div>

        {/* Marquee */}
        <div className="hero-marquee-wrap" style={{ marginTop: '4rem' }}>
          <div className="hero-marquee">
            {MARQUEE_ITEMS.map((item, i) => (
              <span className="marquee-item" key={i}>
                <span className="marquee-dot" /> {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid container" style={{ padding: 0, maxWidth: '100%' }}>
          {[
            { num: '45', suffix: '+', label: 'Cities in Foundr X Network' },
            { num: '30', suffix: '+', label: 'Capital & Ecosystem Partners' },
            { num: 'T2/T3', suffix: '', label: "India's Underdog Founders" },
          ].map((s, i) => (
            <div className="stat-cell reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-num">
                <span className="red">{s.num}</span>{s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* FOCUS SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Where the Studio Goes Deep</div>
            <h2 className="hdline reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              We back founders who<br /><em>understand their market.</em>
            </h2>
            <p className="body-text reveal reveal-delay-2">
              We work with founders who know their local markets and want help productizing that insight — brand, tech, and GTM included.
            </p>
          </div>
          <div className="focus-grid">
            {FOCUS.map((f, i) => (
              <div className={`focus-card reveal reveal-delay-${i + 1}`} key={i}>
                <div className="fc-num">0{i + 1}</div>
                <div className="fc-title">{f.title}</div>
                <div className="fc-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* HOW WE HELP SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">What We Actually Do</div>
            <h2 className="hdline reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}>
              More than capital.<br /><em>We co-build.</em>
            </h2>
            <p className="body-text reveal reveal-delay-2">
              We don't just write cheques and disappear. Our studio model means hands-on support across product, brand, GTM, and fundraising.
            </p>
          </div>
          <div className="focus-grid">
            {HOW_WE_HELP.map((h, i) => (
              <div className={`focus-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
                <div className="fc-num">0{i + 1}</div>
                <div className="fc-title">{h.title}</div>
                <div className="fc-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="eyebrow reveal">Building from outside the usual hotspots?</div>
        <h2 className="hdline reveal reveal-delay-1">
          If you're shipping,<br />we want to <em>hear from you.</em>
        </h2>
        <p className="body-text reveal reveal-delay-2">
          Student, operator, or creator from Tier 2 or Tier 3 — expect clear next steps, not generic "let's keep in touch".
        </p>
        <div className="btn-actions reveal reveal-delay-3">
          <button className="btn btn-dark" onClick={() => onNav('contact')}>Apply to Foundr Flow</button>
          <button className="btn btn-outline" onClick={() => onNav('foundrx')}>Explore Foundr X</button>
        </div>
      </section>

      <Footer onNav={onNav} />
    </>
  )
}
