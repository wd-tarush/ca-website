import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesPage from '@/components/ServicesPage'

export const metadata: Metadata = {
  title: 'CA Services | Income Tax, GST, Audit & More | CA Tanishq Aggarwal',
  description:
    'Comprehensive CA services in Punjab — income tax filing, GST registration, company registration, audit & assurance, financial planning, and startup advisory.',
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
