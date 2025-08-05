'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, X } from 'lucide-react'
import { useState } from 'react'

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded(false)
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:iordachepaul764@gmail.com'
    setIsExpanded(false)
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+40745032132'
    setIsExpanded(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="mb-4 space-y-3"
        >
          {/* Contact Form CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            className="flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tap-target"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Start Project</span>
          </motion.button>

          {/* Email CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="flex items-center gap-3 bg-white text-primary-600 px-4 py-3 rounded-full shadow-lg hover:shadow-xl border-2 border-primary-200 hover:border-primary-300 transition-all duration-300 tap-target"
          >
            <Mail className="w-5 h-5" />
            <span className="font-semibold">Email Me</span>
          </motion.button>

          {/* Phone CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: "0 15px 30px -5px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePhoneClick}
            className="flex items-center gap-3 bg-white text-secondary-600 px-4 py-3 rounded-full shadow-lg hover:shadow-xl border-2 border-secondary-200 hover:border-secondary-300 transition-all duration-300 tap-target"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Call Me</span>
          </motion.button>
        </motion.div>
      )}

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          y: -3,
          boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center tap-target"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default FloatingCTA 