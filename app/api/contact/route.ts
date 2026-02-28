import { z } from 'zod'

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

    // Intentionally no side-effects (email/CRM) in this template.
    // Hook this into your email provider or CRM later.
    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

