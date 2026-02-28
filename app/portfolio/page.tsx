import type { Metadata } from 'next'

import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { Kicker, Lead, Section } from '@/components/site/section'
import { portfolio } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Portfolio · Foundr Flow',
  description:
    'Portfolio of companies co-built in the Foundr Flow studio with Tier 2 & Tier 3 founders in India.',
}

export default function PortfolioPage() {
  const sectors = Array.from(new Set(portfolio.map((c) => c.sector))).sort()

  return (
    <div>
      <PageHeader
        kicker="Portfolio"
        title="Companies co-built in the studio."
        lead="A snapshot of brands and products we’ve helped founders from Tier 2 & 3 launch and scale."
      />

      <Section className="pt-10">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Coverage</Kicker>
              <Lead className="mt-4">
                We collaborate across a few themes, and we stay close after launch—
                content, GTM, and hiring.
              </Lead>
            </div>
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <Badge key={s} variant="outline" className="font-light">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pt-10 pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((c) => (
              <Card key={c.name} className="shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="font-light">{c.name}</CardTitle>
                      <CardDescription className="font-light mt-2">
                        {c.oneLiner}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="font-light">
                        {c.sector}
                      </Badge>
                      {c.status ? (
                        <Badge
                          variant={c.status === 'Exited' ? 'secondary' : 'outline'}
                          className="font-light"
                        >
                          {c.status}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-foreground/55 tracking-wide">
                    <span>{c.stage}</span>
                    <span>{c.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

