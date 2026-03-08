'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Linkedin, Clock, MessageCircle } from 'lucide-react'
import ConsultationForm from './ConsultationForm'

const contactCards = [
  {
    icon: MapPin,
    title: 'Office Location',
    lines: ['Punjab, India'],
    sub: 'Serving clients across Punjab and pan India',
    color: 'bg-blue-50 text-[#1E3A8A]',
    link: null,
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    lines: ['+91 6284757741'],
    sub: 'Available Mon–Sat, 9 AM – 6 PM IST',
    color: 'bg-emerald-50 text-emerald-600',
    link: 'tel:+916284757741',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['catanishqaggarwal@gmail.com'],
    sub: 'We respond within 24 business hours',
    color: 'bg-yellow-50 text-[#D4AF37]',
    link: 'mailto:catanishqaggarwal@gmail.com',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    lines: ['CA Tanishq Aggarwal'],
    sub: 'Connect for professional updates',
    color: 'bg-blue-50 text-blue-600',
    link: 'https://www.linkedin.com/in/tanishqaggarwal31/',
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1a4aad] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 bg-hero-grid" />
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg mb-4">
              Contact Us
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4">
              Get In Touch
            </h1>
            <p className="font-inter text-white/75 text-lg max-w-xl mx-auto">
              Book a free consultation or reach out with any financial or compliance questions.
              We&apos;re here to help.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 0 900 20 720 30C540 40 240 20 0 0V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pt-10 pb-16 bg-white mt-[-2px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
            {contactCards.map((c, i) => {
              const Icon = c.icon
              const inner = (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-6 text-center transition-all duration-300 w-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-800 text-sm mb-2">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="font-inter text-[#1E3A8A] font-medium text-sm">{l}</p>
                  ))}
                  <p className="font-inter text-gray-400 text-xs mt-1">{c.sub}</p>
                </motion.div>
              )

              return c.link ? (
                <a
                  key={c.title}
                  href={c.link}
                  target={c.link.startsWith('http') ? '_blank' : undefined}
                  rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.title}>{inner}</div>
              )
            })}
          </div>

          {/* Office hours card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E3A8A] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-poppins font-bold text-white text-base">Office Hours</div>
                <div className="font-inter text-white/65 text-sm">Monday to Saturday: 9:00 AM – 6:00 PM IST</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-[#D4AF37]" />
              </div>
              <div>
                <div className="font-poppins font-bold text-white text-base">Quick Response</div>
                <div className="font-inter text-white/65 text-sm">All queries answered within 24 business hours</div>
              </div>
            </div>
            <a
              href="tel:+916284757741"
              className="bg-[#D4AF37] hover:bg-[#B8960C] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-300 whitespace-nowrap"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Consultation form */}
      <ConsultationForm />

      {/* Map section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="section-title mb-2">Find Us in Ludhiana</h2>
            <p className="section-subtitle">Bawa Colony, Grewal Enclave, Haibowal Kalan, Ludhiana, Punjab 141001</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-md"
          >
            <iframe
              src="https://maps.google.com/maps?q=30.925985,75.805092&z=16&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tanishq Aggarwal & Associates Office Location"
            />
          </motion.div>

          <div className="text-center mt-5">
            <a
              href="https://www.google.com/maps/place/Bawa+Colony,+Grewal+Enclave,+Haibowal+Kalan,+Ludhiana,+Punjab+141001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-inter text-sm font-semibold hover:underline"
            >
              <MapPin size={15} /> Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
