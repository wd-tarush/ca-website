'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Award, BookOpen, Briefcase, CheckCircle, GraduationCap,
  Linkedin, ArrowRight, Star,
} from 'lucide-react'

// ── Gallery photo card ──────────────────────────────────────────────────────
// Shows a styled placeholder until a real image is added to /public/gallery/
function GalleryPhoto({ src, caption, index }: { src: string; caption: string; index: number }) {
  const [errored, setErrored] = useState(false)

  const gradients = [
    'from-[#1E3A8A]/20 to-[#1a4aad]/20',
    'from-[#D4AF37]/20 to-[#B8960C]/20',
    'from-emerald-500/20 to-emerald-700/20',
    'from-purple-500/20 to-purple-700/20',
    'from-[#1E3A8A]/20 to-[#D4AF37]/20',
    'from-pink-500/20 to-pink-700/20',
  ]
  const gradient = gradients[index % gradients.length]

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer">
      {/* Fallback background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Image */}
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={caption}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Caption overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
        <p className="font-inter text-white text-sm font-semibold">{caption}</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Gallery photos — place your images in /public/gallery/ and update this list.
// Suggested filenames: office.jpg, team.jpg, seminar.jpg, award.jpg, etc.
// ─────────────────────────────────────────────────────────────────────────────
const galleryPhotos = [
  { src: '/gallery/reseach_paper_presentor.jpg', caption: 'Research Paper Presenter',       span: 'md:col-span-2 md:row-span-2' },
  { src: '/gallery/talent_search.jpg',           caption: 'CA Talent Search 2022 – ICAI',   span: '' },
  { src: '/gallery/award.jpg',                   caption: 'Award & Recognition',             span: '' },
  { src: '/gallery/pitch_deck_competion.jpg',    caption: 'Pitch Deck Competition 2023',     span: 'md:col-span-2' },
  { src: '/gallery/talent_search_ca_competion.jpg', caption: 'National Talent Search 2024', span: '' },
]

const qualifications = [
  {
    icon: Award,
    title: 'Chartered Accountant (CA)',
    body: 'Institute of Chartered Accountants of India (ICAI)',
    detail: 'Cleared all three levels — Foundation, Intermediate & Final — of India\'s most rigorous accounting examination.',
    color: 'bg-blue-50 text-[#1E3A8A]',
  },
  {
    icon: GraduationCap,
    title: 'Bachelor of Commerce (B.Com) Honours',
    body: 'Punjab University, Chandigarh',
    detail: 'Strong academic foundation in commerce, economics, and financial management.',
    color: 'bg-yellow-50 text-[#D4AF37]',
  },
  {
    icon: Briefcase,
    title: 'ESG Audit',
    body: 'Forage · May 2025',
    detail: 'Completed virtual job simulation covering Environmental, Social & Governance audit methodology and reporting standards.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: BookOpen,
    title: 'EY Audit',
    body: 'Forage · Nov 2024',
    detail: 'Completed EY\'s virtual audit experience simulation covering audit planning, risk assessment, and financial review procedures.',
    color: 'bg-orange-50 text-orange-700',
  },
]

const expertise = [
  'Direct Taxation (Income Tax Act)',
  'Indirect Taxation (GST, Customs)',
  'Statutory & Tax Audit',
  'Corporate Law (Companies Act)',
  'Financial Statement Analysis',
  'Business Valuation',
  'Startup Financial Advisory',
  'Internal Audit & Controls',
  'Payroll & HR Compliance',
  'FEMA & Foreign Investments',
]

const timeline = [
  {
    year: '2025–Present',
    title: 'Aggarwal & Associates',
    desc: 'Established independent practice in Punjab, serving 50+ clients across diverse industries with taxation, audit, and financial advisory services.',
  },
  {
    year: '2025',
    title: 'CA Final Qualified',
    desc: 'Successfully cleared the CA Final examination, earning the prestigious Chartered Accountant designation from ICAI.',
  },
  {
    year: '2021–2024',
    title: 'Articleship Training',
    desc: 'Completed mandatory articleship with a reputed CA firm in Punjab, gaining hands-on experience in audit, taxation, and compliance.',
  },
  {
    year: '2018–2021',
    title: 'CA Foundation & Intermediate',
    desc: 'Commenced CA journey with ICAI. Cleared Foundation and Intermediate levels while gaining articleship training.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1a4aad] to-[#1E3A8A] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-hero-grid" />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-10 hidden xl:block"
        >
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="190" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="12 6" />
            <circle cx="200" cy="200" r="140" stroke="white"   strokeWidth="1"   strokeDasharray="6 10" />
            <circle cx="200" cy="200" r="90"  stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="8 8" />
          </svg>
        </motion.div>

        {/* Floating circle left */}
        <motion.div
          animate={{ y: [-12, 0, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-16 top-1/3 w-12 h-12 rounded-full border border-[#D4AF37]/30 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-32 bottom-1/3 w-6 h-6 rounded-full bg-[#D4AF37]/20 hidden lg:block"
        />

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="bg-[#D4AF37] text-white px-5 py-1.5 rounded-full text-sm font-semibold font-inter tracking-wide shadow-lg">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
            >
              Meet{' '}
              <span className="text-[#D4AF37]">CA Tanishq</span>
              <br />
              Aggarwal
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-inter text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            >
              ICAI-qualified Chartered Accountant with a passion for financial excellence,
              transparency, and helping businesses grow across Punjab and India.
            </motion.p>

            {/* Quick stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { val: 'ICAI Registered',  icon: '✓' },
                { val: '50+ Clients',     icon: '★' },
                { val: '4+ Years',         icon: '◆' },
                { val: 'Punjab, India',    icon: '📍' },
              ].map((pill) => (
                <span
                  key={pill.val}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-inter backdrop-blur-sm"
                >
                  <span className="text-[#D4AF37] text-xs">{pill.icon}</span>
                  {pill.val}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave — transitions to white next section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" className="w-full block">
            <path d="M0 70H1440V40C1320 15 1100 5 900 20C700 35 500 50 300 35C150 25 60 10 0 5V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Intro section */}
      <section className="pt-12 pb-20 bg-white mt-[-2px]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Portrait side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Profile photo */}
                <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl shadow-2xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/gallery/profile_pic.jpg"
                    alt="CA Tanishq Aggarwal"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Name overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/40 to-transparent px-5 py-5">
                    <div className="text-white font-poppins font-bold text-lg leading-tight">CA Tanishq Aggarwal</div>
                    <div className="mt-2 inline-block px-3 py-1 bg-[#D4AF37]/30 border border-[#D4AF37]/50 rounded-full">
                      <span className="text-[#D4AF37] text-xs font-medium font-inter">ICAI Chartered Accountant</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-6, 0, -6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-6 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-[#D4AF37]" />
                    <div>
                      <div className="font-poppins font-bold text-[#1E3A8A] text-xs">ICAI Member</div>
                      <div className="text-gray-400 text-xs font-inter">Certified CA</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-6 bg-[#1E3A8A] rounded-2xl p-3 shadow-xl"
                >
                  <div className="text-white font-poppins font-bold text-lg">50+</div>
                  <div className="text-white/70 text-xs font-inter">Clients Served</div>
                </motion.div>

                {/* Stars */}
                <div className="absolute bottom-8 -right-6 bg-white rounded-xl p-2.5 shadow-lg border border-gray-100">
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <div className="text-gray-500 text-xs font-inter text-center">5.0 Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title mb-5">
                A Trusted Financial Partner
                <br />
                <span className="text-[#D4AF37]">for Punjab & Beyond</span>
              </h2>

              <div className="space-y-4 font-inter text-gray-600 text-base leading-relaxed mb-8">
                <p>
                  CA Tanishq Aggarwal is a qualified Chartered Accountant from the{' '}
                  <strong className="text-[#1E3A8A]">Institute of Chartered Accountants of India (ICAI)</strong>,
                  operating his practice from Punjab, India. With deep expertise across direct and indirect
                  taxation, audit, and corporate compliance, he has helped 50+ clients simplify their
                  finances and achieve their financial goals.
                </p>
                <p>
                  Founded on the principles of{' '}
                  <strong className="text-[#1E3A8A]">transparency, accuracy, and client-first advisory</strong>,
                  Aggarwal & Associates has grown to serve a diverse clientele — from individual
                  salaried professionals and small businesses to growing startups and established corporates.
                </p>
                <p>
                  His approach goes beyond compliance — he is a proactive advisor who identifies
                  opportunities, mitigates risk, and helps clients make informed financial decisions
                  with confidence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'ICAI Registered',
                  'Direct Tax Expert',
                  'GST Practitioner',
                  'Audit Specialist',
                  'Startup Advisor',
                ].map((tag) => (
                  <span key={tag} className="bg-blue-50 text-[#1E3A8A] border border-blue-100 px-3 py-1.5 rounded-lg text-xs font-semibold font-inter">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href="/contact" className="btn-gold">
                  Book Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="https://www.linkedin.com/in/tanishqaggarwal31/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-tag">Education & Certifications</span>
            <h2 className="section-title">Professional Qualifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {qualifications.map((q, i) => {
              const Icon = q.icon
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${q.color} flex items-center justify-center mb-4`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-poppins font-bold text-gray-800 text-base mb-1">{q.title}</h3>
                  <p className="font-inter font-semibold text-[#1E3A8A] text-sm mb-2">{q.body}</p>
                  <p className="font-inter text-gray-500 text-sm leading-relaxed">{q.detail}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">Areas of Expertise</span>
              <h2 className="section-title mb-5">
                Deep Expertise Across
                <br />
                <span className="text-[#D4AF37]">Finance & Compliance</span>
              </h2>
              <p className="section-subtitle mb-8">
                Years of practice across diverse industries have equipped CA Tanishq
                with comprehensive financial and regulatory expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle size={15} className="text-[#D4AF37] flex-shrink-0" />
                    <span className="font-inter text-gray-700 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">Career Journey</span>
              <h3 className="font-poppins font-bold text-2xl text-[#1E3A8A] mb-8">Professional Timeline</h3>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="space-y-8">
                  {timeline.map((t, i) => (
                    <motion.div
                      key={t.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex gap-6 relative pl-14"
                    >
                      {/* Dot */}
                      <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-white shadow-md ring-2 ring-[#D4AF37]/30" />

                      <div>
                        <div className="font-poppins font-bold text-[#D4AF37] text-xs mb-1">{t.year}</div>
                        <div className="font-poppins font-semibold text-[#1E3A8A] text-sm mb-1">{t.title}</div>
                        <p className="font-inter text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-poppins font-bold text-3xl text-white mb-2">Our Core Values</h2>
            <p className="font-inter text-white/65 text-base">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: 'Integrity',     desc: 'Honest advice, always'          },
              { val: 'Accuracy',      desc: 'Zero-error policy'               },
              { val: 'Transparency',  desc: 'No hidden charges'               },
              { val: 'Commitment',    desc: 'Your success is our goal'        },
            ].map((v, i) => (
              <motion.div
                key={v.val}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center bg-white/10 rounded-2xl p-5 border border-white/10"
              >
                <div className="font-poppins font-bold text-[#D4AF37] text-xl mb-1">{v.val}</div>
                <div className="font-inter text-white/60 text-sm">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag">Gallery</span>
            <h2 className="section-title">Moments &amp; Milestones</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              A glimpse into our work, events, and the journey of Aggarwal &amp; Associates.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-2xl ${photo.span}`}
              >
                <GalleryPhoto src={photo.src} caption={photo.caption} index={i} />
              </motion.div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-10"
          >
            <a
              href="https://www.linkedin.com/in/tanishqaggarwal31/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Linkedin size={18} /> View More on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">Ready to Work Together?</h2>
            <p className="section-subtitle max-w-lg mx-auto mb-8">
              Let CA Tanishq Aggarwal be your trusted financial partner. Schedule a
              free consultation today.
            </p>
            <Link href="/contact" className="btn-gold">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
