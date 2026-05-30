import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function FoundersForge() {
  useDocumentMeta(
    'Founders Forge 2.0 — FoundrFlow',
    'A high-impact startup accelerator and founder development program that transformed ideas into scalable ventures.'
  );

  return (
    <>
      <PageHead
        crumb="Programs"
        title={<>Founders<br /><em>Forge 2.0</em></>}
        lead="A high-impact startup accelerator and founder development program that transformed ideas into scalable ventures."
      />

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Program Overview</Eyebrow>
            <h2 className="section-title">Complete founder transformation</h2>
          </div>

          <div className="program-highlights reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px,3vw,32px)' }}>
            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Application & Screening</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>Highly competitive evaluation was based on vision, problem-solving ability, execution mindset, and startup potential.</p>
            </div>

            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Intensive Journey</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>Founders went through startup validation, market research, customer discovery, business model development, branding, positioning, and growth execution.</p>
            </div>

            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🤝</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Expert Mentorship</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>Participants received hands-on guidance from successful founders, investors, operators, and industry experts with real-world insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>What Participants Experienced</Eyebrow>
            <h2 className="section-title">The cohort experience</h2>
          </div>

          <div className="experience-grid reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(28px,5vw,48px)' }}>
            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Masterclasses & Workshops</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Participants attended intensive learning sessions covering startup fundamentals, advanced strategies, and practical execution frameworks.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Networking & Community</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Founders gained access to an exclusive community of builders, collaborators, and startup enthusiasts for meaningful partnerships.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Pitch Training</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Comprehensive pitch preparation with feedback from mentors and practice sessions helped founders refine their presentations.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Progress Tracking</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Milestone reviews, growth tracking, mentor evaluations, and strategic feedback sessions ensured consistent progress throughout the program.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="gridlines" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow className="reveal">Demo Day</Eyebrow>
          <h2 className="reveal" style={{ marginTop: 18, color: 'var(--paper)' }}>Founders showcased<br />their vision</h2>
          <div className="mani-body">
            <p className="reveal" style={{ color: 'var(--night-text)' }}>The final phase culminated in Demo Day, where selected founders showcased their startups before ecosystem enablers, incubators, accelerators, media representatives, and industry leaders.</p>
            <p className="reveal" style={{ color: 'var(--night-text)' }}>Demo Day served as a platform for founders to present their vision, traction, business model, and future roadmap while exploring strategic partnerships, customer acquisition channels, and ecosystem support.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginTop: 60, padding: '40px', background: 'var(--night)', color: 'var(--night-text)', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--paper)', fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Founders Forge 2.0 was not just a startup program</h3>
            <p style={{ marginTop: 18, color: 'var(--night-text)', fontSize: '1.1rem', maxWidth: '60ch', margin: '18px auto 0' }}>It was a complete founder transformation experience that equipped entrepreneurs with the mindset, network, knowledge, mentorship, and execution capabilities required to build impactful and sustainable companies in today's competitive startup ecosystem.</p>
          </div>

          <div className="reveal" style={{ marginTop: 60 }}>
            <h3>Our Esteemed Partners</h3>
            <div style={{ marginTop: 40, padding: '60px 40px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(60px,10vw,120px)', flexWrap: 'wrap' }}>
                <img src="/cgc.webp" alt="CGC" style={{ height: 'clamp(60px,8vw,100px)', maxWidth: '200px', objectFit: 'contain' }} />
                <img src="/venturenest.png" alt="VentureNest" style={{ height: 'clamp(60px,8vw,100px)', maxWidth: '200px', objectFit: 'contain' }} />
                <img src="/startuppunjab.jpeg" alt="StartupPunjab" style={{ height: 'clamp(60px,8vw,100px)', maxWidth: '200px', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Program Completed Successfully" />
    </>
  );
}
