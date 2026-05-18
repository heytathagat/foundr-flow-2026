import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

export default function TermsOfUse({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Legal</div>
            <h1 className="hdline reveal reveal-delay-1">
              Terms of<br /><em>Use</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              Last updated: January 2026
            </p>
          </div>

          <div className="content-block reveal">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              1. Acceptance of Terms
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              By accessing or using Foundr Flow's website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              2. Services Description
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Foundr Flow operates as a venture studio and early-stage investor, providing co-building support, mentorship, and investment opportunities to founders from Tier 2 and Tier 3 cities in India. Our services include but are not limited to product development, branding, go-to-market strategy, and fundraising assistance.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              3. Application Process
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Founders may apply to our studio program by submitting an application through our website. All applications are reviewed internally, and we reserve the right to accept or decline any application at our sole discretion. Submitting an application does not guarantee acceptance or investment.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              4. Intellectual Property
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              All content on the Foundr Flow website, including text, graphics, logos, and software, is our property or the property of our licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without prior written permission.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              5. User Responsibilities
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Users agree to provide accurate and complete information when applying to our programs. You agree not to use our services for any illegal purpose or to submit false, misleading, or fraudulent information. Foundr Flow reserves the right to terminate access to our services for violations of these terms.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              6. Investment Terms
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Any investment made by Foundr Flow is subject to separate investment agreements and due diligence processes. These Terms of Use do not constitute an offer to invest. Specific investment terms will be outlined in relevant legal documents.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              7. Limitation of Liability
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Foundr Flow shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the maximum extent permitted by applicable law.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              8. Changes to Terms
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated revision date. Your continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              9. Governing Law
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              These Terms of Use are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              10. Contact Us
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              For questions about these Terms of Use, please contact us at hello@foundrflow.in or write to our registered office: E902 M2k County Heights, Sec 5, Dharuhera, Haryana — 123106.
            </p>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
