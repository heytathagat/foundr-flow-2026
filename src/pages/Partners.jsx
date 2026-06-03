import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Partners() {
  useDocumentMeta(
    'Partners — FoundrFlow',
    'Our ecosystem partners who support and empower founders across Tier 2 & 3 India.'
  );

  return (
    <>
      <PageHead
        crumb="Partners"
        title={<>Our<br /><em>Partners</em></>}
        lead="Building an ecosystem that empowers founders to succeed."
      />

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Ecosystem</Eyebrow>
            <h2 className="section-title">Partners who believe<br />in the underdogs.</h2>
          </div>
          <div className="reveal" style={{ marginTop: '60px', maxWidth: '70ch', fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
            <p style={{ marginBottom: '24px' }}>
              FoundrFlow collaborates with a network of ecosystem partners across India to provide founders with access to resources, mentorship, and opportunities. Our partners include incubators, accelerators, industry associations, and ecosystem enablers who share our conviction in backing founders from Tier 2 & 3 cities.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Our partner network spans across 18+ cities, covering incubators, accelerators, venture studios, corporate innovation programs, and government initiatives. Each partner brings unique capabilities and resources that help founders navigate the challenges of building scalable businesses from non-metro locations.
            </p>
            <p>
              Through these partnerships, founders gain access to co-working spaces, mentor networks, funding opportunities, market connections, and technical support that would otherwise be difficult to access from Tier 2 & 3 locations. We believe in the power of collective action to create a more inclusive startup ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Our Partners</Eyebrow>
            <h2 className="section-title">Organizations supporting<br />the next generation.</h2>
          </div>
          <div className="reveal" style={{ marginTop: '60px', padding: 'clamp(40px,5vw,80px) clamp(24px,4vw,60px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: 'clamp(40px,6vw,60px)', 
              alignItems: 'center', 
              justifyContent: 'center'
            }}>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/venturenest.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/startuppunjab.jpeg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/visey.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/valuechampions.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/TIE.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/angelblue.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/ahventures.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/echai.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/draperstartuphouse.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/venturecatalysts.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/startupnews.fyi.jpeg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/faad-network.jpeg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/tsuv.jpg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/o2 angel.jpg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/soonicron.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/Bhive.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/razorpay.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/SMVDM.png" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/srot.jpeg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/ibse.jpeg" alt="Partner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', maxWidth: '200px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 600, color: 'var(--ink-2)' }}>
                +30 more
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Partner with us</Eyebrow>
            <h2 className="section-title">Join our ecosystem.</h2>
          </div>
          <div className="reveal" style={{ marginTop: '60px', maxWidth: '70ch', fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
            <p style={{ marginBottom: '24px' }}>
              We're always looking to expand our network of partners who can support founders with resources, mentorship, and opportunities. If you're an incubator, accelerator, industry association, or ecosystem enabler interested in collaborating, we'd love to hear from you.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Our partners receive access to deal flow from high-potential founders across Tier 2 & 3 India, opportunities to mentor and guide early-stage startups, and visibility within our growing ecosystem. We work closely with each partner to ensure mutually beneficial collaborations that create real value for founders.
            </p>
            <p>
              Together, we can create more opportunities for founders across India's overlooked cities and help build the next generation of category-defining companies. Join us in our mission to democratize access to resources and opportunities for founders everywhere.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: '40px' }}>
            <a href="/contact" style={{ 
              display: 'inline-block', 
              padding: '16px 32px', 
              background: 'var(--cyan-deep)', 
              color: 'white', 
              borderRadius: '8px', 
              fontSize: '1rem', 
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.3s ease'
            }}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
