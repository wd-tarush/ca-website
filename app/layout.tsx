import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'Aggarwal & Associates | Chartered Accountant Punjab',
  description:
    'Professional chartered accountant services in Punjab, India. Expert in income tax, GST, company registration, audit and financial advisory. Serving businesses and individuals across India.',
  keywords:
    'chartered accountant punjab, CA punjab, income tax filing punjab, GST registration punjab, company registration punjab, audit services, financial advisor punjab, CA Tanishq Aggarwal',
  authors: [{ name: 'Aggarwal & Associates' }],
  openGraph: {
    title: 'Aggarwal & Associates | Chartered Accountant Punjab',
    description:
      'Trusted Chartered Accountant Services in Punjab. Expert taxation, compliance & financial advisory.',
    siteName: 'Aggarwal & Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aggarwal & Associates',
    description: 'Trusted CA Services in Punjab — Tax, GST, Audit & Advisory.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
