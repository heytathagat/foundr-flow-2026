'use client'

import * as React from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/site-data'

type ContactPayload = {
  name: string
  email: string
  company?: string
  message: string
}

export function ContactForm() {
  const [pending, setPending] = React.useState(false)
  const [values, setValues] = React.useState<ContactPayload>({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? 'Something went wrong.')
      }

      toast.success('Message sent. We’ll get back to you soon.')
      setValues({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to send.'
      toast.error(msg)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
            Name
          </label>
          <Input
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
            Email
          </label>
          <Input
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            placeholder="you@company.com"
            type="email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
          Company (optional)
        </label>
        <Input
          value={values.company ?? ''}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          placeholder="Company name"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
          Message
        </label>
        <Textarea
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          placeholder="What are you building, and what are you looking for?"
          required
          rows={6}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" disabled={pending}>
          {pending ? 'Sending…' : 'Send message'}
        </Button>
        <Button type="button" variant="outline" disabled={pending} asChild>
          <a href={`mailto:${site.email}`}>Email instead</a>
        </Button>
      </div>
    </form>
  )
}

