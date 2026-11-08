
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  // metadataBase: new URL('https://gobyk.in'),

  title: {
    default: 'GoByk | Premium Bike & Car Service in Hyderabad',
    template: '%s | GoByk',
  },

  description:
    'Book reliable bike and car servicing in Hyderabad with GoByk. Explore periodic maintenance, repairs, detailing, denting, painting and convenient service locations.',

  keywords: [
    'bike service in Hyderabad',
    'car service in Hyderabad',
    'two wheeler service',
    'bike repair Hyderabad',
    'car repair Hyderabad',
    'vehicle maintenance',
    'bike servicing near me',
    'GoByk',
  ],

  applicationName: 'GoByk',

  // openGraph: {
  //   type: 'website',
  //   locale: 'en_IN',
  //   url: 'https://gobyk.in',
  //   siteName: 'GoByk',
  //   title: 'GoByk | Premium Bike & Car Service in Hyderabad',
  //   description:
  //     'A better way to care for your ride. Discover trusted bike and car servicing with GoByk.',
  //   images: [
  //     {
  //       url: '/og-image.jpg',
  //       width: 1200,
  //       height: 630,
  //       alt: 'GoByk bike and car services in Hyderabad',
  //     },
  //   ],
  // },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'GoByk | Premium Bike & Car Service in Hyderabad',
  //   description:
  //     'Reliable bike and car servicing in Hyderabad with GoByk.',
  //   images: ['/og-image.jpg'],
  // },

  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },


}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
