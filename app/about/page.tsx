import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About CA Tanishq Aggarwal | ICAI Chartered Accountant Punjab',
  description:
    'Meet CA Tanishq Aggarwal — ICAI-qualified Chartered Accountant in Punjab, India. 4+ years experience in Income Tax, GST, Audit & Financial Advisory. Serving 50+ clients across Punjab.',
  keywords: [
    'CA Tanishq Aggarwal',
    'Tanishq Aggarwal CA',
    'chartered accountant Punjab',
    'ICAI member Punjab',
    'best CA Punjab',
    'CA Ludhiana',
  ],
  alternates: {
    canonical: 'https://www.tanishqaggarwalassociates.com/about',
  },
  openGraph: {
    title: 'About CA Tanishq Aggarwal | ICAI Chartered Accountant Punjab',
    description:
      'ICAI-qualified Chartered Accountant in Punjab with expertise in Income Tax, GST, Audit & Financial Advisory. 50+ clients served.',
    url: 'https://www.tanishqaggarwalassociates.com/about',
    images: [{ url: '/gallery/profile_pic.jpg', alt: 'CA Tanishq Aggarwal' }],
  },
}

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}
