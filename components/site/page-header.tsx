import * as React from 'react'

import { Container } from '@/components/site/container'
import { Kicker, H1, Lead } from '@/components/site/section'

export function PageHeader({
  kicker,
  title,
  lead,
  children,
}: {
  kicker?: string
  title: string
  lead?: string
  children?: React.ReactNode
}) {
  return (
    <div className="pt-12 sm:pt-16">
      <Container>
        <div className="max-w-2xl">
          {kicker ? <Kicker>{kicker}</Kicker> : null}
          <H1 className={kicker ? 'mt-4' : undefined}>{title}</H1>
          {lead ? <Lead className="mt-5">{lead}</Lead> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </div>
  )
}

