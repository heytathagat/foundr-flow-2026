import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

const THESIS = [
  { title: 'Distribution Before Product', desc: 'The best early signal isn\'t a demo day pitch — it\'s a repeatable, low-cost distribution edge. We back founders who\'ve already built an audience or channel before writing a line of code.' },
  { title: 'Operators, Not Just Capital', desc: 'We co-build alongside founders — not just write cheques. Our studio provides hands-on support on product, branding, GTM, and fundraising narrative from day zero.' },
  { title: 'Tier 2 & 3 as Unfair Advantage', desc: 'Founders from smaller cities have ground-level insight that no amount of market research can replicate. We help productize that local advantage into scalable businesses.' },
  { title: 'Execution Over Optics', desc: 'We don\'t reward founders for attending events or updating decks. We reward shipping. Our network is built around operators who\'ve built real things under real constraints.' },
  { title: 'Fundraising as Sales', desc: 'Momentum isn\'t luck — it\'s sequencing, narrative, and pipeline hygiene. We help founders treat their fundraise like a sales process with clear stages and decision criteria.' },
  { title: 'Long-Term Ecosystem Building', desc: 'Every founder we back becomes a node in a larger network. We\'re building compounding relationships, not one-off investments — across 45+ cities across India.' },
]

export default function Thesis({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Our Thesis</div>
            <h1 className="hdline reveal reveal-delay-1">
              The Foundr Flow<br /><em>Investment Philosophy</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              We believe the best founders in India are not in Mumbai or Bengaluru.
              They're in cities nobody's paying attention to — and that's exactly where we are.
            </p>
          </div>

          <div className="thesis-grid">
            {THESIS.map((t, i) => (
              <div className={`thesis-item reveal reveal-delay-${(i % 2) + 1}`} key={i}>
                <div className="t-num">0{i + 1}</div>
                <div className="t-title">{t.title}</div>
                <div className="t-desc">{t.desc}</div>
              </div>
            ))}
          </div>

          <div className="btn-actions reveal" style={{ marginTop: '3rem' }}>
            <button className="btn btn-dark" onClick={() => onNav('contact')}>Apply to the Studio</button>
            <button className="btn btn-outline" onClick={() => onNav('foundrx')}>Explore Foundr X →</button>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
