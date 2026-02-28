import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import * as React from 'react'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Foundr Flow',
    template: '%s · Foundr Flow',
  },
  description:
    'A venture studio + early-stage investor for Tier 2 & Tier 3 founders—combining capital, mentorship, and co-building.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-dvh">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
