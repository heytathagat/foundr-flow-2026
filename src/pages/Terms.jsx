import { Eyebrow, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Terms() {
  useDocumentMeta(
    'Terms of Service — FoundrFlow',
    'FoundrFlow terms of service. Legal terms and conditions for using our website and services.'
  );

  return (
    <>
      <PageHead
        crumb="Terms"
        title={<>Terms of<br /><em>Service.</em></>}
        lead="By using our website and services, you agree to these terms and conditions."
      />

      <section className="section">
        <div className="wrap">
          <div className="cols2 reveal">
            <div>
              <h3>Acceptance of terms</h3>
              <p>By accessing and using FoundrFlow's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              
              <h3 style={{ marginTop: 30 }}>Services</h3>
              <p>FoundrFlow operates as a venture studio, providing co-building services, capital, and operational support to founders. Participation in our studio programs is subject to separate agreements and selection criteria.</p>
              
              <h3 style={{ marginTop: 30 }}>User responsibilities</h3>
              <p>You agree to provide accurate information when using our services, including application forms and contact forms. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            </div>

            <div>
              <h3>Intellectual property</h3>
              <p>All content on this website, including text, graphics, logos, and software, is the property of FoundrFlow or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.</p>
              
              <h3 style={{ marginTop: 30 }}>Limitation of liability</h3>
              <p>FoundrFlow shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our liability is limited to the maximum extent permitted by applicable law.</p>
              
              <h3 style={{ marginTop: 30 }}>Governing law</h3>
              <p>These terms shall be governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.</p>
            </div>
          </div>

          <div className="legal-notice reveal" style={{ marginTop: 60, borderTop: '1px solid var(--line)', paddingTop: 30 }}>
            <p className="legal-text" style={{ marginBottom: 12 }}>Last updated: May 2026</p>
            <p className="legal-text">Registered under Avergent (OPC) Pvt. Ltd.</p>
            <p className="legal-text">Operational Office: Plot 2469, Block C, Sushant Lok Phase 1, Sector 43, Gurugram — 122001</p>
            <p className="legal-text">Registered Office: E902 M2k County Heights, Sec 5, Dharuhera, Haryana — 123106</p>
            <p className="legal-text">For questions, contact us at hello@foundrflow.in</p>
          </div>
        </div>
      </section>
    </>
  );
}
