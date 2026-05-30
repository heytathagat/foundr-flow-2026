import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function AfricaFounder() {
  useDocumentMeta(
    'Africa Global Founder Program 2026 — FoundrFlow',
    'A month-long startup acceleration program in India from June 15 to July 15, 2026 for African entrepreneurs.'
  );

  return (
    <>
      <PageHead
        crumb="Programs"
        title={<>Africa Global<br /><em>Founder Program</em></>}
        lead="A month-long startup acceleration and founder development program taking place in India from June 15 to July 15, 2026."
      />

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Program Timeline</Eyebrow>
            <h2 className="section-title">June 15 — July 15, 2026</h2>
          </div>

          <div className="timeline reveal" style={{ marginTop: 40 }}>
            <div className="timeline-item">
              <div className="timeline-date">June 15, 2026</div>
              <div className="timeline-content">
                <h3>Program Kickoff</h3>
                <p>Founder onboarding and startup assessment begins. Participants start working closely with experienced entrepreneurs, investors, and industry experts.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Weeks 1-2</div>
              <div className="timeline-content">
                <h3>Validation & Strategy</h3>
                <p>Validate business models, refine products, understand customer needs, strengthen market positioning, and build sustainable growth strategies through workshops and masterclasses.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Weeks 3-4</div>
              <div className="timeline-content">
                <h3>Growth & Execution</h3>
                <p>Focus on branding, product development, customer acquisition, sales, operations, leadership, and scaling strategies with one-on-one mentorship.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">July 15, 2026</div>
              <div className="timeline-content">
                <h3>Demo Day</h3>
                <p>Flagship Demo Day where founders present their ventures before ecosystem enablers, incubators, accelerators, ecosystem partners, and media representatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>What You'll Experience</Eyebrow>
            <h2 className="section-title">Four weeks of intensive learning</h2>
          </div>

          <div className="experience-grid reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(28px,5vw,48px)' }}>
            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Workshops & Masterclasses</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Intensive sessions covering startup fundamentals, branding, product development, customer acquisition, sales, and scaling strategies.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>One-on-One Mentorship</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Personalized guidance from experienced entrepreneurs, investors, and industry experts to accelerate your growth.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Founder Roundtables</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Collaborative sessions to exchange ideas, build partnerships, and become part of a global entrepreneurial community.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Pitch Clinics</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Comprehensive pitch preparation with feedback to refine your presentation for Demo Day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="gridlines" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow className="reveal">Our Mission</Eyebrow>
          <h2 className="reveal" style={{ marginTop: 18, color: 'var(--paper)' }}>Fostering cross-border<br />innovation</h2>
          <div className="mani-body">
            <p className="reveal" style={{ color: 'var(--night-text)' }}>The Africa Global Founder Program is committed to fostering innovation, entrepreneurship, and cross-border collaboration by equipping founders with the knowledge, mentorship, network, and resources needed to build impactful companies.</p>
            <p className="reveal" style={{ color: 'var(--night-text)' }}>We empower entrepreneurs to create meaningful change in their communities and markets.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="reveal" style={{ marginTop: 60, padding: '40px', background: 'var(--night)', color: 'var(--night-text)', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--paper)', fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Join the Global Entrepreneurial Community</h3>
            <p style={{ marginTop: 18, color: 'var(--night-text)', fontSize: '1.1rem', maxWidth: '60ch', margin: '18px auto 0' }}>Build meaningful partnerships, exchange ideas with founders from across Africa and beyond, and become part of a network that extends far beyond the program duration.</p>
          </div>

          <div className="reveal" style={{ marginTop: 60 }}>
            <h3>Partner Logos</h3>
            <div style={{ marginTop: 30, padding: '40px', border: '2px dashed var(--line)', borderRadius: '8px', textAlign: 'center', color: 'var(--ink-3)' }}>
              <p>Partner logos will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Apply for Africa Global Founder Program" />
    </>
  );
}
