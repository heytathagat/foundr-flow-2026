'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { MenuIcon } from 'lucide-react'

import { nav, site } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/site/container'

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <nav className={cn('flex items-center gap-6', className)}>
      {nav.map((item) => {
        const active =
          pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors',
              active && 'text-foreground',
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center"
            aria-label={site.name}
          >
            <Image
              src="/foundrflow-logo-outline.png"
              alt={site.name}
              width={120}
              height={32}
              className="h-7 w-auto sm:h-8"
              unoptimized
              priority
            />
          </Link>

          <div className="hidden md:block">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">Send a deck</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <MenuIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="px-5 pt-5 pb-3">
                <Link href="/" onClick={(e) => e.stopPropagation()} className="block w-fit">
                  <Image
                    src="/foundrflow-logo-outline.png"
                    alt={site.name}
                    width={100}
                    height={28}
                    className="h-7 w-auto"
                    unoptimized
                  />
                </Link>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <Separator />
              <div className="px-5 py-6">
                <NavLinks
                  className="flex-col items-start gap-4"
                  onNavigate={() => {
                    // Sheet closes automatically on navigation via Link in most cases,
                    // but keeping this hook allows future explicit close behavior if needed.
                  }}
                />
                <div className="mt-8 flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/contact">Send a deck</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/portfolio">View portfolio</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

