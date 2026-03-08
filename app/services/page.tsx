import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesPage from '@/components/ServicesPage'

export const metadata: Metadata = {
  title: 'CA Services Punjab | Income Tax, GST, Foreign Accounting, Audit | CA Tanishq Aggarwal',
  description:
    'Complete CA services — Income Tax filing, GST registration, Company & LLP registration, Audit, Foreign Accounting (QuickBooks & Xero), and Startup Advisory. CA Tanishq Aggarwal, Punjab.',
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
    'QuickBooks bookkeeper India',
    'Xero accountant India',
    'foreign accounting services India',
    'remote bookkeeping India',
    'outsource bookkeeping India',
    'QuickBooks accounting India',
    'Xero bookkeeping India',
    'international bookkeeping services India',
  ],
  alternates: {
    canonical: 'https://www.tanishqaggarwalassociates.com/services',
  },
  openGraph: {
    title: 'CA Services Punjab | Income Tax, GST, Company Registration & More',
    description:
      'Complete chartered accountant services in Punjab — ITR filing, GST, company registration, audit, accounting & startup advisory by CA Tanishq Aggarwal.',
    url: 'https://www.tanishqaggarwalassociates.com/services',
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
