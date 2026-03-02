import type { Metadata } from 'next'

import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { PartnerApplicationForm } from '@/components/forms/partner-application'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Partner Application · Foundr Flow',
  description:
    'Apply to become a Foundr Flow partner and help us support Tier 2 & Tier 3 founders across India.',
}

export default function PartnerApplicationPage() {
  return (
    <div>
      <PageHeader
        kicker="Partnership"
        title="Partner with Foundr Flow."
        lead="Join us in supporting Tier 2 & Tier 3 founders. Whether you're an investor, college, or ecosystem enabler, we'd love to collaborate."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PartnerApplicationForm />
            </div>

            <div className="space-y-6">
              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Investment Partners</Kicker>
                  <CardTitle className="font-light mt-3">VCs & Angels</CardTitle>
                  <CardDescription className="font-light">
                    Co-invest with us in promising Tier 2 & Tier 3 startups.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Campus Partners</Kicker>
                  <CardTitle className="font-light mt-3">Colleges & Universities</CardTitle>
                  <CardDescription className="font-light">
                    Run workshops, mentorship programs, and founder support on campus.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Ecosystem Partners</Kicker>
                  <CardTitle className="font-light mt-3">Accelerators & Programs</CardTitle>
                  <CardDescription className="font-light">
                    Government initiatives, accelerators, and founder support programs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>What We Look For</Kicker>
            <H2 className="mt-4">Ideal Partners.</H2>
            <Lead className="mt-5">
              We seek partners who share our vision for supporting founders beyond metro cities.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Tier 2/3 Focus', 
                body: 'Partners who understand and serve smaller cities and non-metro markets.'
              },
              { 
                title: 'Founder-First', 
                body: 'Organizations that prioritize founder success over quick returns.'
              },
              { 
                title: 'Long-term Vision', 
                body: 'Partners committed to building sustainable startup ecosystems.'
              },
            ].map((item) => (
              <Card key={item.title} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">{item.title}</CardTitle>
                  <CardDescription className="font-light">{item.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
