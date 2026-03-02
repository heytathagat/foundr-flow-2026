import { z } from 'zod'
import { submitToGoogleForm } from '@/lib/google-forms'
import { sendContactEmail } from '@/lib/email-service'
import { saveSubmissionLocally } from '@/lib/form-storage'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Please share a bit more detail.'),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = schema.safeParse(json)
    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid payload.' },
        { status: 400 },
      )
    }

    const formData = parsed.data
    const timestamp = new Date().toISOString()

    // Save locally as backup
    const localSave = await saveSubmissionLocally({
      ...formData,
      timestamp
    })

    // Try to send email
    const emailResult = await sendContactEmail(formData)

    // Try to submit to Google Forms/Sheets
    const googleResult = await submitToGoogleForm({
      ...formData,
      timestamp
    })

    // Log results for debugging
    console.log('Form submission results:', {
      localSave,
      emailResult,
      googleResult,
      formData: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        messageLength: formData.message.length
      }
    })

    // Return success if at least one method worked
    const success = localSave.success || emailResult.success || googleResult.success
    
    if (success) {
      return Response.json({ 
        success: true,
        message: 'Form submitted successfully!'
      })
    } else {
      return Response.json(
        { 
          error: 'Failed to submit form. Please try again or email us directly.',
          details: {
            email: emailResult.error,
            google: googleResult.error
          }
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}

