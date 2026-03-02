import { z } from 'zod'
import { submitToGoogleForm } from '@/lib/google-forms'
import { sendContactEmail } from '@/lib/email-service'
import { saveSubmission } from '@/lib/form-storage'

const schema = z.object({
  organization: z.string().min(2, 'Please enter your organization name.'),
  contactPerson: z.string().min(2, 'Please enter contact person name.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().optional(),
  website: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  partnershipType: z.enum(['investment', 'campus', 'ecosystem']),
  description: z.string().min(20, 'Please provide more details about your organization.'),
  currentStage: z.string().min(10, 'Please tell us about your current stage.'),
  targetAudience: z.string().min(10, 'Please describe your target audience.'),
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

    // Format data for Google Sheets
    const googleFormData = {
      name: `${formData.contactPerson} (${formData.organization})`,
      email: formData.email,
      company: `${formData.partnershipType.toUpperCase()} - ${formData.website || 'No website'}`,
      message: `
Partnership Type: ${formData.partnershipType}
Organization: ${formData.organization}
Contact: ${formData.contactPerson}
Phone: ${formData.phone || 'Not provided'}
Website: ${formData.website || 'Not provided'}

Description:
${formData.description}

Current Stage/Impact:
${formData.currentStage}

Target Audience:
${formData.targetAudience}
      `.trim(),
      timestamp
    }

    // Save to storage (Google Sheets primary, local fallback)
    const storageResult = await saveSubmission(googleFormData)

    // Send email notification
    const emailResult = await sendContactEmail({
      ...googleFormData,
      name: formData.contactPerson,
      company: formData.organization
    })

    // Try to submit to Google Forms (backup)
    const googleResult = await submitToGoogleForm(googleFormData)

    // Log results for debugging
    console.log('Partner application results:', {
      storage: storageResult,
      email: emailResult,
      google: googleResult,
      organization: formData.organization,
      partnershipType: formData.partnershipType
    })

    // Return success if storage worked (email and Google Forms are optional)
    if (storageResult.success) {
      return Response.json({ 
        success: true,
        message: 'Partner application submitted successfully! We\'ll review it and get back to you soon.',
        storage: storageResult.storage
      })
    } else {
      return Response.json(
        { 
          error: 'Failed to submit application. Please try again or email us directly.',
          details: {
            storage: storageResult.success ? undefined : (storageResult as any).error,
            email: emailResult.error,
            google: googleResult.error
          }
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Partner application error:', error)
    return Response.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}
