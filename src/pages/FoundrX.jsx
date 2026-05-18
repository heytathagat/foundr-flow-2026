import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

const CITIES = [
  'Delhi NCR','Gurugram','Noida','Jaipur','Chandigarh','Ludhiana','Amritsar',
  'Dehradun','Lucknow','Kanpur','Agra','Varanasi','Patna','Ranchi','Bhubaneswar',
  'Raipur','Indore','Bhopal','Nagpur','Nashik','Surat','Vadodara','Ahmedabad',
  'Rajkot','Pune','Kolhapur','Mysore','Coimbatore','Madurai','Vizag','Vijayawada','Hubli',
]

export default function FoundrX({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="eyebrow reveal">Coming Soon — 2026 India Tour</div>

          <div className="fx-hero-box reveal reveal-delay-1">
            <div className="fx-badge">Foundr X · National Networking Tour</div>
            <h1 className="hdline" style={{ fontSize: 'clamp(2rem,4.5vw,4rem)' }}>
              45+ cities.<br /><em>One connected</em><br />network.
            </h1>
            <p className="body-text" style={{ maxWidth: '520px' }}>
              A business networking tour built to connect startup founders, investors, and ecosystem
              partners across 45+ cities — with keynotes, panels, live pitches, and curated
              networking at every stop.
            </p>
            <div className="btn-actions">
              <button className="btn btn-dark" onClick={() => onNav('contact')}>Apply to Pitch</button>
              <button className="btn btn-outline" onClick={() => onNav('contact')}>Partner / Sponsor</button>
            </div>
          </div>

          <div className="section-head">
            <div className="eyebrow reveal">Cities on the Tour</div>
            <h2 className="hdline reveal reveal-delay-1" style={{ fontSize: 'clamp(1.8rem,3vw,2.8rem)', marginBottom: '2rem' }}>
              Expanding into every<br /><em>innovation hub in India.</em>
            </h2>
          </div>

          <div className="cities-grid">
            {CITIES.map((city, i) => (
              <div
                className={`city-pill reveal`}
                style={{ transitionDelay: `${(i % 8) * 0.04}s` }}
                key={i}
              >
                {city}
              </div>
            ))}
          </div>

          <div className="inline-cta reveal" style={{ marginTop: '4rem' }}>
            <h3>Want to bring Foundr X to your city?</h3>
            <p>We're actively looking for city partners, sponsors, and campus organizers to help us take Foundr X to every corner of India.</p>
            <button className="btn btn-dark" onClick={() => onNav('contact')}>Get Involved</button>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
