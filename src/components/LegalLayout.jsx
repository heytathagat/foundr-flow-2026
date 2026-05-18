import { useReveal } from '../hooks/useReveal'
import Footer from './Footer'

export default function LegalLayout({ doc, title, eyebrow, effectiveDate, sections, onNav }) {
  useReveal()

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <button type="button" className="article-back reveal" onClick={() => onNav('home')}>
            ← Home
          </button>
          <div className="eyebrow reveal reveal-delay-1">{eyebrow}</div>
          <h1 className="hdline reveal reveal-delay-1">{title}</h1>
          <p className="body-text reveal reveal-delay-2">{effectiveDate}</p>
          <div className="legal-meta-pills reveal reveal-delay-3">
            <span className="legal-pill">Avergent (OPC) Pvt. Ltd.</span>
            <span className="legal-pill">foundrflow.in</span>
            <span className="legal-pill">Gurugram, India</span>
          </div>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container">
          <div className="legal-grid">
            {sections.map((s, i) => (
              <div
                className={`legal-card reveal reveal-delay-${(i % 3) + 1}`}
                key={s.title}
              >
                <div className="legal-card-num">{String(i + 1).padStart(2, '0')}</div>
                <h2 className="legal-card-title">{s.title}</h2>
                <p className="legal-card-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="inline-cta reveal">
            <h3>Questions about this document?</h3>
            <p>
              Reach the Foundr Flow team at hello@foundrflow.in — we respond to all legal and
              privacy inquiries within 3–5 business days.
            </p>
            <div className="btn-actions">
              <button type="button" className="btn btn-dark" onClick={() => onNav('contact')}>
                Contact Us
              </button>
              {doc !== 'privacy' && (
                <button type="button" className="btn btn-outline" onClick={() => onNav('privacy')}>
                  Privacy Policy
                </button>
              )}
              {doc !== 'terms' && (
                <button type="button" className="btn btn-outline" onClick={() => onNav('terms')}>
                  Terms of Use
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer onNav={onNav} />
    </>
  )
}
