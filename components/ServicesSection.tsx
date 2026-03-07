'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FileText, Receipt, Building2, BookOpen,
  Shield, Search, Rocket, TrendingUp, ArrowRight,
} from 'lucide-react'

export const services = [
  {
    icon: FileText,
    title: 'Income Tax Filing',
    description:
      'Accurate and timely ITR filing for individuals, salaried professionals, HUFs, and businesses. Maximize deductions, minimize tax liability.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Receipt,
    title: 'GST Registration & Filing',
    description:
      'End-to-end GST services — registration, monthly/quarterly returns, annual reconciliation, and GST audit support.',
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    icon: Building2,
    title: 'Company / LLP Registration',
    description:
      'Complete incorporation services for Private Limited Companies, LLPs, OPCs, and partnership firms with MCA compliance.',
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    description:
      'Systematic financial record-keeping, bank reconciliation, MIS reporting, and payroll processing for growing businesses.',
    color: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    icon: Shield,
    title: 'Business Compliance',
    description:
      'ROC filings, annual compliance, PF, ESI, PT registration, and all statutory obligations handled end-to-end.',
    color: 'from-red-500 to-red-700',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: Search,
    title: 'Audit & Assurance',
    description:
      'Statutory audits, tax audits, internal audits, and management audits performed with independence and professional rigor.',
    color: 'from-[#1E3A8A] to-[#1a4aad]',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Rocket,
    title: 'Startup Advisory',
    description:
      'From ideation to funding — business structuring, DPIIT registration, startup India benefits, and investor-ready financials.',
    color: 'from-pink-500 to-pink-700',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    description:
      'Comprehensive financial planning, investment advisory, cash flow management, and wealth creation strategies.',
    color: 'from-[#D4AF37] to-[#B8960C]',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Comprehensive CA Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From taxation to compliance, audit to startup advisory — we provide
            360° financial services tailored for your success.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(30,58,138,0.12)' }}
                className={`group bg-white rounded-2xl p-6 border ${svc.border} cursor-pointer transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-poppins font-semibold text-[#1E3A8A] text-base mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {svc.description}
                </p>

                <div className="mt-5 flex items-center gap-1 text-[#D4AF37] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-gold">
            Book a Free Consultation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
