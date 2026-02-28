import Image from 'next/image'
import * as React from 'react'

import { cn } from '@/lib/utils'

import type { Partner } from '@/lib/site-data'

export function PartnerLogo({
  partner,
  className,
}: {
  partner: Partner
  className?: string
}) {
  const content = (
    <div
      className={cn(
        'group flex h-20 w-full items-center justify-center rounded-xl border border-border/60 bg-background/60 p-4 transition-colors hover:border-border hover:bg-background/80',
        className,
      )}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={140}
        height={56}
        className="max-h-12 w-auto object-contain grayscale opacity-80 transition-all group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.08]"
        unoptimized
      />
    </div>
  )

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noreferrer"
        className="block"
        title={partner.name}
      >
        {content}
      </a>
    )
  }

  return <div title={partner.name}>{content}</div>
}
