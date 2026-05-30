import { Eyebrow, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Privacy() {
  useDocumentMeta(
    'Privacy Policy — FoundrFlow',
    'FoundrFlow privacy policy. How we collect, use, and protect your information.'
  );

  return (
    <>
      <PageHead
        crumb="Privacy"
        title={<>Your privacy<br /><em>matters to us.</em></>}
        lead="We believe in transparency. This policy explains how we handle your information."
      />

      <section className="section">
        <div className="wrap">
          <div className="cols2 reveal">
            <div>
              <h3>Information we collect</h3>
              <p>We collect information you provide directly to us, such as when you fill out our contact form, apply to our studio program, or communicate with us. This may include your name, email address, company information, and any other details you choose to share.</p>
              
              <h3 style={{ marginTop: 30 }}>How we use your information</h3>
              <p>We use the information we collect to communicate with you, evaluate applications for our studio program, provide the services you request, and improve our offerings. We do not sell your personal information to third parties.</p>
              
              <h3 style={{ marginTop: 30 }}>Data security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h3>Your rights</h3>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at hello@foundrflow.in.</p>
              
              <h3 style={{ marginTop: 30 }}>Third-party services</h3>
              <p>We may use third-party services to help operate our website and business. These services may have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
              
              <h3 style={{ marginTop: 30 }}>Changes to this policy</h3>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>
            </div>
          </div>

          <div className="legal-notice reveal" style={{ marginTop: 60, borderTop: '1px solid var(--line)', paddingTop: 30 }}>
            <p className="legal-text" style={{ marginBottom: 12 }}>Last updated: May 2026</p>
            <p className="legal-text">Registered under Avergent (OPC) Pvt. Ltd.</p>
            <p className="legal-text">For questions about this policy, contact us at hello@foundrflow.in</p>
          </div>
        </div>
      </section>
    </>
  );
}
