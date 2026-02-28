import Link from 'next/link'

import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { focusAreas, insights, partners, portfolio, site, team } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PartnerLogo } from '@/components/site/partner-logo'

export default function Home() {
  const featuredPortfolio = portfolio.slice(0, 3)
  const featuredTeam = team.slice(0, 2)
  const featuredInsights = insights.slice(0, 3)
  const featuredPartners = [
    ...partners.colleges.slice(0, 2),
    ...partners.investmentPartners.slice(0, 2),
    ...partners.relevantPartners.slice(0, 2),
  ]

  return (
    <div>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-muted/40 to-background px-6 py-10 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(55%_55%_at_20%_10%,black,transparent)]">
              <div className="absolute -top-16 -left-16 size-72 rounded-full bg-foreground/5 blur-2xl" />
              <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-foreground/5 blur-2xl" />
            </div>

            <div className="relative max-w-2xl">
              <Kicker>Venture studio + investments</Kicker>
              <h1 className="mt-4 text-4xl sm:text-6xl font-light tracking-tight leading-[1.05]">
                Co-building with Tier 2 & Tier 3 founders.
              </h1>
              <Lead className="mt-6">
                {site.name} is a venture studio and early investor that helps underdog
                founders from Tier 2 & 3 India design, build, and launch companies—product,
                brand, distribution, and capital support included.
              </Lead>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/contact">Apply to the studio</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/thesis">How Foundr Flow works</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:bg-background/80">
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                    Studio + capital
                  </p>
                  <p className="mt-2 text-sm font-light text-foreground/80 leading-relaxed">
                    Hands-on studio support with access to capital, operators, and an
                    execution-first network.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:bg-background/80">
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                    Mentorship
                  </p>
                  <p className="mt-2 text-sm font-light text-foreground/80 leading-relaxed">
                    Operator-led guidance on story, product, GTM, and fundraising—without
                    the fluff.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:bg-background/80">
                  <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-light text-foreground/80 leading-relaxed">
                    Tier 2 & Tier 3 founders building for India and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Focus</Kicker>
              <H2 className="mt-4">Where the studio goes deep.</H2>
              <Lead className="mt-5">
                We work with founders who understand their local markets and want help
                productizing that insight—brand, tech, and GTM.
              </Lead>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/thesis">Studio thesis</Link>
            </Button>
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
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Portfolio</Kicker>
              <H2 className="mt-4">Companies built with Foundr Flow.</H2>
              <Lead className="mt-5">
                A sample of products and brands co-built with founders from campuses and
                ecosystems outside the usual hotspots.
              </Lead>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/portfolio">View all</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map((c) => (
              <Card key={c.name} className="shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="font-light">{c.name}</CardTitle>
                    <Badge variant="outline" className="font-light">
                      {c.sector}
                    </Badge>
                  </div>
                  <CardDescription className="font-light">{c.oneLiner}</CardDescription>
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

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/portfolio">View all</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Team</Kicker>
              <H2 className="mt-4">Builders, not just advisors.</H2>
              <Lead className="mt-5">
                We sit inside the mess with you—customer calls, decks, funnels, and hiring
                decisions.
              </Lead>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/team">Meet the team</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTeam.map((m) => (
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

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/team">Meet the team</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Partners</Kicker>
              <H2 className="mt-4">Colleges, investors, and ecosystem partners.</H2>
              <Lead className="mt-5">
                We work with 30+ capital partners, colleges, and ecosystem enablers to
                support Tier 2 & 3 founders.
              </Lead>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/partners">View all partners</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {featuredPartners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>

          <p className="mt-6 text-sm font-light text-foreground/60">
            More +30 partners
          </p>

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/partners">View all partners</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Insights</Kicker>
              <H2 className="mt-4">Notes from the studio floor.</H2>
              <Lead className="mt-5">
                Short, practical writing from building with founders across Tier 2 & 3
                cities.
              </Lead>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/insights">Read all</Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInsights.map((p) => (
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
                <CardContent>
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

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/insights">Read all</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="rounded-2xl border border-border/60 p-8 sm:p-10">
            <Kicker>Let’s talk</Kicker>
            <H2 className="mt-4">Building from outside the usual hotspots?</H2>
            <Lead className="mt-5 max-w-2xl">
              If you’re a student, operator, or creator from Tier 2 or 3, and you’re
              already shipping, we’d love to hear from you. Expect clear next steps—not
              generic “let’s keep in touch”.
            </Lead>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/contact">Apply to Foundr Flow</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${site.email}`}>Email us</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
