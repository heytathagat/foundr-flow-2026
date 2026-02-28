import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { Kicker, Lead, Section } from '@/components/site/section'
import { insights } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Insights · Foundr Flow',
  description:
    'Short, practical writing from the Foundr Flow studio, led by founder Tathagat Kumar, on Tier 2 & Tier 3 founders, distribution, and fundraising.',
}

export default function InsightsPage() {
  return (
    <div>
      <PageHeader
        kicker="Insights"
        title="Notes from the Foundr Flow studio."
        lead="Short, practical writing on Tier 2 & 3 founders, distribution, founder systems, and fundraising reality."
      />

      <Section className="pt-10 pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Latest</Kicker>
            <Lead className="mt-4">
              If you’re building early, you’re welcome here.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((p) => (
              <Card key={p.slug} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">
                    <Link className="hover:underline underline-offset-4" href={`/insights/${p.slug}`}>
                      {p.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="font-light">
                    {p.date} · {p.readingTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="font-light">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Separator />
            <div className="mt-6 text-sm font-light text-foreground/60">
              Want us to write about a topic? Send a note on{' '}
              <Link className="underline underline-offset-4" href="/contact">
                the contact page
              </Link>
              .
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

