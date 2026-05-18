import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

export default function Contact({ onNav }) {
  const [sent, setSent] = useState(false)
  useReveal()

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Let's Talk</div>
            <h1 className="hdline reveal reveal-delay-1">
              Ready to build<br /><em>something real?</em>
            </h1>
          </div>

          <div className="contact-grid">
            {/* LEFT INFO */}
            <div className="reveal">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Get in touch with the studio.
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '2.5rem', maxWidth: '380px' }}>
                We respond to every application with clear next steps — not generic "let's keep in touch".
                If you're shipping from Tier 2 or 3 India, we want to hear from you.
              </p>

              {[
                { label: 'Email', val: 'hello@foundrflow.in' },
                { label: 'Operational Office', val: 'Plot 2469, Block C, Sushant Lok Phase 1\nSector 43, Gurugram — 122001' },
                { label: 'Registered Office', val: 'E902 M2k County Heights, Sec 5\nDharuhera, Haryana — 123106' },
                { label: 'Social', val: 'LinkedIn · @foundrflow' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '1.5rem' }}>
                  <div className="c-info-label">{item.label}</div>
                  <div className="c-info-val" style={{ whiteSpace: 'pre-line' }}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* RIGHT FORM */}
            <div className="reveal reveal-delay-2">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" type="text" placeholder="Ravi Sharma" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="ravi@yourcompany.in" />
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <input className="form-input" type="text" placeholder="Jaipur, Rajasthan" />
              </div>
              <div className="form-group">
                <label className="form-label">I'm applying as a...</label>
                <select className="form-select form-input">
                  <option>Founder — Apply to Studio</option>
                  <option>Investor — Partner with Us</option>
                  <option>College / Institution — Campus Partnership</option>
                  <option>Sponsor — Foundr X Tour</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">What you're building</label>
                <textarea
                  className="form-textarea form-input"
                  placeholder="Describe your company, stage, and what kind of support you're looking for..."
                />
              </div>
              <button
                className={`submit-btn${sent ? ' sent' : ''}`}
                onClick={() => setSent(true)}
              >
                {sent ? '✓ Application Sent!' : 'Submit Application'}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
