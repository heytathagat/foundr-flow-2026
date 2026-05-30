import { Link } from 'react-router-dom';
import { Arrow } from '../components/icons.jsx';
import { Eyebrow, CtaBand, Ticker } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Home() {
  useDocumentMeta(
    'FoundrFlow — Venture Studio for Tier 2 & 3 Founders',
    "FoundrFlow co-builds companies with underdog founders across Tier 2 & 3 India — product, brand, distribution and mentorship from day zero."
  );

  return (
    <>
      <section className="hero">
        <div className="hero-grid-lines" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow load-up d1">Venture Studio · Tier 2 &amp; 3 India</span>
            <h1 className="display load-up d2">The studio that<br />bets on the<br /><span className="mark">underdogs.</span></h1>
            <p className="lead load-up d3">FoundrFlow partners with ambitious founders from Bharat's overlooked cities — co-building product, brand, distribution and mentorship, from day zero.</p>
            <div className="hero-cta load-up d4">
              <Link to="/contact" className="btn btn--primary">Contact Us<Arrow /></Link>
              <Link to="/studio" className="btn btn--ghost">How it works</Link>
            </div>
            <div className="hero-stats load-up d5">
              <div className="stat"><span className="n">300+</span><span className="l">Founders empowered</span></div>
              <div className="stat"><span className="n">18</span><span className="l">Cities represented</span></div>
              <div className="stat"><span className="n">3</span><span className="l">Active programs</span></div>
            </div>
          </div>

          <div className="hero-visual load-up d3">
            <div className="card card-build">
              <span className="card-k">Active studio build</span>
              <h3>Agri-fintech for kisan cooperatives</h3>
              <div className="card-meta"><span className="chip chip--ok">Seed stage</span><span className="chip">Nashik, MH</span></div>
              <div className="bar"><i /></div>
              <p className="card-prog">68% to launch milestone</p>
            </div>
            <div className="card card-exit">
              <span className="card-k">Latest exit</span>
              <div className="big">2.8×</div>
              <span className="chip">Indore, MP</span>
            </div>
          </div>
        </div>
        <Ticker />
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head--split">
            <div className="reveal"><Eyebrow>What we do</Eyebrow></div>
            <h2 className="section-title reveal">More than money.<br /><em>A co-founder in your corner.</em></h2>
          </div>
          <p className="lead reveal" style={{ marginTop: 26, maxWidth: '62ch' }}>We're not just a program. We're a working studio — in the grind with you across the six things Tier 2 &amp; 3 founders rarely get access to.</p>
          <div className="tri" data-stagger>
            <div className="reveal"><span className="num">01</span><h3>Product co-building</h3><p>We embed designers and engineers and ship the MVP alongside you — not a slide deck about one.</p></div>
            <div className="reveal"><span className="num">03</span><h3>Distribution access</h3><p>Our network of channel partners and operators turns your first 100 customers from a guess into a plan.</p></div>
            <div className="reveal"><span className="num">04</span><h3>Network &amp; connections</h3><p>Connect with mentors, investors, and ecosystem partners to accelerate your growth journey.</p></div>
          </div>
          <div className="reveal" style={{ marginTop: 30 }}><Link to="/studio" className="btn btn--ghost">See all six pillars<Arrow /></Link></div>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <div className="sec-head--split">
            <div className="reveal"><Eyebrow>Our Programs</Eyebrow></div>
            <h2 className="section-title">Empowering<br /><em>300+ founders.</em></h2>
          </div>
          <p className="lead reveal" style={{ marginTop: 26, maxWidth: '62ch' }}>Our programs are designed to transform ambitious founders into successful entrepreneurs through intensive mentorship, practical learning, and ecosystem access.</p>
          <div className="reveal" style={{ marginTop: 30 }}><Link to="/programs/founders-forge" className="btn btn--ghost">Explore our programs<Arrow /></Link></div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="gridlines" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow className="reveal">Our conviction</Eyebrow>
          <h2 className="reveal" style={{ marginTop: 18 }}>The next billion-dollar company<br />isn't being built <span className="mark">in Bandra.</span></h2>
          <div className="mani-body">
            <p className="reveal">India's startup economy has a geography problem. Capital, talent and attention cluster in three cities — but the problems worth solving, and the founders hungry enough to solve them, are everywhere else.</p>
            <p className="reveal">A 26-year-old in Varanasi building software for the textile trade understands that market in a way no one in a Bengaluru boardroom ever will. <strong>Proximity to the problem is the most durable moat there is.</strong></p>
          </div>
          <div className="reveal" style={{ marginTop: 34 }}><Link to="/about" className="btn btn--light">Read the manifesto<Arrow /></Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
