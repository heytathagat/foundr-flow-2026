import Image from 'next/image'
import Link from 'next/link'

import { site } from '@/lib/site-data'
import { Container } from '@/components/site/container'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="mt-20">
      <Separator />
      <Container className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-block" aria-label={site.name}>
              <Image
                src="/foundrflow-logo-outline.png"
                alt={site.name}
                width={100}
                height={28}
                className="h-6 w-auto sm:h-7"
                unoptimized
              />
            </Link>
            <p className="mt-3 text-sm font-light text-foreground/60 leading-relaxed">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Firm
              </p>
              <div className="flex flex-col gap-2 text-sm font-light text-foreground/70">
                <Link className="hover:text-foreground transition-colors" href="/thesis">
                  Thesis
                </Link>
                <Link className="hover:text-foreground transition-colors" href="/portfolio">
                  Portfolio
                </Link>
                <Link className="hover:text-foreground transition-colors" href="/partners">
                  Partners
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                Connect
              </p>
              <div className="flex flex-col gap-2 text-sm font-light text-foreground/70">
                <Link className="hover:text-foreground transition-colors" href="/contact">
                  Contact
                </Link>
                <a
                  className="hover:text-foreground transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                <a
                  className="hover:text-foreground transition-colors"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light text-foreground/50 tracking-wide">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs font-light text-foreground/40 tracking-wide">
            {site.location}
          </p>
        </div>
      </Container>
    </footer>
  )
}

