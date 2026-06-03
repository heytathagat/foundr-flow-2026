import { Link } from 'react-router-dom';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function TeamTathagatKumar() {
  useDocumentMeta(
    'Tathagat Kumar — FoundrFlow',
    'Founder & Investor at FoundrFlow. Backing visionary founders and building category-defining companies across India.'
  );

  return (
    <>
      <PageHead
        crumb={<Link to="/about#team">Team</Link>}
        title={<>Tathagat<br /><em>Kumar</em></>}
        lead="Founder & Investor"
      />

      <section className="section">
        <div className="wrap">
          <div className="cols2 reveal" style={{ gap: 'clamp(60px,8vw,120px)', alignItems: 'center', marginTop: '60px' }}>
            <div style={{ flex: 1 }}>
              <img 
                src="/tathagat.jpeg" 
                alt="Tathagat Kumar" 
                style={{ 
                  width: '100%', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  objectFit: 'cover',
                  aspectRatio: '4/5'
                }} 
              />
            </div>
            <div style={{ flex: 1.2 }}>
              <div style={{ marginBottom: '32px' }}>
                <div style={{ 
                  display: 'inline-block', 
                  padding: '8px 20px', 
                  background: 'var(--cyan-deep)', 
                  color: 'white', 
                  borderRadius: '24px', 
                  fontSize: '0.875rem', 
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>
                  Founder & Investor
                </div>
              </div>
              <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
                <p style={{ marginBottom: '24px' }}>
                  Tathagat Kumar is an investor, venture studio leader, and startup ecosystem enabler dedicated to backing visionary founders and building category-defining companies. With a deep understanding of entrepreneurship, growth strategy, branding, and venture building, he works closely with startups to transform ambitious ideas into scalable and investment-ready businesses.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  His focus extends beyond funding, helping founders unlock growth through strategic mentorship, market access, partnerships, and execution support. Over the years, Tathagat has built a strong presence within the startup ecosystem, collaborating with entrepreneurs, investors, accelerators, incubators, and educational institutions across India.
                </p>
                <p>
                  Through his venture studio initiatives, he actively supports startups from ideation to scale, helping them validate opportunities, refine business models, strengthen go-to-market strategies, and create long-term value. Having mentored aspiring entrepreneurs, spoken at 50+ colleges and innovation platforms, judged startup competitions and hackathons, and contributed to numerous founder-focused programs, he is committed to fostering innovation and empowering the next generation of business leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Expertise</Eyebrow>
            <h2 className="section-title">Areas of focus</h2>
          </div>
          <div className="reveal" style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px,4vw,40px)' }}>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>💰</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Strategic Capital</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Early-stage investment with hands-on guidance for sustainable growth and market expansion.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>🤝</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Ecosystem Partnerships</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Access to networks across investors, mentors, industry experts, and strategic partners.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>🎯</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Market Insight</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Deep understanding of emerging sectors and non-metro markets across India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Impact</Eyebrow>
            <h2 className="section-title">Creating lasting change</h2>
          </div>
          <div className="cols2 reveal" style={{ marginTop: '60px', gap: 'clamp(40px,6vw,80px)' }}>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Startups Mentored</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Across India, from ideation to scale</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Speaking Engagements</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Colleges and innovation platforms</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '40px', padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>Key Contributions</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Validating business opportunities and refining models</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Strengthening go-to-market strategies</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Creating long-term value for founders</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Fostering innovation in Tier 2 & 3 India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
