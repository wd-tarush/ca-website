'use client'

import { motion } from 'framer-motion'
import { Award, Lock, Users, Lightbulb, Clock } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'ICAI Qualified Expert',
    description:
      'Holder of the prestigious Chartered Accountant designation from ICAI — India\'s premier accounting body — ensuring the highest professional standards.',
    color: 'text-[#1E3A8A]',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Lock,
    title: 'Transparent & Ethical Advisory',
    description:
      'We operate with complete financial transparency and ethical integrity, keeping you fully informed at every step of your financial journey.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Users,
    title: 'Personalized Financial Solutions',
    description:
      'Every client is unique. We craft customized strategies for individuals, small businesses, corporates, and startups based on their specific needs.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Lightbulb,
    title: 'Proactive Tax Planning',
    description:
      'We don\'t just file returns — we plan ahead. Our proactive approach identifies tax-saving opportunities throughout the year, not just at year-end.',
    color: 'text-[#D4AF37]',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Clock,
    title: 'Timely & Reliable Compliance',
    description:
      'Zero-deadline-miss policy. We ensure all filings, returns, and statutory requirements are completed accurately and well before due dates.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title mb-4">
              Your Financial Success is
              <br />
              <span className="text-[#D4AF37]">Our Priority</span>
            </h2>
            <p className="section-subtitle mb-10">
              With deep expertise, ethical practices, and a client-first approach,
              we have built long-lasting relationships with hundreds of satisfied clients
              across Punjab and India.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${f.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={22} className={f.color} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-gray-800 text-base mb-1">
                        {f.title}
                      </h3>
                      <p className="font-inter text-gray-500 text-sm leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right – visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* Background card */}
            <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#1a4aad] rounded-3xl p-8 text-white">
              <div className="mb-8">
                <div className="font-poppins font-bold text-2xl mb-2">Our Commitment</div>
                <p className="text-white/70 text-sm font-inter">
                  We take pride in delivering accurate, compliant, and value-driven financial services.
                </p>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { val: '50+', lbl: 'Happy Clients' },
                  { val: '3+',   lbl: 'Years Practice' },
                  { val: '200+',lbl: 'Returns Filed' },
                  { val: '0',    lbl: 'Missed Deadlines' },
                ].map((m) => (
                  <div key={m.lbl} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                    <div className="font-poppins font-bold text-2xl text-[#D4AF37]">{m.val}</div>
                    <div className="font-inter text-white/65 text-xs mt-1">{m.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Trust logos */}
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 border border-white/10">
                <Award size={24} className="text-[#D4AF37] flex-shrink-0" />
                <div>
                  <div className="font-poppins font-semibold text-sm">ICAI Member</div>
                  <div className="text-white/60 text-xs font-inter">Institute of Chartered Accountants of India</div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [-8, 0, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                  <Users size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-poppins font-bold text-[#1E3A8A] text-sm">Trusted by Clients</div>
                  <div className="text-gray-400 text-xs font-inter">across Punjab & India</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
