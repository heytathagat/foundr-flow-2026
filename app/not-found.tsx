import Link from 'next/link'

import { Container } from '@/components/site/container'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-foreground/50">
            404
          </p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-light tracking-tight">
            Page not found
          </h1>
          <p className="mt-5 text-sm sm:text-base font-light text-foreground/70 leading-relaxed">
            The page you’re looking for doesn’t exist (or moved). Head back home.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

