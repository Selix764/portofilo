'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.howItStarted'), href: '#how-it-started' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-primary-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              filter: "brightness(1.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text cursor-pointer px-4 py-2 rounded-lg hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
            onClick={() => scrollToSection('#home')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-600 hover:text-primary-800 font-semibold transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm"
              >
                {item.name}
                {/* Animated underline effect */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher - Right Side */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary-600" />
            ) : (
              <Menu className="h-6 w-6 text-primary-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-primary-100"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-primary-100">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header 