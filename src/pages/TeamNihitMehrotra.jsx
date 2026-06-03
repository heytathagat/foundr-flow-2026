import { Link } from 'react-router-dom';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function TeamNihitMehrotra() {
  useDocumentMeta(
    'Nihit Mehrotra — FoundrFlow',
    'CFO at FoundrFlow. Financial expertise in capital allocation, financial planning, and investor relations for early-stage startups.'
  );

  return (
    <>
      <PageHead
        crumb={<Link to="/about#team">Team</Link>}
        title={<>Nihit<br /><em>Mehrotra</em></>}
        lead="CFO"
      />

      <section className="section">
        <div className="wrap">
          <div className="cols2 reveal" style={{ gap: 'clamp(60px,8vw,120px)', alignItems: 'center', marginTop: '60px' }}>
            <div style={{ flex: 1 }}>
              <img 
                src="/nihit.jpeg" 
                alt="Nihit Mehrotra" 
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
                  CFO
                </div>
              </div>
              <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--ink-2)' }}>
                <p style={{ marginBottom: '24px' }}>
                  Nihit brings deep financial expertise to help startups navigate the complexities of capital allocation, financial planning, and investor relations. With a focus on building sustainable financial foundations, he ensures that early-stage companies are positioned for long-term growth and scalability.
                </p>
                <p style={{ marginBottom: '24px' }}>
                  His approach combines rigorous financial analysis with practical business acumen. He works closely with founders to establish robust financial systems, optimize cash flow management, and prepare for fundraising rounds with confidence.
                </p>
                <p>
                  At FoundrFlow, Nihit oversees financial strategy across the portfolio, ensuring that each company has the financial discipline and runway needed to execute on their vision while maintaining healthy unit economics.
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
                <span style={{ fontSize: '24px', color: 'white' }}>📊</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Financial Planning</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Strategic financial modeling and forecasting for sustainable growth.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>💵</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Capital Allocation</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Optimizing resource deployment to maximize runway and impact.</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper)', borderRadius: '16px', border: '1px solid var(--line)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--cyan-deep)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '24px', color: 'white' }}>🤝</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)' }}>Investor Relations</h3>
              <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>Building strong relationships with investors and preparing for fundraising.</p>
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
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Startups Managed</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Financial operations across portfolio</p>
            </div>
            <div style={{ padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--cyan-deep)', marginBottom: '16px', lineHeight: 1 }}>$50M+</div>
              <div style={{ fontSize: '1.125rem', color: 'var(--ink)', marginBottom: '8px', fontWeight: 600 }}>Funding Raised</div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--ink-2)', lineHeight: 1.6 }}>Helped portfolio companies raise capital</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '40px', padding: 'clamp(24px,4vw,40px)', background: 'var(--paper-2)', borderRadius: '16px', border: '1px solid var(--line)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: 600 }}>Key Responsibilities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Financial modeling and budget management</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Cash flow optimization and runway planning</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Unit economics analysis and improvement</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Fundraising preparation and pitch deck financials</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '8px', height: '8px', background: 'var(--cyan-deep)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>Compliance and financial governance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
