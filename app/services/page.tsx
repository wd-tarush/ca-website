import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesPage from '@/components/ServicesPage'

export const metadata: Metadata = {
  title: 'CA Services Punjab | Income Tax, GST, Company Registration, Audit',
  description:
    'Complete CA services in Punjab — Income Tax filing, GST registration & returns, Company & LLP registration, Audit & Assurance, Accounting, Payroll, and Startup Advisory. CA Tanishq Aggarwal.',
  keywords: [
    'income tax filing Punjab',
    'GST registration Punjab',
    'GST return filing Punjab',
    'company registration Punjab',
    'LLP registration Punjab',
    'audit services Punjab',
    'accounting services Punjab',
    'ITR filing Punjab',
    'TDS filing Punjab',
    'CA services Punjab',
    'tax consultant Punjab',
    'payroll services Punjab',
    'startup advisory Punjab',
    'financial advisory Punjab',
    'CA for business Punjab',
    'CA for bank loan Punjab',
  ],
  alternates: {
    canonical: 'https://www.catanishqaggarwal.com/services',
  },
  openGraph: {
    title: 'CA Services Punjab | Income Tax, GST, Company Registration & More',
    description:
      'Complete chartered accountant services in Punjab — ITR filing, GST, company registration, audit, accounting & startup advisory by CA Tanishq Aggarwal.',
    url: 'https://www.catanishqaggarwal.com/services',
    images: [{ url: '/gallery/profile_pic.jpg', alt: 'CA Services by Tanishq Aggarwal' }],
  },
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  )
}
