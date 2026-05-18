import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'

export default function PrivacyPolicy({ onNav }) {
  useReveal()

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">Legal</div>
            <h1 className="hdline reveal reveal-delay-1">
              Privacy<br /><em>Policy</em>
            </h1>
            <p className="body-text reveal reveal-delay-2">
              Last updated: January 2026
            </p>
          </div>

          <div className="content-block reveal">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              1. Information We Collect
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              Foundr Flow collects information you provide directly to us, including name, email address, city, and details about your startup or project when you submit an application or contact us. We may also collect information about your use of our website and services.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              2. How We Use Your Information
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              We use the information we collect to evaluate applications, communicate with founders, provide our services, and improve our offerings. We may use your information to send you updates about Foundr Flow, our programs, and relevant opportunities.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              3. Information Sharing
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              We do not sell your personal information. We may share your information with our team members, partners, and service providers who need access to perform their duties. We may also disclose information if required by law or to protect our rights.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              4. Data Security
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is completely secure.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              5. Your Rights
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@foundrflow.in. We will respond to your request within a reasonable timeframe.
            </p>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', marginTop: '2rem' }}>
              6. Contact Us
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink3)', lineHeight: '1.85', marginBottom: '1.5rem' }}>
              If you have questions about this Privacy Policy, please contact us at hello@foundrflow.in or write to us at our registered office: E902 M2k County Heights, Sec 5, Dharuhera, Haryana — 123106.
            </p>
          </div>
        </div>
      </section>
      <Footer onNav={onNav} />
    </>
  )
}
