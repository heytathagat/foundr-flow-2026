import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/site/container'
import { PageHeader } from '@/components/site/page-header'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Foundr X · India Tour',
  description:
    'Foundr X — a business networking tour connecting founders, investors, and partners across 45+ cities.',
}

export default function FoundrXPage() {
  return (
    <div>
      <PageHeader
        kicker="Foundr X"
        title="Foundr X — India Tour"
        lead="A 45+ city tour built to connect startup founders, investors, and ecosystem partners across regions."
      >
        <Button asChild>
          <Link href="/contact">Apply to pitch</Link>
        </Button>
      </PageHeader>

      <Section className="pt-10">
        <Container>
          <div className="max-w-3xl">
            <Kicker>What to expect</Kicker>
            <H2 className="mt-3">Real connections, practical outcomes</H2>
            <Lead className="mt-4">
              Foundr X blends keynote sessions, panel discussions, curated networking,
              and live pitch opportunities to create high-value connections that help
              startups grow faster and smarter.
            </Lead>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                <h3 className="font-medium">Keynotes & Panels</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Learn from founders and investors who’ve built and scaled startups in
                  diverse markets.
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                <h3 className="font-medium">Live Pitching</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Selected founders get a chance to pitch live to investors and partners
                  for feedback, intros, and follow-up meetings.
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                <h3 className="font-medium">Curated Networking</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Small, curated groups and matchmaking to create introductions that
                  matter — not just exchange cards.
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/60 p-5">
                <h3 className="font-medium">Regional Spotlight</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  We spotlight emerging innovation hubs and strengthen local ecosystems
                  by bringing founders and investors together in 45+ cities.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button asChild>
                <Link href="/contact">Apply to pitch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Partner / Sponsor</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
