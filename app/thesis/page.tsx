import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { focusAreas, site } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Studio thesis · Foundr Flow',
  description:
    'How Foundr Flow, founded by Tathagat Kumar, works as a venture studio and early-stage investor for Tier 2 & Tier 3 founders.',
}

export default function ThesisPage() {
  return (
    <div>
      <PageHeader
        kicker="Thesis"
        title="A studio + investor built for Tier 2 & 3."
        lead="Foundr Flow is a venture studio and early-stage investor that helps underdog founders turn local insight into real companies—product, brand, distribution, mentorship, and capital together."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/contact">Apply to the studio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/portfolio">See studio work</Link>
          </Button>
        </div>
      </PageHeader>

      <Section className="pt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-none">
              <CardHeader className="pb-4">
                <Kicker>Who it’s for</Kicker>
                <CardTitle className="font-light mt-3">Tier 2 & 3 founders</CardTitle>
                <CardDescription className="font-light">
                  Students, operators, and creators building from campuses and ecosystems
                  outside the usual metros.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="pb-4">
                <Kicker>What we provide</Kicker>
                <CardTitle className="font-light mt-3">Studio + mentor stack</CardTitle>
                <CardDescription className="font-light">
                  Product strategy, design, storytelling, content, GTM, distribution
                  playbooks, deep mentorship, and access to capital.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="pb-4">
                <Kicker>How we engage</Kicker>
                <CardTitle className="font-light mt-3">Hands-on sprints</CardTitle>
                <CardDescription className="font-light">
                  We work in tight, focused sprints with a small number of teams at a
                  time.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Kicker>What we believe</Kicker>
            <H2 className="mt-4">Distribution and narrative come first.</H2>
            <Lead className="mt-5">
              Great companies don’t wait until “later” to tell their story. We help
              founders design distribution loops, content, and brand from day zero—so
              every product iteration lands with real users.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="font-light">Craft over theater</CardTitle>
                <CardDescription className="font-light">
                  Clear customers, real adoption, and measurable retention—not vanity
                  metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light text-foreground/70 leading-relaxed">
                  We prefer founders who show up with proof: a wedge, a workflow, a
                  community, or a small but obsessed cohort. “Big market” is not a
                  strategy.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="font-light">Momentum is engineered</CardTitle>
                <CardDescription className="font-light">
                  Cadence, storytelling, and execution beat luck.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light text-foreground/70 leading-relaxed">
                  Inside the studio we build launch calendars, funnels, and content
                  systems that make progress visible—to users, to teams, and later to
                  capital partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Focus areas</Kicker>
              <H2 className="mt-4">Where the studio leans in.</H2>
              <Lead className="mt-5">
                We’re sector-opinionated, but founder-led. If you have a sharp wedge in
                your city or community, we’ll help you turn it into a product and brand.
              </Lead>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <Card key={area.title} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">{area.title}</CardTitle>
                  <CardDescription className="font-light">
                    {area.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <Kicker>How we work</Kicker>
            <H2 className="mt-4">Tight sprints. Clear ownership.</H2>
            <Lead className="mt-5">
              We value founder time. Studio cycles are structured so you always know
              what we’re doing, what you own, and what happens next.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Intro + context',
                body: 'A short call to understand your story, city, users, and why this idea matters to you.',
              },
              {
                step: '02',
                title: 'Working session',
                body: 'A deep-dive jam on wedge, distribution, and what a 90-day studio sprint could look like.',
              },
              {
                step: '03',
                title: 'Studio sprint',
                body: 'If there’s a fit, we agree scope and start building—product, content, and GTM together.',
              },
            ].map((s) => (
              <Card key={s.step} className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>{s.step}</Kicker>
                  <CardTitle className="font-light mt-3">{s.title}</CardTitle>
                  <CardDescription className="font-light">{s.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {['Founder-led', 'Tier 2 & 3 first', 'No fluff', 'Clear next steps'].map((t) => (
              <Badge key={t} variant="outline" className="font-light">
                {t}
              </Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>FAQ</Kicker>
            <H2 className="mt-4">Quick answers.</H2>
            <Lead className="mt-5">
              If you’re unsure whether we’re a fit, start here. Or email us at{' '}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </Lead>
          </div>

          <div className="mt-10 max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="check">
                <AccordionTrigger className="font-light">
                  Is this an accelerator or a VC fund?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-foreground/70 leading-relaxed">
                  Foundr Flow is a venture studio. We go deep with a small set of teams,
                  co-building product, brand, and distribution. We also help you plug
                  into the right capital partners when it makes sense.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="geo">
                <AccordionTrigger className="font-light">
                  Who should apply to the studio?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-foreground/70 leading-relaxed">
                  Founders building from Tier 2 & 3—students, operators, and creators who
                  are already shipping and want help productizing and scaling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="process">
                <AccordionTrigger className="font-light">
                  How long does a studio sprint take?
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-foreground/70 leading-relaxed">
                  We keep things tight. A typical cycle is 6–12 weeks depending on scope:
                  from sharpening the idea and narrative to building, launching, and
                  tuning distribution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>
    </div>
  )
}

