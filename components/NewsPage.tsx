'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, RefreshCw, Newspaper, AlertCircle, Clock } from 'lucide-react'

type NewsItem = {
  title: string
  link: string
  pubDate: string
  description: string
  source: string
}

const CATEGORIES = [
  { label: 'All',           keywords: [] },
  { label: 'Income Tax',    keywords: ['income tax', 'itr', 'tds', 'tcs', 'direct tax', '80c', 'cbdt'] },
  { label: 'GST',           keywords: ['gst', 'goods and services', 'cbic', 'eway bill', 'gstr'] },
  { label: 'ICAI',          keywords: ['icai', 'chartered accountant', 'ca final', 'ca inter'] },
  { label: 'Companies Act', keywords: ['companies act', 'mca', 'roc', 'llp', 'incorporation'] },
  { label: 'Budget',        keywords: ['budget', 'finance act', 'finance bill', 'union budget'] },
]

function categorise(item: NewsItem, keywords: string[]): boolean {
  if (!keywords.length) return true
  const text = (item.title + ' ' + item.description).toLowerCase()
  return keywords.some((k) => text.includes(k))
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  return `${days}d ago`
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function NewsPage() {
  const [news, setNews]           = useState<NewsItem[]>([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(false)
  const [category, setCategory]   = useState('All')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchNews = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/news')
      if (!res.ok) throw new Error('Failed')
      const data: NewsItem[] = await res.json()
      setNews(data)
      setLastUpdated(new Date())
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchNews() }, [fetchNews])

  const activeKeywords = CATEGORIES.find((c) => c.label === category)?.keywords ?? []
  const filtered = news.filter((item) => categorise(item, activeKeywords))

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1a4aad] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-sm font-semibold font-inter tracking-wide shadow-lg">
                Live Updates
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight mb-5"
            >
              CA &amp; Finance{' '}
              <span className="text-[#D4AF37]">News</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-inter text-white/75 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Latest updates on Income Tax, GST, ICAI notifications, Companies Act amendments
              and financial regulations — all in one place.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" className="w-full block">
            <path d="M0 70H1440V40C1320 15 1100 5 900 20C700 35 500 50 300 35C150 25 60 10 0 5V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setCategory(cat.label)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold font-inter transition-all duration-200 ${
                    category === cat.label
                      ? 'bg-[#1E3A8A] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Refresh + last updated */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {lastUpdated && (
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-inter">
                  <Clock size={12} />
                  Updated {timeAgo(lastUpdated.toISOString())}
                </span>
              )}
              <button
                onClick={fetchNews}
                disabled={loading}
                className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2 rounded-lg text-sm font-semibold font-inter hover:bg-[#163070] transition-colors disabled:opacity-60"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                Refresh
              </button>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 animate-pulse">
                  <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-4/5 mb-4" />
                  <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-20">
              <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-xl text-gray-700 mb-2">Could not load news</h3>
              <p className="font-inter text-gray-400 mb-6">Check your internet connection and try again.</p>
              <button
                onClick={fetchNews}
                className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-semibold font-inter hover:bg-[#163070] transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20">
              <Newspaper size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="font-inter text-gray-400">No news found for this category right now.</p>
            </div>
          )}

          {/* News grid */}
          {!loading && !error && filtered.length > 0 && (
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((item, i) => (
                  <motion.a
                    key={item.link || i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Source + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold font-inter text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-full">
                        {item.source}
                      </span>
                      <span className="text-xs text-gray-400 font-inter">
                        {item.pubDate ? formatDate(item.pubDate) : ''}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins font-bold text-gray-800 text-sm leading-snug mb-3 group-hover:text-[#1E3A8A] transition-colors line-clamp-3 flex-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    {item.description && (
                      <p className="font-inter text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {item.description}
                      </p>
                    )}

                    {/* Read more */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] font-inter mt-auto">
                      Read full article
                      <ExternalLink size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Results count */}
          {!loading && !error && filtered.length > 0 && (
            <p className="text-center font-inter text-xs text-gray-400 mt-10">
              Showing {filtered.length} articles · Auto-refreshes every hour · Sources: Tax Guru, PIB Finance Ministry
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
