export default function Footer({ onNav }) {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <div className="nav-logo" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            Foundr<span style={{ color: 'var(--red)' }}>Flow</span>
          </div>
          <p>A venture studio + early-stage investor for Tier 2 & 3 founders — co-building from day zero.</p>
          <small>Registered under Avergent (OPC) Pvt. Ltd.</small>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Firm</h4>
            <ul>
              <li onClick={() => onNav('thesis')}>Thesis</li>
              <li onClick={() => onNav('foundrx')}>Foundr X</li>
              <li onClick={() => onNav('partners')}>Partners</li>
              <li onClick={() => onNav('insights')}>Insights</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li onClick={() => onNav('contact')}>Contact</li>
              <li>hello@foundrflow.in</li>
              <li>LinkedIn</li>
              <li>Twitter / X</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <span>© 2026 Foundr Flow. All rights reserved.</span>
        <span>Gurugram, Haryana — India</span>
      </div>
    </>
  )
}
