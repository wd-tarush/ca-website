import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-F00FG5V4KQ'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tanishqaggarwalassociates.com'),
  title: {
    default: 'CA Tanishq Aggarwal | Chartered Accountant Punjab — Tax, GST ',
    template: '%s | CA Tanishq Aggarwal',
  },
  description:
    'CA Tanishq Aggarwal — ICAI-qualified Chartered Accountant in Punjab, India. Expert in Income Tax filing, GST registration, company registration  and financial advisory for businesses and individuals.',
  keywords: [
    'CA Tanishq Aggarwal',
    'Tanishq Aggarwal Chartered Accountant',
    'chartered accountant Punjab',
    'CA Punjab',
    'best CA in Punjab',
    'top CA Punjab',
    'income tax filing Punjab',
    'GST registration Punjab',
    'GST filing Punjab',
    'company registration Punjab',
    'LLP registration Punjab',
    'tax consultant Punjab',
    'CA for business Punjab',
    'CA for bank services Punjab',
    'financial advisor Punjab',
    'CA near me Punjab',
    'ICAI chartered accountant',
    'ITR filing Punjab',
    'TDS filing Punjab',
    'startup advisor Punjab',
    'QuickBooks bookkeeper India',
    'Xero accountant India',
    'foreign accounting India',
    'remote bookkeeping India',
    'outsource bookkeeping India',
    'Tanishq Aggarwal and Associates',
  ],
  authors: [{ name: 'CA Tanishq Aggarwal', url: 'https://www.tanishqaggarwalassociates.com' }],
  creator: 'CA Tanishq Aggarwal',
  publisher: 'Tanishq Aggarwal & Associates',
  alternates: {
    canonical: 'https://www.tanishqaggarwalassociates.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.tanishqaggarwalassociates.com',
    siteName: 'CA Tanishq Aggarwal',
    title: 'CA Tanishq Aggarwal | Chartered Accountant Punjab',
    description:
      'ICAI-qualified CA in Punjab. Expert in Income Tax, GST, Company Registration, Audit & Financial Advisory. Serving businesses across Punjab & India.',
    images: [
      {
        url: '/gallery/profile_pic.jpg',
        width: 1200,
        height: 630,
        alt: 'CA Tanishq Aggarwal — Chartered Accountant Punjab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CA Tanishq Aggarwal | Chartered Accountant Punjab',
    description: 'ICAI-qualified CA in Punjab — Tax, GST, Audit & Advisory Services.',
    images: ['/gallery/profile_pic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: '',   // paste Google Search Console verification code here when you have it
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-inter antialiased bg-white text-gray-900">
        {/* JSON-LD: Local Business + Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': ['AccountingService', 'LocalBusiness'],
                '@id': 'https://www.tanishqaggarwalassociates.com/#business',
                name: 'Tanishq Aggarwal & Associates',
                alternateName: 'CA Tanishq Aggarwal',
                url: 'https://www.tanishqaggarwalassociates.com',
                logo: 'https://www.tanishqaggarwalassociates.com/gallery/site_icon.png',
                image: 'https://www.tanishqaggarwalassociates.com/gallery/profile_pic.jpg',
                description:
                  'ICAI-qualified Chartered Accountant firm in Punjab, India specializing in Income Tax, GST, Company Registration, Audit & Assurance, and Financial Advisory services.',
                telephone: '+916284757741',
                email: 'catanishqaggarwal@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: 'Punjab',
                  addressCountry: 'IN',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 30.9010,
                  longitude: 75.8573,
                },
                areaServed: [
                  { '@type': 'State', name: 'Punjab' },
                  { '@type': 'Country', name: 'India' },
                ],
                priceRange: '₹₹',
                openingHours: 'Mo-Sa 09:00-18:00',
                sameAs: [
                  'https://www.linkedin.com/in/tanishqaggarwal31/',
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'CA Services',
                  itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Income Tax Filing' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GST Registration & Filing' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company & LLP Registration' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit & Assurance' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Startup Financial Advisory' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accounting & Bookkeeping' } },
                  ],
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': 'https://www.tanishqaggarwalassociates.com/#person',
                name: 'Tanishq Aggarwal',
                alternateName: 'CA Tanishq Aggarwal',
                jobTitle: 'Chartered Accountant',
                description:
                  'ICAI-qualified Chartered Accountant based in Punjab, India with expertise in taxation, GST, audit, and financial advisory.',
                url: 'https://www.tanishqaggarwalassociates.com',
                image: 'https://www.tanishqaggarwalassociates.com/gallery/profile_pic.jpg',
                telephone: '+916284757741',
                email: 'catanishqaggarwal@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: 'Punjab',
                  addressCountry: 'IN',
                },
                alumniOf: {
                  '@type': 'Organization',
                  name: 'Institute of Chartered Accountants of India (ICAI)',
                },
                memberOf: {
                  '@type': 'Organization',
                  name: 'Institute of Chartered Accountants of India',
                  url: 'https://www.icai.org',
                },
                sameAs: [
                  'https://www.linkedin.com/in/tanishqaggarwal31/',
                ],
                worksFor: {
                  '@id': 'https://www.tanishqaggarwalassociates.com/#business',
                },
              },
            ]),
          }}
        />
        {children}
      </body>
    </html>
  )
}
