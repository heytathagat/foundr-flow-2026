import { Link } from 'react-router-dom';
import { Arrow } from './icons.jsx';
import { CITIES } from '../data/content.js';

export function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

export function CtaBand({ eyebrow = 'Get in touch' }) {
  return (
    <section className="section cta">
      <div className="gridlines" />
      <div className="wrap cta-inner">
        <Eyebrow className="reveal">{eyebrow}</Eyebrow>
        <h2 className="reveal">Building something from a city no one's<br />watching? <span className="mark">Let's talk.</span></h2>
        <p className="reveal">We'd love to hear from you. Reach out to discuss your idea, ask questions, or just say hello.</p>
        <Link to="/contact" className="btn btn--cyan reveal">Contact Us<Arrow /></Link>
      </div>
    </section>
  );
}

export function PageHead({ crumb, title, lead }) {
  return (
    <section className="page-head">
      <div className="wrap page-head-grid">
        <div>
          <span className="crumb load-up d1">{crumb}</span>
          <h1 className="load-up d2">{title}</h1>
        </div>
        <p className="lead load-up d3">{lead}</p>
      </div>
    </section>
  );
}

export function PfRow({ c }) {
  return (
    <div className="pf-row reveal" data-status={c.status}>
      <div className="pf-logo">{c.abbr}</div>
      <div className="pf-name">
        <div className="pf-sector">{c.sector}</div>
        <h3>{c.name}</h3>
      </div>
      <p className="pf-desc">{c.desc}</p>
      <div className="pf-end">
        <div className="pf-metric">{c.metric}</div>
        <div className="pf-tags">
          <span className="st">{c.city}</span>
          <span className={`st ${c.status === 'exited' ? 'exited' : ''}`}>{c.stage}</span>
        </div>
      </div>
    </div>
  );
}

export function Ticker() {
  const row = (
    <div className="ticker-row">
      {CITIES.map((c) => <span key={c}>{c}</span>)}
    </div>
  );
  return (
    <div className="ticker">
      <div className="ticker-track">{row}{row}</div>
    </div>
  );
}
