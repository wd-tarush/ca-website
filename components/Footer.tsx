import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, ArrowRight } from 'lucide-react'

const services = [
  'Income Tax Filing',
  'GST Registration & Filing',
  'Company / LLP Registration',
  'Accounting & Bookkeeping',
  'Audit & Assurance',
  'Startup Advisory',
]

const quickLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2456] text-white">
      {/* CTA band */}
      <div className="bg-[#D4AF37]">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-poppins font-bold text-xl text-white">Ready to simplify your finances?</h3>
            <p className="text-white/80 font-inter text-sm mt-1">
              Book a free consultation with Tanishq Aggarwal & Associates today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#163070] transition-all duration-300 shadow-md whitespace-nowrap"
          >
            Get Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-poppins">CA</span>
            </div>
            <div>
              <div className="font-poppins font-bold text-sm leading-tight">Aggarwal</div>
              <div className="text-white/60 text-xs">& Associates</div>
            </div>
          </div>
          <p className="text-white/60 font-inter text-sm leading-relaxed mb-5">
            ICAI-registered Chartered Accountant offering professional taxation, audit, and financial advisory services across Punjab and India.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/tanishqaggarwal31/', label: 'LinkedIn' },
              { Icon: Facebook, href: '#',  label: 'Facebook' },
              { Icon: Twitter,  href: '#',  label: 'Twitter' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-[#D4AF37] hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-poppins font-semibold text-white mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/60 hover:text-[#D4AF37] text-sm font-inter transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-poppins font-semibold text-white mb-5">Our Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-white/60 hover:text-[#D4AF37] text-sm font-inter transition-colors duration-200 flex items-center gap-2 group">
                  <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-poppins font-semibold text-white mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm font-inter">
              <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <span>Punjab, India</span>
            </li>
            <li>
              <a href="tel:+916284757741" className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] text-sm font-inter transition-colors duration-200">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                +91 6284757741
              </a>
            </li>
            <li>
              <a href="mailto:ca.tanishqaggarwal@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] text-sm font-inter transition-colors duration-200">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                catanishqaggarwal@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/70 text-xs font-inter">
              <span className="text-[#D4AF37] font-semibold">Office Hours:</span><br />
              Mon – Sat: 9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs font-inter">
          <p>© {year} Tanishq Aggarwal & Associates. All rights reserved.</p>
          <p>ICAI Member · Registered Chartered Accountant · Punjab, India</p>
        </div>
      </div>
    </footer>
  )
}
