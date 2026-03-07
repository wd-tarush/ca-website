'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is the deadline for filing income tax returns in India?',
    a: 'For individuals and HUFs not requiring audit, the ITR filing deadline is typically July 31st of each assessment year. For businesses requiring audit, the deadline is usually October 31st. However, the government may extend these dates — we keep track of all such updates for our clients.',
  },
  {
    q: 'Who needs to register for GST in India?',
    a: 'GST registration is mandatory for businesses with an aggregate annual turnover exceeding ₹40 lakhs (₹20 lakhs for service providers). Additionally, inter-state suppliers, e-commerce sellers, and certain other categories must register regardless of turnover. We can assess your specific situation and guide you accordingly.',
  },
  {
    q: 'What are the documents required for company registration?',
    a: 'For Private Limited Company registration, you need: PAN and Aadhaar of all directors, passport-size photos, address proof, proof of registered office address, and a utility bill for the office. For foreign nationals, a passport and apostilled documents are required. We handle the entire process end-to-end.',
  },
  {
    q: 'What is the difference between a tax audit and a statutory audit?',
    a: 'A statutory audit (under the Companies Act) is mandatory for all companies regardless of turnover, ensuring financial statements are fair and accurate. A tax audit (under Section 44AB of Income Tax Act) is required when turnover exceeds specified limits (₹1 crore for business / ₹50 lakhs for professions), ensuring tax compliance. Both are critical for financial credibility.',
  },
  {
    q: 'How long does it take to receive an income tax refund?',
    a: 'After filing your ITR and completing e-verification, refunds are typically processed within 20-45 working days for straightforward cases. Refunds are credited directly to your bank account. Delays may occur if returns are picked for scrutiny. We ensure correct filing to expedite this process.',
  },
  {
    q: 'Can you help with GST notices and scrutiny?',
    a: 'Absolutely. We provide complete support for GST department notices, scrutiny assessments, and appeals before GST authorities and tribunals. Our team prepares comprehensive replies, compiles required documents, and represents you throughout the proceedings.',
  },
  {
    q: 'What are the benefits of registering a company vs. operating as a sole proprietor?',
    a: 'A registered company (Pvt. Ltd. or LLP) offers limited liability protection, easier access to funding, greater credibility with clients/banks, tax advantages, and perpetual succession. While it involves more compliance, the benefits significantly outweigh the costs for growing businesses. We help you choose the right structure.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We offer transparent, value-based pricing — no hidden fees. Our fees depend on the complexity and scope of the service. We offer fixed-fee packages for common services (ITR filing, GST returns) and customized quotes for complex engagements. Book a free consultation to discuss your requirements and get a clear quote.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Answers to the most common questions about taxation, GST, company registration,
            and our services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? 'border-[#1E3A8A] shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-poppins font-semibold text-gray-800 text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === i ? 'bg-[#1E3A8A] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="w-8 h-0.5 bg-[#D4AF37] mb-3" />
                      <p className="font-inter text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-inter text-gray-500 mb-5">
            Didn&apos;t find your answer? We&apos;re just a message away.
          </p>
          <a href="/contact" className="btn-primary">
            Ask Your Question
          </a>
        </motion.div>
      </div>
    </section>
  )
}
