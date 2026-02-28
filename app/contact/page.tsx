import { PageHeader } from '@/components/site/page-header'
import { Container } from '@/components/site/container'
import { H2, Kicker, Lead, Section } from '@/components/site/section'
import { site } from '@/lib/site-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from '@/components/site/contact-form'

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        kicker="Contact"
        title="Apply to Foundr Flow."
        lead="Tell us what you’re building from your city or campus. If it’s not a fit, we’ll still try to leave you with something useful."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">Message</CardTitle>
                  <CardDescription className="font-light">
                    Share context, traction, and what you’re looking for.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Direct</Kicker>
                  <CardTitle className="font-light mt-3">Email</CardTitle>
                  <CardDescription className="font-light">
                    The fastest way to reach us.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    className="text-sm font-light underline underline-offset-4"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Location</Kicker>
                  <CardTitle className="font-light mt-3">{site.location}</CardTitle>
                  <CardDescription className="font-light">
                    Meetings by appointment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <Kicker>Social</Kicker>
                  <CardTitle className="font-light mt-3">Online</CardTitle>
                  <CardDescription className="font-light">
                    Updates and writing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-2 text-sm font-light text-foreground/70">
                  <a className="underline underline-offset-4 hover:text-foreground transition-colors" href={site.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <div>
                    <a className="underline underline-offset-4 hover:text-foreground transition-colors" href={site.x} target="_blank" rel="noreferrer">
                      X
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Separator />

      <Section className="pb-20">
        <Container>
          <div className="max-w-2xl">
            <Kicker>What to include</Kicker>
            <H2 className="mt-4">Help us respond fast.</H2>
            <Lead className="mt-5">
              A few crisp details increase speed and quality of feedback.
            </Lead>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Wedge', body: 'Who is the user in your city/community, and what pain is urgent for them?' },
              { title: 'Proof', body: 'Screens, links, users, or any signal that you’re already shipping.' },
              { title: 'Studio fit', body: 'What kind of help you want from Foundr Flow over the next 3–6 months.' },
            ].map((i) => (
              <Card key={i.title} className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="font-light">{i.title}</CardTitle>
                  <CardDescription className="font-light">{i.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

