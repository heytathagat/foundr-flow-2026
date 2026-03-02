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
    'Foundr Flow is a venture studio and early-stage investor for Tier 2 & Tier 3 founders in India, founded by Tathagat Kumar.',
  applicationName: 'Foundr Flow',
  authors: [{ name: 'Tathagat Kumar' }],
  creator: 'Tathagat Kumar',
  publisher: 'Foundr Flow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://foundrflow.in'),
  alternates: {
    canonical: new URL('https://foundrflow.in'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://foundrflow.in',
    title: 'Foundr Flow - Venture Studio for Tier 2 & Tier 3 Founders',
    description: 'Foundr Flow is a venture studio and early-stage investor dedicated to co-building products, distribution, and momentum for Tier 2 and Tier 3 founders from day zero.',
    siteName: 'Foundr Flow',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Foundr Flow - Venture Studio for Tier 2 & Tier 3 Founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundr Flow - Venture Studio for Tier 2 & Tier 3 Founders',
    description: 'Foundr Flow is a venture studio and early-stage investor dedicated to co-building products, distribution, and momentum for Tier 2 and Tier 3 founders from day zero.',
    images: {
      url: '/og-image.jpg',
      alt: 'Foundr Flow - Venture Studio for Tier 2 & Tier 3 Founders',
    },
    creator: '@foundrflow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
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
