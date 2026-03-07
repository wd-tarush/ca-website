'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajiv Sharma',
    role: 'Small Business Owner',
    company: 'Sharma Textiles, Ludhiana',
    rating: 5,
    text:
      'CA Tanishq has been a game-changer for our business. He handled our GST filing and income tax with utmost professionalism. We\'ve saved significantly on taxes with his proactive planning. Highly recommend to every business owner in Punjab!',
    initials: 'RS',
    color: 'bg-blue-600',
  },
  {
    name: 'Priya Mehta',
    role: 'Co-founder & CEO',
    company: 'TechNova Solutions (Startup)',
    rating: 5,
    text:
      'As a startup founder, I needed someone who understands the financial complexities of a growing company. CA Tanishq helped us with company incorporation, DPIIT registration, and investor-ready financial statements. Absolutely outstanding service!',
    initials: 'PM',
    color: 'bg-[#D4AF37]',
  },
  {
    name: 'Arjun Bhatia',
    role: 'Senior Software Engineer',
    company: 'Salaried Professional, Chandigarh',
    rating: 5,
    text:
      'I had been overpaying taxes for years without knowing it. CA Tanishq reviewed my finances and identified deductions I was missing. My tax refund this year was 3x what I expected. He\'s knowledgeable, prompt, and very easy to work with.',
    initials: 'AB',
    color: 'bg-emerald-600',
  },
  {
    name: 'Gurpreet Kaur',
    role: 'Director',
    company: 'GK Agro Industries, Amritsar',
    rating: 5,
    text:
      'Our family business had complex accounting needs across multiple entities. CA Tanishq streamlined our entire accounting system, ensured GST compliance, and completed our audit on time. Truly a trusted financial partner!',
    initials: 'GK',
    color: 'bg-purple-600',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Restaurant Owner',
    company: 'Malhotra\'s Kitchen, Jalandhar',
    rating: 5,
    text:
      'Running a restaurant with payroll, GST, and compliance used to be a nightmare. CA Tanishq handles everything seamlessly. His team is proactive, responsive, and always available when needed. Best CA in Punjab, period.',
    initials: 'VM',
    color: 'bg-red-500',
  },
  {
    name: 'Neha Bansal',
    role: 'Chartered Accountant (Client)',
    company: 'Bansal & Sons Jewellers, Patiala',
    rating: 5,
    text:
      'Even as a finance professional myself, I trust CA Tanishq for our family business\'s annual compliance and audit. His eye for detail and command over tax laws is impressive. A true professional who goes above and beyond.',
    initials: 'NB',
    color: 'bg-pink-500',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">Trusted by Businesses Across Punjab</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Real experiences from real clients. See why hundreds of businesses and
            professionals rely on us for their financial needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#D4AF37]/40 mb-4" />

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="font-inter text-gray-600 text-sm leading-relaxed mt-3 mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-poppins font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-gray-800 text-sm">{t.name}</div>
                  <div className="font-inter text-gray-400 text-xs">{t.role}</div>
                  <div className="font-inter text-[#1E3A8A] text-xs">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-poppins font-bold text-4xl text-[#1E3A8A]">5.0</span>
            <div>
              <StarRating count={5} />
              <p className="text-gray-400 text-sm font-inter mt-1">Based on 100+ reviews</p>
            </div>
          </div>
          <p className="text-gray-600 font-inter text-sm">
            Consistently rated 5 stars by clients across Punjab and India.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
