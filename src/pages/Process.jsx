import { useState } from 'react';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { Star } from '../components/icons.jsx';
import { STEPS, FAQS } from '../data/content.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function Faq({ q, a }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={`faq-item reveal${open ? ' open' : ''}`}>
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {q}<span className="pm" />
      </button>
      {open && (
        <div className="faq-a">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Process() {
  useDocumentMeta(
    'The Process — FoundrFlow Studio Sprint',
    'How FoundrFlow takes founders from zero to seed in six months: discovery, studio-fit sprint, co-building, launch and ongoing scale support.'
  );

  return (
    <>
      <PageHead
        crumb="The Process"
        title={<>Zero to seed,<br />in <em>six months.</em></>}
        lead="A structured but flexible studio sprint, designed around how Tier 2 & 3 founders actually work — not how they're expected to perform for a room of investors."
      />

      <section className="section">
        <div className="wrap">
          <div className="proc">
            <div className="reveal">
              <Eyebrow>Timeline</Eyebrow>
              <h2 className="section-title" style={{ marginTop: 16 }}>The studio<br />sprint.</h2>
              <div className="proc-note">
                <Star />
                <p>Cohort size is capped at four to six companies per cycle, on purpose. Quality of attention beats quantity of logos.</p>
              </div>
            </div>
            <div className="steps" data-stagger>
              {STEPS.map((s, i) => (
                <div className="step reveal" key={s.num}>
                  <div className="step-l">
                    <div className="step-n">{s.num}</div>
                    {i < STEPS.length - 1 && <div className="step-line" />}
                  </div>
                  <div className="step-body">
                    <div className="step-dur">{s.dur}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="step-detail">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="section-title">The things founders<br />ask us first.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => <Faq key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
