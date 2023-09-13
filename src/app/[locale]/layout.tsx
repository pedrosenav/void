// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import '../globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Void - Criamos o seu próprio universo',
  description: 'Criamos o seu próprio universo',
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-void-purple-950 font-sans text-zinc-50`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
