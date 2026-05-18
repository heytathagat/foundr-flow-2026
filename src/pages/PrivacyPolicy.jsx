import LegalLayout from '../components/LegalLayout'

const SECTIONS = [
  {
    title: 'Introduction',
    body: 'Foundr Flow ("we", "us", "our") operates the website foundrflow.in and related services. We are registered under Avergent (OPC) Pvt. Ltd. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an application to work with our venture studio.',
  },
  {
    title: 'Information we collect',
    body: 'We may collect personal information you voluntarily provide when you contact us, apply to the studio, subscribe to updates, or participate in Foundr X events. This may include your name, email address, phone number, city, company details, pitch materials, and any other information you choose to share.',
  },
  {
    title: 'How we use your information',
    body: 'We use collected information to evaluate applications, respond to inquiries, improve our website and services, send relevant communications about programs and events, comply with legal obligations, and protect our rights. We do not sell your personal data to third parties.',
  },
  {
    title: 'Sharing of information',
    body: 'We may share information with service providers who assist in hosting, analytics, email delivery, or operational support — subject to confidentiality obligations. We may also disclose information if required by law or to protect the safety and rights of Foundr Flow, our partners, or others.',
  },
  {
    title: 'Data retention',
    body: 'We retain application and contact data for as long as necessary to evaluate opportunities, maintain business records, and comply with applicable law. You may request deletion of your data where we have no ongoing legal or operational need to retain it.',
  },
  {
    title: 'Security',
    body: 'We implement reasonable administrative and technical measures to protect your information. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.',
  },
  {
    title: 'Your rights',
    body: 'Depending on applicable law, you may have the right to access, correct, or delete your personal data, withdraw consent, or lodge a complaint with a supervisory authority. To exercise these rights, contact us at hello@foundrflow.in.',
  },
  {
    title: 'Cookies and analytics',
    body: 'Our website may use cookies and similar technologies to improve user experience and understand traffic patterns. You can control cookies through your browser settings.',
  },
  {
    title: 'Third-party links',
    body: 'Our site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance.',
  },
  {
    title: 'Contact',
    body: 'For questions about this Privacy Policy, contact hello@foundrflow.in or write to our operational office: Plot 2469, Block C, Sushant Lok Phase 1, Sector 43, Gurugram, Haryana — 122001, India.',
  },
]

export default function PrivacyPolicy({ onNav }) {
  return (
    <LegalLayout
      doc="privacy"
      eyebrow="Legal"
      title={<>Privacy <em>Policy</em></>}
      effectiveDate="Effective date: January 1, 2026 · Foundr Flow / Avergent (OPC) Pvt. Ltd."
      sections={SECTIONS}
      onNav={onNav}
    />
  )
}
