'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react'

const floatingBadges = [
  { text: '50+ Happy Clients', sub: 'Punjab', color: 'bg-white text-[#1E3A8A]', pos: 'top-4 left-0 md:-left-8' },
  { text: 'ICAI Registered',    sub: 'Certified CA',  color: 'bg-[#D4AF37] text-white',   pos: 'bottom-4 right-0 md:-right-8' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f2357] via-[#1E3A8A] to-[#1a4aad] overflow-hidden flex flex-col justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 bg-hero-grid opacity-100" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 hidden xl:block"
      >
        <svg viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="12 6" />
          <circle cx="200" cy="200" r="145" stroke="white"   strokeWidth="1"   strokeDasharray="6 10" />
          <circle cx="200" cy="200" r="95"  stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <Shield size={14} />
              ICAI Registered Chartered Accountant · Punjab
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-poppins text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.12] mb-6"
            >
              Trusted{' '}
              <span className="text-[#D4AF37]">Chartered</span>
              <br className="hidden sm:block" />
              {' '}Accountant Services
              <br className="hidden sm:block" />
              {' '}
              <span className="text-[#D4AF37]">in Punjab</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-inter text-white/75 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Professional taxation, compliance, and financial advisory services for
              businesses and individuals across Punjab and India. Expert guidance for
              your financial growth.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-col gap-2 mb-9"
            >
              {['Income Tax & GST Filing', 'Company Registration & Compliance', 'Audit, Assurance & Financial Planning'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/80 text-sm font-inter">
                  <CheckCircle size={16} className="text-[#D4AF37] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8960C] text-white px-7 py-4 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-7 py-4 rounded-lg font-semibold text-base hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right column – card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl w-[360px]">
                {/* CA Avatar */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl font-poppins">T</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-white text-lg">CA Tanishq Aggarwal</div>
                    <div className="text-white/65 text-sm font-inter">Chartered Accountant · ICAI</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-white/50 text-xs ml-1">5.0</span>
                    </div>
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-2.5 mb-6">
                  {[
                    'Income Tax Filing',
                    'GST Registration & Filing',
                    'Audit & Assurance',
                    'Company Registration',
                  ].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 transition-colors duration-200"
                    >
                      <CheckCircle size={15} className="text-[#D4AF37] flex-shrink-0" />
                      <span className="text-white/90 text-sm font-inter">{s}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-xl p-3 text-center">
                  <span className="text-[#D4AF37] text-sm font-semibold font-inter">✓ Certified · Compliant · Trusted</span>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((b) => (
                <motion.div
                  key={b.text}
                  animate={{ y: b.text.includes('500') ? [-8, 0, -8] : [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${b.pos} ${b.color} rounded-xl px-4 py-2.5 shadow-xl`}
                >
                  <div className="font-poppins font-bold text-sm">{b.text}</div>
                  <div className="text-xs opacity-70 font-inter">{b.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Award badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5, type: 'spring' }}
        className="absolute top-28 right-6 md:right-12 hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-2 rounded-full text-xs font-inter"
      >
        <Award size={14} className="text-[#D4AF37]" />
        ICAI Member
      </motion.div>
    </section>
  )
}
