'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services } from './ServicesSection'
import ProcessSection from './ProcessSection'
import ConsultationForm from './ConsultationForm'

const serviceDetails: Record<string, string[]> = {
  'Income Tax Filing': [
    'ITR-1 to ITR-7 for all categories',
    'Salaried individuals & HUF filing',
    'Business income & capital gains',
    'Tax planning and deduction maximization',
    'Advance tax calculations',
    'Scrutiny assessment support',
  ],
  'GST Registration & Filing': [
    'New GST registration (all categories)',
    'Monthly, quarterly & annual returns',
    'GST reconciliation (GSTR-2A/2B)',
    'E-way bill management',
    'GST audit & annual return',
    'GST notice & litigation support',
  ],
  'Company / LLP Registration': [
    'Private Limited Company incorporation',
    'LLP and Partnership registration',
    'OPC (One Person Company)',
    'Section 8 (NGO) registration',
    'ROC filings and compliance',
    'Director KYC and DIN services',
  ],
  'Accounting & Bookkeeping': [
    'Cloud-based accounting setup',
    'Daily/monthly bookkeeping',
    'Bank and ledger reconciliation',
    'MIS reports and dashboards',
    'Payroll processing and compliance',
    'TDS deduction and payment',
  ],
  'Business Compliance': [
    'ROC annual filings',
    'PF & ESI registration and returns',
    'Professional Tax compliance',
    'Shops & Establishment Act',
    'FSSAI licensing support',
    'Trademark and IP advisory',
  ],
  'Audit & Assurance': [
    'Statutory audit (Companies Act)',
    'Tax audit (Sec 44AB)',
    'Internal audit & controls review',
    'Stock and fixed asset verification',
    'Forensic accounting',
    'Special purpose audit reports',
  ],
  'Startup Advisory': [
    'Business structure consulting',
    'DPIIT recognition (Startup India)',
    'Investor-ready financial models',
    'Valuation reports (DCF, CCA)',
    'Due diligence support',
    'ESOP structuring and advisory',
  ],
  'Financial Planning': [
    'Personal and business financial planning',
    'Investment and portfolio advisory',
    'Cash flow and working capital management',
    'Loan structuring assistance',
    'Retirement and estate planning',
    'Insurance needs analysis',
  ],
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1a4aad] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg mb-4">
              Our Services
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
              Comprehensive CA Services
            </h1>
            <p className="font-inter text-white/75 text-lg max-w-2xl mx-auto">
              From taxation and GST to audit, startup advisory, and financial planning —
              expert services for every financial need.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 900 20 720 30C540 40 240 20 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="pt-10 pb-20 bg-white mt-[-2px]">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const details = serviceDetails[svc.title] || []
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                    isEven ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  {/* Text side */}
                  <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h2 className="font-poppins font-bold text-2xl text-[#1E3A8A] mb-3">{svc.title}</h2>
                    <p className="font-inter text-gray-600 text-base leading-relaxed mb-5">{svc.description}</p>
                    <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                      Get Started <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Details side */}
                  <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="bg-white rounded-2xl p-5 border border-gray-200">
                      <p className="font-poppins font-semibold text-gray-700 text-sm mb-4">What&apos;s Included:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {details.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                            <span className="font-inter text-gray-600 text-sm">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <ProcessSection />
      <ConsultationForm />
    </div>
  )
}
