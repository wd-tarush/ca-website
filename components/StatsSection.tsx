'use client'

import { motion } from 'framer-motion'
import { Users, FileCheck, Trophy, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Satisfied Clients',
    desc: 'Punjab',
    iconColor: 'text-white',
    iconBg: 'bg-white/15 border border-white/20',
  },
  {
    icon: FileCheck,
    value: '200+',
    label: 'Returns Filed',
    desc: 'ITR & GST combined',
    iconColor: 'text-white',
    iconBg: 'bg-white/15 border border-white/20',
  },
  {
    icon: Trophy,
    value: '3+',
    label: 'Years of Excellence',
    desc: 'ICAI Certified',
    iconColor: 'text-[#D4AF37]',
    iconBg: 'bg-[#D4AF37]/20 border border-[#D4AF37]/30',
  },
  {
    icon: Clock,
    value: '100%',
    label: 'On-Time Compliance',
    desc: 'Zero missed deadlines',
    iconColor: 'text-white',
    iconBg: 'bg-white/15 border border-white/20',
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#1E3A8A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={24} className={s.iconColor} />
                </div>
                <div className="font-poppins font-bold text-4xl text-[#D4AF37] mb-1">{s.value}</div>
                <div className="font-poppins font-semibold text-white text-sm">{s.label}</div>
                <div className="font-inter text-white/50 text-xs mt-1">{s.desc}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
