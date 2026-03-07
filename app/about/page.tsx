import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About CA Tanishq Aggarwal | Chartered Accountant Punjab',
  description:
    'Meet CA Tanishq Aggarwal — ICAI-qualified Chartered Accountant based in Punjab, India. Expert in taxation, GST, audit, and financial advisory services.',
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
