import type { Metadata } from 'next'

import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { team } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Team · Foundr Flow',
  description:
    'Meet Tathagat Kumar, Founder of Foundr Flow, and the studio team backing Tier 2 & Tier 3 founders.',
}

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        kicker="Team"
        title="Small studio. Deep involvement."
        lead="We’re builders who like clarity, speed, and working side‑by‑side with founders from Tier 2 & 3."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <Card key={m.name} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">{m.name}</CardTitle>
                  <CardDescription className="font-light">{m.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    {m.bio}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.focus.map((t) => (
                      <Badge key={t} variant="outline" className="font-light">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Principles</Kicker>
            <H2 className="mt-4">How we show up.</H2>
            <Lead className="mt-5">
              The founder experience matters. We try to be predictable, direct, and
              useful.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Fast feedback',
                body: 'We say yes quickly, and no quickly—with clarity either way.',
              },
              {
                title: 'Tactical support',
                body: 'Hiring, narrative, GTM, and fundraising mechanics—not platitudes.',
              },
              {
                title: 'Long-term trust',
                body: 'We optimize for founder trust. It compounds faster than capital.',
              },
            ].map((p) => (
              <Card key={p.title} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">{p.title}</CardTitle>
                  <CardDescription className="font-light">{p.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

