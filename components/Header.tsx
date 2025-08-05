'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'how-it-started', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      // Restore body scroll
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.howItStarted'), href: '#how-it-started', id: 'how-it-started' },
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text cursor-pointer px-4 py-2 rounded-xl hover:bg-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
            onClick={() => scrollToSection('#home')}
          >
            Portfolio
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-primary-600 bg-primary-100/80 shadow-md'
                    : 'text-primary-600 hover:text-primary-800 hover:bg-white/60'
                }`}
              >
                {item.name}
                {/* Enhanced underline effect */}
                <div className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ease-in-out ${
                  activeSection === item.id
                    ? 'w-full bg-primary-600'
                    : 'w-0 bg-primary-600 group-hover:w-full'
                }`}></div>
                
                {/* Active indicator dot */}
                {activeSection === item.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary-600 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-3 rounded-xl hover:bg-white/60 backdrop-blur-sm transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary-600" />
            ) : (
              <Menu className="h-6 w-6 text-primary-600" />
            )}
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden py-6 border-t border-primary-100/50 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    x: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-between ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-100/80 shadow-sm'
                      : 'text-primary-600 hover:text-primary-800 hover:bg-primary-50/50'
                  }`}
                >
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-primary-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-primary-100/50 mt-4">
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