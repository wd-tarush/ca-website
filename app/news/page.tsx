import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsPage from '@/components/NewsPage'

export const metadata: Metadata = {
  title: 'CA & Finance News | Aggarwal & Associates',
  description:
    'Latest news on Income Tax, GST, ICAI notifications, Companies Act amendments and financial regulations for Chartered Accountants in India.',
}

export default function News() {
  return (
    <>
      <Navbar />
      <main>
        <NewsPage />
      </main>
      <Footer />
    </>
  )
}
