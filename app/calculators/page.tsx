import type { Metadata } from 'next'
import Navbar          from '@/components/Navbar'
import Footer          from '@/components/Footer'
import CalculatorsPage from '@/components/CalculatorsPage'

export const metadata: Metadata = {
  title: 'Free Tax Calculators | Income Tax, GST, ITR Refund Calculator India',
  description:
    'Free online tax calculators for India — Income Tax Calculator (Old & New Regime 2024-25), GST Late Fee Calculator, ITR Refund Estimator. By CA Tanishq Aggarwal, Punjab.',
  keywords: [
    'income tax calculator India 2024-25',
    'new regime vs old regime calculator',
    'GST late fee calculator',
    'ITR refund calculator',
    'tax calculator Punjab',
    'free income tax calculator',
    'GST calculator India',
  ],
  alternates: {
    canonical: 'https://www.tanishqaggarwalassociates.com/calculators',
  },
  openGraph: {
    title: 'Free Tax Calculators | Income Tax, GST & ITR — CA Tanishq Aggarwal',
    description:
      'Free Income Tax, GST Late Fee & ITR Refund calculators for Indian taxpayers. Old vs New Regime comparison by CA Tanishq Aggarwal.',
    url: 'https://www.tanishqaggarwalassociates.com/calculators',
    images: [{ url: '/gallery/profile_pic.jpg', alt: 'Tax Calculators by CA Tanishq Aggarwal' }],
  },
}

export default function Calculators() {
  return (
    <>
      <Navbar />
      <main>
        <CalculatorsPage />
      </main>
      <Footer />
    </>
  )
}
