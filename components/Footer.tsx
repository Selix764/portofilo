'use client'

import { motion } from 'framer-motion'
import { Github, Instagram, Mail, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold gradient-text">Portfolio</h3>
              <p className="text-primary-200 leading-relaxed">
                {t('footer.description')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <motion.a
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      href={`#${item}`}
                      className="text-primary-200 hover:text-white transition-colors duration-300 block py-1"
                    >
                      {t(`nav.${item}`)}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">{t('footer.followMe')}</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Selix764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-800/50 rounded-full hover:bg-primary-700/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 30px -5px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/building.dreams.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary-800/50 rounded-full hover:bg-secondary-700/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 30px -5px rgba(234, 179, 8, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:iordachepaul764@gmail.com"
                  className="p-3 bg-accent-800/50 rounded-full hover:bg-accent-700/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-primary-800 mt-8 pt-8 text-center"
          >
            <p className="text-primary-200">
              © {currentYear} Portfolio. {t('footer.madeWith')} <Heart className="inline w-4 h-4 text-red-500" /> {t('footer.by')} Paul Iordache
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 