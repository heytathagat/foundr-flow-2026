import { useState } from 'react';
import { Arrow } from '../components/icons.jsx';
import { Eyebrow, CtaBand, PageHead } from '../components/common.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

export default function Contact() {
  useDocumentMeta(
    'Contact — FoundrFlow',
    'Get in touch with FoundrFlow. Our operational office in Gurugram and registered office in Dharuhera, Haryana.'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <PageHead
        crumb="Contact"
        title={<>Let's build<br /><em>something together.</em></>}
        lead="Have a question, an idea, or just want to say hello? We'd love to hear from you."
      />

      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="section-title">Let's start a conversation</h2>
          </div>
          
          <div className="cols2 reveal" style={{ marginTop: 40, gap: 'clamp(40px,6vw,80px)' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '24px' }}>Contact Information</h3>
              
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>📧</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:hello@foundrflow.in" style={{ color: 'var(--cyan-deep)', fontSize: '1rem', textDecoration: 'none', transition: 'color 0.2s' }}>hello@foundrflow.in</a>
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.5rem' }}>📍</span>
                    <span>Operational Office</span>
                  </div>
                  <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.7, margin: 0, paddingLeft: '40px' }}>
                    Plot 2469, Block C, Sushant Lok Phase 1<br />
                    Sector 43, Gurugram, Haryana — 122001<br />
                    India
                  </p>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.5rem' }}>🏢</span>
                    <span>Registered Office</span>
                  </div>
                  <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.7, margin: 0, paddingLeft: '40px' }}>
                    E902 M2k County Heights, Sec 5<br />
                    Dharuhera, Haryana — 123106<br />
                    India
                  </p>
                </div>
              </div>

              <div style={{ padding: '20px', background: 'var(--paper-2)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>Registered under Avergent (OPC) Pvt. Ltd.</p>
              </div>
            </div>

            <div style={{ padding: 'clamp(32px,4vw,48px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px' }}>
              {!submitted ? (
                <>
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '8px' }}>Send us a message</h3>
                    <p style={{ color: 'var(--ink-2)', fontSize: '1rem', margin: 0 }}>We'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="name" style={{ display: 'block', fontWeight: 500, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--ink)' }}>Your name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px 16px', fontSize: '1rem', border: errors.name ? '2px solid #e74c3c' : '1px solid var(--line)', borderRadius: '6px', background: 'var(--paper)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s' }}
                      />
                      {errors.name && <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '6px', display: 'block' }}>{errors.name}</span>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="email" style={{ display: 'block', fontWeight: 500, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--ink)' }}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px 16px', fontSize: '1rem', border: errors.email ? '2px solid #e74c3c' : '1px solid var(--line)', borderRadius: '6px', background: 'var(--paper)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s' }}
                      />
                      {errors.email && <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '6px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label htmlFor="subject" style={{ display: 'block', fontWeight: 500, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--ink)' }}>Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px 16px', fontSize: '1rem', border: errors.subject ? '2px solid #e74c3c' : '1px solid var(--line)', borderRadius: '6px', background: 'var(--paper)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s' }}
                      />
                      {errors.subject && <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '6px', display: 'block' }}>{errors.subject}</span>}
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label htmlFor="message" style={{ display: 'block', fontWeight: 500, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--ink)' }}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us more about what you're looking for..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '12px 16px', fontSize: '1rem', border: errors.message ? '2px solid #e74c3c' : '1px solid var(--line)', borderRadius: '6px', background: 'var(--paper)', color: 'var(--ink)', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                      />
                      {errors.message && <span style={{ color: '#e74c3c', fontSize: '0.9rem', marginTop: '6px', display: 'block' }}>{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '14px 24px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      Send message<Arrow />
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 12.5 9.5 18 20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1.5rem', marginBottom: '12px', color: 'var(--ink)' }}>Message sent!</h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: '1rem', margin: 0 }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Have a project in mind?" />
    </>
  );
}
