import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function RaiseXBootcamp() {
  useDocumentMeta(
    'RaiseX Bootcamp — FoundrFlow',
    'A 3-day intensive bootcamp focused on branding, marketing, financials, pitch refinement, and demo day.'
  );

  return (
    <>
      <PageHead
        crumb="Programs"
        title={<>RaiseX<br /><em>Bootcamp</em></>}
        lead="A 3-day intensive bootcamp designed to prepare founders for investor readiness and successful fundraising."
      />

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>3-Day Program</Eyebrow>
            <h2 className="section-title">Intensive Fundraising Preparation</h2>
          </div>

          <div className="program-highlights reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(20px,3vw,32px)' }}>
            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>📈</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Day 1: Growth & Numbers</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>Brand positioning, marketing funnels, financial models, and unit economic clinics.</p>
            </div>

            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🎤</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Day 2: Action</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>Building investor pipelines, drafting pitch blurbs, and live-fire presentation rehearsals.</p>
            </div>

            <div className="highlight-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '8px' }}>
              <div className="highlight-icon" style={{ fontSize: '2rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.15rem', marginBottom: '12px' }}>Day 3: Conversion</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '.98rem', lineHeight: 1.6, margin: 0 }}>High-velocity investor showcase, breakout sessions, and experiential networking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Detailed Curriculum</Eyebrow>
            <h2 className="section-title">Day-by-Day Schedule</h2>
          </div>

          <div className="day-detail reveal" style={{ marginTop: 40, padding: '30px', border: '1px solid var(--line)', borderRadius: '8px' }}>
            <h4>Day 1: Branding, Marketing & Financial Engineering</h4>
            <p style={{ marginTop: 12, color: 'var(--cyan-deep)', fontWeight: 600 }}>Objective: Align the startup's growth story directly with its spreadsheets so the brand message and the unit economics back each other up.</p>
            
            <div className="session-item">
              <span className="session-time">09:00 AM - 10:30 AM</span>
              <div className="session-content">
                <strong>Masterclass: Simple Brand Positioning & GTM</strong>
                <p>Moving past feature lists to build a clear, simple customer persona and vision. Structuring high-efficiency organic and paid marketing funnels that investors trust.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">10:45 AM - 01:00 PM</span>
              <div className="session-content">
                <strong>Masterclass: The Milestone Financial Model</strong>
                <p>Building a clean, bottom-up model that matches your target milestones directly to 18-month growth. Understanding early-stage valuation and the mechanics of SAFEs vs. Equity.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">01:00 PM - 02:00 PM</span>
              <div className="session-content">
                <strong>Networking Lunch</strong>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">02:00 PM - 05:00 PM</span>
              <div className="session-content">
                <strong>Practical Breakout Clinics (3 Groups of 10)</strong>
                <p><strong>Track A (Branding/GTM):</strong> Rewriting individual landing page copies and mapping a 90-day marketing spend.</p>
                <p><strong>Track B (Financials):</strong> Stress-testing cap tables and fixing individual financial models with an advisor.</p>
                <p><strong>Track C (Data Room):</strong> Setting up organized data folders (incorporation, IP assignments, traction sheets).</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">05:00 PM - 06:00 PM</span>
              <div className="session-content">
                <strong>Casual Rooftop Mixer</strong>
                <p>A relaxed evening to let the 30 founders unwind, share notes, and form close community bonds early on.</p>
              </div>
            </div>
          </div>

          <div className="day-detail reveal" style={{ marginTop: 40, padding: '30px', border: '1px solid var(--line)', borderRadius: '8px' }}>
            <h4>Day 2: Pitch Refinement & Stage Rehearsals</h4>
            <p style={{ marginTop: 12, color: 'var(--cyan-deep)', fontWeight: 600 }}>Objective: Build the investor distribution pipeline and ensure every founder can deliver a flawless pitch under tight constraints.</p>
            
            <div className="session-item">
              <span className="session-time">09:00 AM - 10:30 AM</span>
              <div className="session-content">
                <strong>Strategy: Running a Competitive Fundraising Campaign</strong>
                <p>How to build an active target list of 40–50 angel investors, syndicates, and micro-VCs. Grouping targets into tiers and compressing outreach into a 2-week window to generate natural momentum.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">10:45 AM - 01:00 PM</span>
              <div className="session-content">
                <strong>Workshop: The Forwardable Pitch Blurb</strong>
                <p>Hands-on Session: Every founder writes a clean, 5-sentence double-opt-in email blurb that angels can easily forward to other check-writers.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">01:00 PM - 02:00 PM</span>
              <div className="session-content">
                <strong>Lunch</strong>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">02:00 PM - 05:30 PM</span>
              <div className="session-content">
                <strong>The Stage Crucible (Double-Track Rehearsals)</strong>
                <p>To respect everyone's time with 30 startups, the cohort splits into two parallel tracks of 15.</p>
                <p><strong>The Format:</strong> Every founder gets a strict 4-minute pitch, followed by 3 minutes of direct, honest feedback on slide clarity, body language, and pacing.</p>
              </div>
            </div>
          </div>

          <div className="day-detail reveal" style={{ marginTop: 40, padding: '30px', border: '1px solid var(--line)', borderRadius: '8px' }}>
            <h4>Day 3: Demo Day & The SAFE & Sound Social</h4>
            <p style={{ marginTop: 12, color: 'var(--cyan-deep)', fontWeight: 600 }}>Objective: Connect highly prepared founders with active investors, ending the bootcamp on a high note.</p>
            
            <div className="session-item">
              <span className="session-time">02:30 PM</span>
              <div className="session-content">
                <strong>Investor Arrival & Cohort Cheat-Sheet Handout</strong>
                <p>30–40 active angels and micro-VCs arrive. They receive a single digital sheet summarizing the 30 startups with direct QR codes to their verified data rooms.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">03:00 PM - 05:00 PM</span>
              <div className="session-content">
                <strong>The Fast-Paced Showcase</strong>
                <p>To keep energy high, pitches are kept incredibly sharp and snappy.</p>
                <p><strong>The Format:</strong> Startups are batched by sector. Each founder gets a strict 3-minute pitch (Problem, Solution, Traction, Ask). No on-stage Q&A to keep the event moving flawlessly.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">05:00 PM - 06:00 PM</span>
              <div className="session-content">
                <strong>Deep-Dive Breakout Zones</strong>
                <p>The room opens up into specific high-top table zones. Investors move directly to the founders they want to meet, pull up financial models, and schedule formal meetings for the following week.</p>
              </div>
            </div>

            <div className="session-item">
              <span className="session-time">06:30 PM - Late</span>
              <div className="session-content">
                <strong>The SAFE & Sound Social</strong>
                <p>The work is done. The laptops close, and the room transforms into an experiential networking environment.</p>
                <p><strong>The Vibe:</strong> Hosted at a vibrant open-air venue or premium lounge. A vinyl DJ or acoustic set plays ambient, high-energy music to shift the tone from corporate to conversational.</p>
                <p><strong>The Food & Drink:</strong> Curated premium street-food fusion pop-up stations alongside craft cocktails and mocktails.</p>
                <p><strong>The Highlight:</strong> "Stories, Not Pitches" Hour (07:30 PM): Formal pitches are banned. Instead, a microphone is passed around. Selected founders and seasoned investors take 2 minutes each to share a raw, light-hearted story about their biggest business blunder or early startup disaster. This breaks down barriers instantly and builds real human relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="gridlines" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow className="reveal">Post-Event Value</Eyebrow>
          <h2 className="reveal" style={{ marginTop: 18, color: 'var(--paper)' }}>The 15-Day<br />Hyper-Care Window</h2>
          <div className="mani-body">
            <p className="reveal" style={{ color: 'var(--night-text)' }}>To ensure founders get immense value and don't feel left in the dark after the event, your team provides dedicated execution support for the next 15 days:</p>
            <p className="reveal" style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--cyan-bright)' }}>[Day 3 Ends] ➔ [Days 1-5: Pitch & Deck Polish] ➔ [Days 6-10: Pipeline Tracking] ➔ [Days 11-15: Closing & SAFEs]</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="experience-grid reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(28px,5vw,48px)' }}>
            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Asynchronous War Room</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>A dedicated, private channel where your team answers questions regarding investor follow-ups, deck edits, and financial model tweaks within a strict 4-hour turnaround window.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>1-on-1 Deep-Dive Review</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>A 30-minute private check-in call with each startup to finalize the exact pitch deck changes suggested by investors during Demo Day.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Warm-Intro Tracking</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Helping founders refine their forwardable emails and tracking introductions made to investors during the Demo Day to ensure no conversation goes cold.</p>
            </div>

            <div className="experience-item">
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '16px' }}>Term Sheet Advisory</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>Providing quick operational guidance when founders start receiving interest, helping them navigate early valuation commitments and SAFE structures confidently.</p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 60 }}>
            <h3>Partner Logos</h3>
            <div style={{ marginTop: 30, padding: '40px', border: '2px dashed var(--line)', borderRadius: '8px', textAlign: 'center', color: 'var(--ink-3)' }}>
              <p>Partner logos will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Ready for RaiseX Bootcamp?" />
    </>
  );
}
