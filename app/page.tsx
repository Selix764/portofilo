'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import HowItStarted from '@/components/HowItStarted'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-20 h-20 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary-600 font-semibold text-lg"
          >
            {t('common.loading')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-primary-400 text-sm"
          >
            Loading your portfolio...
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Section Divider */}
      <div className="section-divider-thick" />
      
      {/* About Section */}
      <section className="section-alt">
        <About />
      </section>
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      {/* Skills Section */}
      <section className="bg-white">
        <Skills />
      </section>
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      {/* How It Started Section */}
      <section className="section-alt">
        <HowItStarted />
      </section>
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      {/* Projects Section */}
      <section className="section-alt-2">
        <Projects />
      </section>
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  )
} 