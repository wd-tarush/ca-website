import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact CA Tanishq Aggarwal | Book Free Consultation Punjab',
  description:
    'Book a free consultation with CA Tanishq Aggarwal in Punjab. Get expert advice on Income Tax, GST, company registration, audit & financial planning. Call +91 6284757741.',
  keywords: [
    'contact CA Punjab',
    'book CA consultation Punjab',
    'free CA consultation Punjab',
    'CA near me Punjab',
    'hire chartered accountant Punjab',
    'CA for tax filing Punjab',
    'CA Tanishq Aggarwal contact',
  ],
  alternates: {
    canonical: 'https://www.catanishqaggarwal.com/contact',
  },
  openGraph: {
    title: 'Contact CA Tanishq Aggarwal | Book Free Consultation',
    description:
      'Book a free consultation with CA Tanishq Aggarwal in Punjab. Expert in Tax, GST, Company Registration & Audit. Call +91 6284757741.',
    url: 'https://www.catanishqaggarwal.com/contact',
    images: [{ url: '/gallery/profile_pic.jpg', alt: 'Contact CA Tanishq Aggarwal' }],
  },
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
