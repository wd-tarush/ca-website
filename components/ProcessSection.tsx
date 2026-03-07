'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, FileSearch, BarChart3, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Consultation',
    description:
      'Schedule a free consultation call or in-office meeting. Share your financial goals and challenges so we can understand your requirements.',
    color: 'bg-[#1E3A8A]',
    light: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Document Review',
    description:
      'Share relevant documents and financial statements. Our team reviews all records for accuracy, completeness, and compliance.',
    color: 'bg-[#D4AF37]',
    light: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Financial Analysis',
    description:
      'We conduct a thorough analysis of your finances, identifying tax-saving opportunities and compliance requirements specific to your situation.',
    color: 'bg-emerald-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Compliance & Filing',
    description:
      'We handle all filings, submissions, and reporting — keeping you 100% compliant and sending you confirmation at every step.',
    color: 'bg-purple-600',
    light: 'bg-purple-50',
    border: 'border-purple-200',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50" id="process">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Simple 4-Step Process</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            We make financial and compliance services stress-free with a clear, structured approach.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1E3A8A] via-[#D4AF37] to-purple-600 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Circle icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-5 shadow-lg z-10`}
                  >
                    <Icon size={26} className="text-white" />
                    {/* Number tag */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-gray-700">{i + 1}</span>
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div className={`${step.light} ${step.border} border rounded-2xl p-5 w-full group-hover:-translate-y-1 transition-transform duration-300`}>
                    <div className="font-poppins font-bold text-gray-400 text-xs mb-1 tracking-widest">{step.number}</div>
                    <h3 className="font-poppins font-semibold text-[#1E3A8A] text-base mb-2">{step.title}</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="font-inter text-gray-500 mb-5">
            Ready to take the first step towards hassle-free compliance?
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Start with Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
