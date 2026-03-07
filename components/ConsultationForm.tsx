'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, User, Phone, Mail, Briefcase, MessageSquare, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_d3oxeqv'
const EMAILJS_TEMPLATE_ID = 'template_33dpihb'
const EMAILJS_PUBLIC_KEY  = 'c5p7tgjPjg7gpnlo0'

const services = [
  'Income Tax Filing',
  'GST Registration & Filing',
  'Company / LLP Registration',
  'Accounting & Bookkeeping',
  'Business Compliance',
  'Audit & Assurance',
  'Startup Advisory',
  'Financial Planning',
  'Other',
]

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const initialData: FormData = {
  name: '', phone: '', email: '', service: '', message: '',
}

export default function ConsultationForm() {
  const [form, setForm]         = useState<FormData>(initialData)
  const [errors, setErrors]     = useState<Partial<FormData>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.phone.trim())   errs.phone   = 'Phone is required'
    else {
      // Strip +91 / 91 prefix, spaces, hyphens, then validate 10-digit Indian mobile
      const digits = form.phone.trim().replace(/[\s\-]/g, '').replace(/^(\+91|91)/, '')
      if (!/^[6-9]\d{9}$/.test(digits))
        errs.phone = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)'
    }
    if (!form.email.trim())   errs.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))
                               errs.email   = 'Enter a valid email address'
    if (!form.service)         errs.service = 'Please select a service'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { 
          from_name:    form.name,
          from_phone:   form.phone,
          from_email:   form.email,
          service_type: form.service,
          message:      form.message || 'No message provided',
        },
        EMAILJS_PUBLIC_KEY
      )
      setIsSuccess(true)
      setForm(initialData)
    } catch {
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const fieldBase =
    'w-full px-4 py-3 rounded-xl border font-inter text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 bg-white'
  const fieldNormal  = `${fieldBase} border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10`
  const fieldError   = `${fieldBase} border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200`

  return (
    <section className="py-24 bg-white" id="booking">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title mb-4">
              Book Your Free
              <br />
              <span className="text-[#D4AF37]">Consultation Today</span>
            </h2>
            <p className="section-subtitle mb-8">
              Tell us your financial needs and we will get back to you within 24 hours
              with a personalized plan.
            </p>

            <div className="space-y-5">
              {[
                { icon: CheckCircle2, text: 'Free 30-minute consultation',         color: 'text-[#1E3A8A]' },
                { icon: CheckCircle2, text: 'No commitment required',              color: 'text-[#1E3A8A]' },
                { icon: CheckCircle2, text: 'Personalized financial advice',       color: 'text-[#1E3A8A]' },
                { icon: CheckCircle2, text: 'Response within 24 business hours',  color: 'text-[#1E3A8A]' },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={18} className={`${color} flex-shrink-0`} />
                  <span className="font-inter text-gray-700 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Contact chips */}
            <div className="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="font-poppins font-semibold text-gray-800 text-sm mb-3">Prefer to reach us directly?</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+916284757741" className="flex items-center gap-3 text-[#1E3A8A] text-sm font-inter hover:text-[#D4AF37] transition-colors">
                  <Phone size={15} /> +91 6284757741
                </a>
                <a href="mailto:ca.tanishqaggarwal@gmail.com" className="flex items-center gap-3 text-[#1E3A8A] text-sm font-inter hover:text-[#D4AF37] transition-colors">
                  <Mail size={15} /> catanishqaggarwal@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/tanishqaggarwal31/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-3 text-[#1E3A8A] text-sm font-inter hover:text-[#D4AF37] transition-colors">
                  <Briefcase size={15} /> LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5"
                    >
                      <CheckCircle2 size={36} className="text-green-500" />
                    </motion.div>
                    <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">
                      Request Received!
                    </h3>
                    <p className="font-inter text-gray-500 text-sm mb-6">
                      Thank you for reaching out. CA Tanishq Aggarwal will contact you
                      within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn-primary text-sm px-5 py-2.5"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                    noValidate
                  >
                    <h3 className="font-poppins font-bold text-xl text-[#1E3A8A] mb-5">
                      Request Consultation
                    </h3>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Full Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={`${errors.name ? fieldError : fieldNormal} pl-9`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-inter">{errors.name}</p>}
                    </div>

                    {/* Phone + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Phone *</label>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel" name="phone" value={form.phone}
                            onChange={(e) => {
                              // Allow only digits, +, spaces, hyphens
                              e.target.value = e.target.value.replace(/[^\d+\s\-]/g, '')
                              handleChange(e)
                            }}
                            placeholder="+91 XXXXX XXXXX"
                            maxLength={15}
                            className={`${errors.phone ? fieldError : fieldNormal} pl-9`}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-inter">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Email *</label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email" name="email" value={form.email} onChange={handleChange}
                            placeholder="your@email.com"
                            className={`${errors.email ? fieldError : fieldNormal} pl-9`}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-inter">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Service Required *</label>
                      <div className="relative">
                        <Briefcase size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
                        <select
                          name="service" value={form.service} onChange={handleChange}
                          className={`${errors.service ? fieldError : fieldNormal} pl-9 appearance-none cursor-pointer`}
                        >
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      {errors.service && <p className="text-red-500 text-xs mt-1 font-inter">{errors.service}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Message (Optional)</label>
                      <div className="relative">
                        <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <textarea
                          name="message" value={form.message} onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your requirements..."
                          className={`${fieldNormal} pl-9 resize-none`}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#163070] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Request Consultation
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400 font-inter">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
