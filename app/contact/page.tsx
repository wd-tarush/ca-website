import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact CA Tanishq Aggarwal | Book Free Consultation',
  description:
    'Get in touch with Aggarwal & Associates. Book a free consultation for taxation, GST, audit, and financial advisory services in Punjab, India.',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}
