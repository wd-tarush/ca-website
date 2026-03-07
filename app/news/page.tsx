import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsPage from '@/components/NewsPage'

export const metadata: Metadata = {
  title: 'CA & Finance News | GST, Income Tax & ICAI Updates India',
  description:
    'Latest news for Chartered Accountants — GST notifications, Income Tax amendments, ICAI circulars, Companies Act updates and financial regulatory changes in India.',
  keywords: [
    'GST news India',
    'income tax news India',
    'ICAI notifications',
    'CA news India',
    'companies act amendments',
    'budget news India',
    'tax updates India 2024',
    'finance news India',
  ],
  alternates: {
    canonical: 'https://www.catanishqaggarwal.com/news',
  },
  openGraph: {
    title: 'CA & Finance News | GST, Income Tax & ICAI Updates',
    description:
      'Stay updated with latest GST, Income Tax, ICAI and Companies Act news. Curated for Chartered Accountants and businesses in India.',
    url: 'https://www.catanishqaggarwal.com/news',
    images: [{ url: '/gallery/profile_pic.jpg', alt: 'CA Finance News — Tanishq Aggarwal' }],
  },
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
