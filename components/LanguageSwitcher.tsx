'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm border border-primary-200">
        <div className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-600 text-white shadow-sm">
          RO
        </div>
        <div className="px-3 py-1.5 rounded-full text-sm font-medium text-primary-600">
          EN
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm border border-primary-200"
    >
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          rotate: 2
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('ro')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'ro'
            ? 'bg-primary-600 text-white shadow-sm'
            : 'text-primary-600 hover:text-primary-800 hover:bg-primary-50'
        }`}
      >
        RO
      </motion.button>
      
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          rotate: -2
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary-600 text-white shadow-sm'
            : 'text-primary-600 hover:text-primary-800 hover:bg-primary-50'
        }`}
      >
        EN
      </motion.button>
    </motion.div>
  )
}

export default LanguageSwitcher 