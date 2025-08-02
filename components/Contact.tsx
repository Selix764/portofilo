'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Instagram, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              {t('contact.letsConnect')}
            </h3>
            
            <p className="text-primary-600 leading-relaxed mb-8">
              {t('contact.description')}
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/90 via-primary-50/50 to-secondary-50/30 rounded-2xl border border-primary-100/60 hover:border-primary-300/80 transition-all duration-300 transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
                whileHover={{ 
                  y: -8, 
                  scale: 1.08
                }}
                transition={{ 
                  duration: 0.3
                }}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">Email</h4>
                    <p className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">iordachepaul764@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/90 via-secondary-50/50 to-accent-50/30 rounded-2xl border border-secondary-100/60 hover:border-secondary-300/80 transition-all duration-300 transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
                whileHover={{ 
                  y: -8, 
                  scale: 1.08
                }}
                transition={{ 
                  duration: 0.3
                }}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-secondary-100 to-accent-100 rounded-full"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Phone className="w-6 h-6 text-secondary-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">Phone</h4>
                    <p className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">+40 745 032 132</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/90 via-accent-50/50 to-primary-50/30 rounded-2xl border border-accent-100/60 hover:border-accent-300/80 transition-all duration-300 transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
                whileHover={{ 
                  y: -8, 
                  scale: 1.08
                }}
                transition={{ 
                  duration: 0.3
                }}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">Location</h4>
                    <p className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">Romania</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary-800 mb-4">{t('contact.followMe')}</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5, 
                    rotateZ: 15,
                    boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  href="https://github.com/Selix764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full hover:from-primary-200 hover:to-primary-300 transition-all duration-300 glow"
                >
                  <Github className="w-5 h-5 text-primary-600" />
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5, 
                    rotateZ: 15,
                    boxShadow: "0 15px 30px -5px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  href="https://www.instagram.com/building.dreams.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full hover:from-secondary-200 hover:to-secondary-300 transition-all duration-300 glow"
                >
                  <Instagram className="w-5 h-5 text-secondary-600" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/90 via-primary-50/50 to-secondary-50/30 rounded-2xl p-8 border border-primary-200/60 transition-all duration-300 transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
            whileHover={{ 
              y: -8, 
              scale: 1.08
            }}
            transition={{ 
              duration: 0.3
            }}
          >
            
            <div className="relative z-10 text-center space-y-6">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <MessageCircle className="w-10 h-10 text-primary-600" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">
                {t('contact.readyToStart')}
              </h3>
              
              <p className="text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                {t('contact.readyToStartDescription')}
              </p>
              
              <div className="space-y-4">
                <motion.a
                  whileHover={{ 
                    scale: 1.08, 
                    rotateZ: 12,
                    boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  href="mailto:iordachepaul764@gmail.com"
                  className="block w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 glow"
                >
                  {t('contact.sendEmail')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 