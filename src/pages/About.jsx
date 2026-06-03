import { Link } from 'react-router-dom';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { TEAM, MILESTONES } from '../data/content.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function About() {
  useDocumentMeta(
    'About — FoundrFlow',
    "Why FoundrFlow backs founders from Tier 2 & 3 India: our conviction, the team, and the studio's story so far."
  );

  return (
    <>
      <PageHead
        crumb="About"
        title={<>We back the founders<br />the <em>map forgot.</em></>}
        lead="FoundrFlow exists because the most interesting companies of the next decade won't all come from three metros — and the people building them deserve a studio that shows up in person."
      />

      <section className="section manifesto" id="conviction">
        <div className="gridlines" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow className="reveal">Our conviction</Eyebrow>
          <h2 className="reveal" style={{ marginTop: 18 }}>The next billion-dollar company<br />isn't being built <span className="mark">in Bandra.</span></h2>
          <div className="mani-body">
            <p className="reveal">India's startup economy has a geography problem. Capital, talent and media attention cluster in a handful of cities. But the problems worth solving — and the founders hungry enough to solve them — are everywhere else.</p>
            <p className="reveal">A 26-year-old in Varanasi building supply-chain software for the textile trade understands that market in ways no outsider ever will. We back that unfair advantage.</p>
            <p className="reveal">FoundrFlow was built on one belief: <strong>proximity to the problem is the most durable competitive moat there is.</strong></p>
          </div>
          <div className="mani-stats" data-stagger>
            <div className="reveal"><div className="n">60%</div><div className="l">Of India's GDP from Tier 2 &amp; 3 cities</div></div>
            <div className="reveal"><div className="n">340M</div><div className="l">Urban non-metro population</div></div>
            <div className="reveal"><div className="n">&lt;5%</div><div className="l">Of startup funding reaching them</div></div>
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>The team</Eyebrow>
            <h2 className="section-title">A small group that<br />has actually built things.</h2>
          </div>
          <div className="team" data-stagger>
            {TEAM.map((m) => (
              <Link to={`/team/${m.name.toLowerCase().replace(/\s+/g, '-')}`} className="member reveal" key={m.name}>
                <div className="ph">
                  <img 
                    src={`/${m.photo}`} 
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('span').style.display = 'block';
                    }}
                  />
                  <span style={{ display: 'none' }}>{m.init}</span>
                </div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>How we got here</Eyebrow>
            <h2 className="section-title">Five years, one idea,<br />a growing list of believers.</h2>
          </div>
          <div className="milestones">
            {MILESTONES.map((m) => (
              <div className="ms reveal" key={m.yr}>
                <div className="yr">{m.yr}</div>
                <div><h3>{m.title}</h3><p>{m.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
