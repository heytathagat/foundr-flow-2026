import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { PillarIcon } from '../components/icons.jsx';
import { PILLARS } from '../data/content.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Studio() {
  useDocumentMeta(
    'What We Do — FoundrFlow Venture Studio',
    'The six pillars of a FoundrFlow studio partnership — product, brand, distribution, capital, talent and operations — plus how the partnership works.'
  );

  return (
    <>
      <PageHead
        crumb="Studio / What we do"
        title={<>Six things every founder<br />needs. <em>None of them<br />are just money.</em></>}
        lead="A studio partnership isn't a wire transfer and a quarterly check-in. It's people inside your team across the six pillars below — for the first six months, and then some."
      />

      <section className="section section--tight">
        <div className="wrap">
          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="pillar reveal" key={p.num}>
                <div className="pillar-num">{p.num}</div>
                <div className="pillar-main">
                  <div>
                    <div className="pillar-ico"><PillarIcon name={p.icon} /></div>
                    <h3>{p.title}</h3>
                  </div>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>How the partnership works</Eyebrow>
            <h2 className="section-title">Plain terms, written like<br />we'd want them written for us.</h2>
          </div>
          <div className="cols2">
            <div className="reveal">
              <p><strong>We take equity, not a fee.</strong> A typical studio stake sits between 8% and 15%, set against the cash, the build, and the first-cheque investment we put in. We're aligned with you on the outcome, not on billing hours.</p>
              <p>We co-invest at the seed round on the same terms as everyone else, and we stay on the cap table as an active, useful shareholder — not a passive name in a spreadsheet.</p>
            </div>
            <div className="reveal">
              <p><strong>Cohorts are deliberately small.</strong> Four to six companies per cycle. That ceiling exists so the core team can actually show up for each founder, instead of spreading thin across a portfolio of logos.</p>
              <p>And we're honest about fit. If the studio isn't the right vehicle for what you're building, we'll say so early — and often point you to someone who is.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
