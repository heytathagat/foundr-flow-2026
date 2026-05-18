import LegalLayout from '../components/LegalLayout'

const SECTIONS = [
  {
    title: 'Agreement',
    body: 'By accessing foundrflow.in or using any Foundr Flow services, you agree to these Terms of Use. If you do not agree, please do not use our website or services. Foundr Flow is operated by Avergent (OPC) Pvt. Ltd.',
  },
  {
    title: 'Services',
    body: 'Foundr Flow provides venture studio services, early-stage investment activities, community programs including Foundr X, and related content. Specific engagements may be governed by separate agreements between you and Foundr Flow or its affiliates.',
  },
  {
    title: 'No investment advice',
    body: 'Content on this website — including insights, articles, and program descriptions — is for general informational purposes only. Nothing on this site constitutes investment, legal, or tax advice, or an offer to sell securities.',
  },
  {
    title: 'Applications and submissions',
    body: 'Information you submit through our contact forms or application process does not create a fiduciary relationship or obligation to invest, partner, or respond. We may use submitted materials to evaluate fit for studio programs at our discretion.',
  },
  {
    title: 'Intellectual property',
    body: 'All content on this website — including text, graphics, logos, and design — is owned by Foundr Flow or its licensors and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.',
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to misuse the website, attempt unauthorized access, transmit malware, scrape content at scale, or use our services for unlawful purposes. We reserve the right to restrict access for violations.',
  },
  {
    title: 'Disclaimer of warranties',
    body: 'The website and services are provided "as is" without warranties of any kind, express or implied, including merchantability or fitness for a particular purpose. We do not warrant uninterrupted or error-free operation.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, Foundr Flow and its directors, employees, and partners shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the website or reliance on its content.',
  },
  {
    title: 'Indemnification',
    body: 'You agree to indemnify and hold harmless Foundr Flow from claims arising out of your misuse of the website, violation of these terms, or infringement of third-party rights.',
  },
  {
    title: 'Governing law',
    body: 'These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Gurugram, Haryana, unless otherwise required by applicable law.',
  },
  {
    title: 'Changes',
    body: 'We may modify these Terms at any time by posting an updated version on this page. Your continued use after changes constitutes acceptance of the revised Terms.',
  },
  {
    title: 'Contact',
    body: 'Questions about these Terms: hello@foundrflow.in · Operational office: Plot 2469, Block C, Sushant Lok Phase 1, Sector 43, Gurugram, Haryana — 122001, India.',
  },
]

export default function TermsOfUse({ onNav }) {
  return (
    <LegalLayout
      doc="terms"
      eyebrow="Legal"
      title={<>Terms of <em>Use</em></>}
      effectiveDate="Effective date: January 1, 2026 · Foundr Flow / Avergent (OPC) Pvt. Ltd."
      sections={SECTIONS}
      onNav={onNav}
    />
  )
}
