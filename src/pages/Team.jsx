import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

const TEAM = [
  {
    initials: 'TK', name: 'Tathagat Kumar', role: 'Founder & Managing Partner',
    bio: 'Builder, operator, and founder evangelist. On a mission to democratize access to venture capital for underdog founders across India\'s Tier 2 & 3 cities.',
  },
  {
    initials: 'SP', name: 'Studio Partners', role: 'Operators & Advisors',
    bio: 'A network of operators, ex-founders, and domain experts who co-build with portfolio companies on product, brand, growth, and GTM.',
  },
  {
    initials: 'CP', name: 'Capital Partners', role: '30+ Investor Partners',
    bio: 'Angel investors, micro-VCs, and family offices across India who co-invest alongside the studio in high-conviction early-stage deals.',
  },
]

export default function Team({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">The Team</div>
            <h1 className="hdline reveal reveal-delay-1">
              Operators who've been<br /><em>in the trenches.</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              We're builders, not advisors. Every person in the Foundr Flow team has shipped real
              products and navigated real constraints.
            </p>
          </div>

          <div className="team-grid">
            {TEAM.map((t, i) => (
              <div className={`team-card reveal reveal-delay-${i + 1}`} key={i}>
                <div className="avatar">{t.initials}</div>
                <div className="tm-name">{t.name}</div>
                <div className="tm-role">{t.role}</div>
                <div className="tm-bio">{t.bio}</div>
              </div>
            ))}
          </div>

          <div className="inline-cta reveal" style={{ marginTop: '3.5rem' }}>
            <h3>Partner with the Studio</h3>
            <p>
              We're always looking to add operators, investors, and ecosystem builders to our network.
              If you've built something real and want to help others do the same — let's talk.
            </p>
            <button className="btn btn-dark" onClick={() => onNav('contact')}>Partner Application</button>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
