import { Link } from 'react-router-dom';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function TeamNikhilGupta() {
  useDocumentMeta(
    'Nikhil Gupta — FoundrFlow',
    'Strategic Advisor at FoundrFlow. Most Admired BFSI Professional 2026, investor, startup mentor, and business strategist.'
  );

  return (
    <>
      <PageHead
        crumb={<Link to="/about#team">Team</Link>}
        title={<>Nikhil<br /><em>Gupta</em></>}
        lead="Strategic Advisor"
      />

      <section className="section">
        <div className="wrap">
          <div className="cols2 reveal" style={{ gap: 'clamp(60px,8vw,120px)', alignItems: 'center', marginTop: '60px' }}>
            <div style={{ flex: 1 }}>
              <img 
                src="/nikhil.jpg" 
                alt="Nikhil Gupta" 
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
                  Strategic Advisor
                </div>
              </div>
              <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
                <p style={{ marginBottom: '24px' }}>
                  Nikhil Gupta is a Most Admired BFSI Professional (2026) with extensive experience as an investor, startup mentor, and business strategist. As an Alternative Investment Fund Manager and seasoned banker, he brings deep expertise in financial services, investment management, and strategic advisory.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  A visiting faculty and podcast speaker, Nikhil shares his knowledge through mentorship and thought leadership, helping founders navigate complex financial landscapes and build scalable businesses. His background in banking and alternative investments provides unique insights into capital markets and funding strategies.
                </p>
                <p>
                  At FoundrFlow, Nikhil provides strategic guidance on financial structuring, investment readiness, and business scaling. His experience across BFSI, startups, and academia enables him to offer comprehensive advisory support to founders looking to build sustainable and investment-ready businesses.
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
                <span style={{ fontSize: '24px', color: 'white' }}>💼</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Investment Strategy</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Alternative investment fund management and strategic capital allocation.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>🎓</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Mentorship</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Visiting faculty and startup mentorship for emerging founders.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>📊</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Financial Advisory</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>BFSI expertise and strategic financial planning for startups.</p>
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
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>2026</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Most Admired BFSI Professional</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Recognized for excellence in financial services</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>100+</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Startups Mentored</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Across BFSI and technology sectors</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '40px', padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>Key Roles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Alternative Investment Fund Manager</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Seasoned Banker</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Visiting Faculty</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Podcast Speaker</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Blog Writer</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Narsee Monjee Alumnus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
