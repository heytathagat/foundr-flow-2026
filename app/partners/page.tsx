import Link from 'next/link'

import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { partners } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { PartnerLogo } from '@/components/site/partner-logo'
import { Separator } from '@/components/ui/separator'

export default function PartnersPage() {
  return (
    <div>
      <PageHeader
        kicker="Partners"
        title="Colleges, investors, and ecosystem partners."
        lead="We work with colleges, investment partners, and ecosystem enablers to support Tier 2 & 3 founders."
      >
        <Button asChild variant="outline">
          <Link href="/contact">Partner with us</Link>
        </Button>
      </PageHeader>

      <Section className="pt-10">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Colleges</Kicker>
            <H2 className="mt-4">Campus partners.</H2>
            <Lead className="mt-5">
              Colleges and institutions where we run workshops, mentorship, and
              founder programs.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.colleges.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </Section>

      <Separator />

      <Section>
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Kicker>Investment Partners</Kicker>
              <span className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-light tracking-wide text-foreground/70">
                30+ capital partners
              </span>
            </div>
            <H2 className="mt-4">Capital partners.</H2>
            <Lead className="mt-5">
              30+ VCs, angels, and funds we work with to deploy capital and support
              portfolio companies.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.investmentPartners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>

          <p className="mt-6 text-sm font-light text-foreground/60">
            More +30 partners
          </p>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Relevant Partners</Kicker>
            <H2 className="mt-4">Ecosystem enablers.</H2>
            <Lead className="mt-5">
              Government initiatives, accelerators, and programs that help us
              reach and support founders.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.relevantPartners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
