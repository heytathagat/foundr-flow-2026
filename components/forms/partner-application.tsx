'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type PartnerApplicationData = {
  organization: string
  contactPerson: string
  email: string
  phone: string
  website: string
  partnershipType: 'investment' | 'campus' | 'ecosystem'
  description: string
  currentStage: string
  targetAudience: string
}

export function PartnerApplicationForm() {
  const [pending, setPending] = React.useState(false)
  const [values, setValues] = React.useState<PartnerApplicationData>({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: 'ecosystem',
    description: '',
    currentStage: '',
    targetAudience: '',
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    
    try {
      const res = await fetch('/api/partner-application', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? 'Something went wrong.')
      }

      toast.success('Partner application submitted successfully!')
      setValues({
        organization: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        partnershipType: 'ecosystem',
        description: '',
        currentStage: '',
        targetAudience: '',
      })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to submit application.'
      toast.error(msg)
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="font-light">Partner Application</CardTitle>
        <CardDescription className="font-light">
          Apply to become a Foundr Flow partner and help us support Tier 2 & Tier 3 founders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Organization Name *
              </label>
              <Input
                value={values.organization}
                onChange={(e) => setValues((v) => ({ ...v, organization: e.target.value }))}
                placeholder="Your organization"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Contact Person *
              </label>
              <Input
                value={values.contactPerson}
                onChange={(e) => setValues((v) => ({ ...v, contactPerson: e.target.value }))}
                placeholder="Your name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Email *
              </label>
              <Input
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                placeholder="you@organization.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Phone
              </label>
              <Input
                value={values.phone}
                onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                placeholder="+91 98765 43210"
                type="tel"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              Website
            </label>
            <Input
              value={values.website}
              onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
              placeholder="https://your-website.com"
              type="url"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              Partnership Type *
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'investment', label: 'Investment Partner' },
                { value: 'campus', label: 'Campus Partner' },
                { value: 'ecosystem', label: 'Ecosystem Partner' }
              ].map((type) => (
                <Badge
                  key={type.value}
                  variant={values.partnershipType === type.value ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setValues((v) => ({ ...v, partnershipType: type.value as any }))}
                >
                  {type.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              Organization Description *
            </label>
            <Textarea
              value={values.description}
              onChange={(e) => setValues((v) => ({ ...v, description: e.target.value }))}
              placeholder="Tell us about your organization and what you do..."
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              Current Stage/Impact *
            </label>
            <Textarea
              value={values.currentStage}
              onChange={(e) => setValues((v) => ({ ...v, currentStage: e.target.value }))}
              placeholder="What's your current stage? What impact have you made so far?"
              required
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.22em] text-foreground/50">
              Target Audience *
            </label>
            <Textarea
              value={values.targetAudience}
              onChange={(e) => setValues((v) => ({ ...v, targetAudience: e.target.value }))}
              placeholder="Who do you serve? How do you help Tier 2 & Tier 3 founders?"
              required
              rows={3}
            />
          </div>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
