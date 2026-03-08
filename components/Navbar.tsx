'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About',       href: '/about' },
  { label: 'Services',    href: '/services' },
  { label: 'Calculators', href: '/calculators' },
  { label: 'News',        href: '/news' },
  { label: 'Contact',     href: '/contact' },
]

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : isHome
            ? 'bg-transparent py-5'
            : 'bg-[#1E3A8A] py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* CA INDIA logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/site_icon.png"
            alt="CA India Logo"
            className="h-10 w-auto flex-shrink-0"
          />
          <div>
            <div className={`font-poppins font-extrabold text-base md:text-lg leading-tight tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#1E3A8A]' : 'text-white'}`}>
              TANISHQ AGGARWAL &amp; ASSOCIATES
            </div>
            <div className={`font-inter text-xs tracking-widest transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
              CHARTERED ACCOUNTANTS
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter font-medium text-sm transition-all duration-200 relative group ${
                pathname === link.href
                  ? isScrolled ? 'text-[#1E3A8A]' : 'text-[#D4AF37]'
                  : isScrolled ? 'text-gray-700 hover:text-[#1E3A8A]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+916284757741"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              isScrolled ? 'text-gray-600 hover:text-[#1E3A8A]' : 'text-white/80 hover:text-white'
            }`}
          >
            <Phone size={15} />
            Call Now
          </a>
          <Link
            href="/contact"
            className="bg-[#D4AF37] hover:bg-[#B8960C] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
            isScrolled ? 'text-[#1E3A8A] hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    pathname === link.href
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 bg-[#D4AF37] text-white px-4 py-3 rounded-lg font-semibold text-sm text-center"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
