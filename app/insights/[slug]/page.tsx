import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/site/container'
import { Kicker, Lead } from '@/components/site/section'
import { insights, site } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = insights.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · ${site.name}`,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = insights.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <div className="pt-12 sm:pt-16 pb-20">
      <Container>
        <div className="max-w-2xl">
          <Kicker>Insight</Kicker>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light tracking-tight leading-tight">
            {post.title}
          </h1>
          <Lead className="mt-5">{post.excerpt}</Lead>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-foreground/55 tracking-wide">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span className="hidden sm:inline">·</span>
            <div className="flex flex-wrap gap-2 sm:ml-2">
              {post.tags.map((t) => (
                <Badge key={t} variant="outline" className="font-light">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-10" />

          <article className="space-y-10">
            {post.body.map((s) => (
              <section key={s.heading} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-light tracking-tight">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-sm sm:text-base font-light text-foreground/75 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>

          <Separator className="my-12" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link className="text-sm font-light underline underline-offset-4" href="/insights">
              Back to insights
            </Link>
            <a
              className="text-sm font-light underline underline-offset-4 text-foreground/70 hover:text-foreground transition-colors"
              href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${post.title}`)}`}
            >
              Reply via email
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

