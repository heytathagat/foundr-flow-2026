import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

const INVESTORS = [
  'ah! Ventures', 'Soonicorn Ventures', 'Draper Startup House',
  'eChai', '100X.VC', 'Titan Capital',
  'Artha Venture Fund', 'LetsVenture', 'AngelList India',
  'Mumbai Angels', 'Indian Angel Network', 'We Founder Circle',
]

const CAMPUSES = [
  'CGC University', 'IILM University Gurugram', 'Chitkara University',
  'Lovely Professional University', 'Amity University', 'Thapar University',
]

export default function Partners({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Partners</div>
            <h1 className="hdline reveal reveal-delay-1">
              Colleges, investors &<br /><em>ecosystem enablers.</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              30+ capital partners, colleges, and ecosystem enablers supporting Tier 2 & 3
              founders across India.
            </p>
          </div>

          <div className="eyebrow reveal" style={{ marginBottom: '1rem' }}>Investor Partners</div>
          <div className="partners-grid reveal reveal-delay-1">
            {INVESTORS.map((p, i) => (
              <div className="partner-cell" key={i}>
                <div className="partner-name">{p}</div>
              </div>
            ))}
          </div>

          <div className="eyebrow reveal" style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>Campus Partners</div>
          <div className="partners-grid reveal reveal-delay-1">
            {CAMPUSES.map((p, i) => (
              <div className="partner-cell" key={i}>
                <div className="partner-name">{p}</div>
              </div>
            ))}
          </div>

          <div className="inline-cta inline-cta--center reveal" style={{ marginTop: '3.5rem' }}>
            <h3>Want to partner with us?</h3>
            <p>
              Whether you're an investor, college, or ecosystem enabler — there's a place in the Foundr Flow network.
            </p>
            <button className="btn btn-dark" onClick={() => onNav('contact')}>Partner Application</button>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
