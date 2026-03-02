import nodemailer from 'nodemailer'
import { site } from './site-data'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendContactEmail(formData: {
  name: string
  email: string
  company?: string
  message: string
}) {
  try {
    // Email to admin
    const adminEmail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: site.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted on: ${new Date().toLocaleString()}
        </p>
      `,
    })

    // Confirmation email to user
    const userEmail = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting Foundr Flow',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${formData.name},</p>
          <p>We've received your message and will get back to you soon. Here's what you sent us:</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p>While you wait, feel free to:</p>
          <ul>
            <li>Check out our <a href="https://foundrflow.in/thesis" style="color: #007bff;">thesis</a></li>
            <li>Browse our <a href="https://foundrflow.in/portfolio" style="color: #007bff;">portfolio</a></li>
            <li>Follow us on <a href="${site.linkedin}" style="color: #007bff;">LinkedIn</a></li>
          </ul>
          
          <p>Best regards,<br>
          The Foundr Flow Team</p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            ${site.location}<br>
            <a href="mailto:${site.email}">${site.email}</a>
          </p>
        </div>
      `,
    })

    return { success: true, adminEmail, userEmail }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
