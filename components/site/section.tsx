import * as React from 'react'

import { cn } from '@/lib/utils'

export function Section({
  className,
  ...props
}: React.ComponentProps<'section'>) {
  return <section className={cn('py-16 sm:py-20', className)} {...props} />
}

export function Kicker({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-xs sm:text-sm uppercase tracking-[0.22em] text-foreground/50',
        className,
      )}
      {...props}
    />
  )
}

export function H1({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-6xl font-light tracking-tight leading-[1.05]',
        className,
      )}
      {...props}
    />
  )
}

export function H2({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-2xl sm:text-3xl font-light tracking-tight leading-tight',
        className,
      )}
      {...props}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-base sm:text-lg font-light text-foreground/70 leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}

