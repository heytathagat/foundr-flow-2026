import { Link } from 'react-router-dom';

function IconLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label}>{children}</a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/logo-light.png" alt="FoundrFlow" />
            <p>A venture studio co-building companies with founders from Tier 2 &amp; 3 India — capital, product, brand and distribution from day zero.</p>
            <div className="foot-social">
              <IconLink href="#" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.6A5 5 0 0 1 16 8zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </IconLink>
              <IconLink href="#" label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z" /></svg>
              </IconLink>
              <IconLink href="mailto:hello@foundrflow.in" label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
              </IconLink>
            </div>
          </div>

          <div className="foot-col">
            <h4>Studio</h4>
            <ul>
              <li><Link to="/studio">What We Do</Link></li>
              <li><Link to="/process">The Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about#team">Team</Link></li>
              <li><Link to="/about#conviction">Manifesto</Link></li>
              <li><a href="mailto:careers@foundrflow.in">Careers</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@foundrflow.in">hello@foundrflow.in</a></li>
              <li style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.5, marginTop: '8px' }}>
                <strong>Operational Office:</strong><br />
                Plot 2469, Block C<br />
                Sushant Lok Phase 1<br />
                Sector 43, Gurugram — 122001
              </li>
              <li style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.5, marginTop: '8px' }}>
                <strong>Registered Office:</strong><br />
                E902 M2k County Heights, Sec 5<br />
                Dharuhera, Haryana — 123106
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="foot-bottom">
          <small>&copy; {year} Avergent (OPC) Pvt. Ltd. &middot; Built in Bharat.</small>
          <small><Link to="/privacy">Privacy</Link> &nbsp;&middot;&nbsp; <Link to="/terms">Terms</Link></small>
        </div>
      </div>
    </footer>
  );
}
