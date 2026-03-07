'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Receipt, FileText } from 'lucide-react'
import IncomeTaxCalc from './IncomeTaxCalc'
import GSTCalc       from './GSTCalc'
import ITRCalc        from './ITRCalc'

const tabs = [
  {
    id:    'income',
    label: 'Income Tax',
    desc:  'Old & New regime comparison',
    icon:  Calculator,
  },
  {
    id:    'gst',
    label: 'GST Late Fee',
    desc:  'GSTR-1 / GSTR-3B late filing',
    icon:  Receipt,
  },
  {
    id:    'itr',
    label: 'ITR Refund',
    desc:  'Estimate your refund or dues',
    icon:  FileText,
  },
]

export default function CalculatorsPage() {
  const [active, setActive] = useState('income')

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1a4aad] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg mb-4 font-inter">
              Free Tax Tools
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
              Tax Calculators
            </h1>
            <p className="font-inter text-white/75 text-lg max-w-xl mx-auto">
              Free, accurate tools for Indian taxpayers — Income Tax, GST Late Fee,
              and ITR Refund estimation in seconds.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 900 20 720 30C540 40 240 20 0 0V60Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ── Tabs + Content ── */}
      <section className="pt-8 pb-20 bg-gray-50 mt-[-2px]">
        <div className="container mx-auto px-4">

          {/* Tab switcher */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
            {tabs.map((tab) => {
              const Icon     = tab.icon
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-inter font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white shadow-lg shadow-[#1E3A8A]/20'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <Icon size={18} className={isActive ? 'text-white' : 'text-[#1E3A8A]'} />
                  </div>
                  <div className="text-left">
                    <div>{tab.label}</div>
                    <div className={`text-xs font-normal mt-0.5 ${isActive ? 'text-white/65' : 'text-gray-400'}`}>
                      {tab.desc}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Calculator content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {active === 'income' && <IncomeTaxCalc />}
            {active === 'gst'    && <GSTCalc />}
            {active === 'itr'    && <ITRCalc />}
          </motion.div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 font-inter mt-10 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: These calculators provide estimates for general guidance only. Actual tax liability
            may vary based on individual circumstances. Consult Aggarwal &amp; Associates for a certified assessment.
          </p>
        </div>
      </section>
    </div>
  )
}
