'use client'

import { motion } from 'framer-motion'
import { Github, Instagram, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-800 via-secondary-800 to-accent-800 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-primary-200">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col space-y-2">
              <motion.a
                href="#home"
                whileHover={{ x: 5 }}
                className="text-primary-200 hover:text-white transition-all duration-200 cursor-pointer relative group"
              >
                Home
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                className="text-primary-200 hover:text-white transition-all duration-200 cursor-pointer relative group"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="text-primary-200 hover:text-white transition-all duration-200 cursor-pointer relative group"
              >
                Projects
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="text-primary-200 hover:text-white transition-all duration-200 cursor-pointer relative group"
              >
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Selix764"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-primary-700 to-primary-600 rounded-full hover:from-primary-600 hover:to-primary-500 transition-all duration-200 glow"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/building.dreams.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-full hover:from-secondary-600 hover:to-secondary-500 transition-all duration-200 glow"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-700 mt-8 pt-8 text-center"
        >
          <p className="text-primary-200">
            © {currentYear} Portfolio. {t('footer.madeWith')}{' '}
            <Heart className="inline w-4 h-4 text-red-500" />{' '}
            {t('footer.using')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 