'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const stats = [
    { label: t('about.stats.age'), value: '16' },
    { label: t('about.stats.projects'), value: '10+' },
    { label: t('about.stats.technologies'), value: '8+' },
    { label: t('about.stats.satisfaction'), value: '100%' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full gradient-border">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 flex items-center justify-center">
                    <User className="w-32 h-32 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-600">
                <MapPin className="w-5 h-5" />
                <span>{t('about.location')}</span>
              </div>
              <div className="flex items-center gap-3 text-primary-600">
                <Calendar className="w-5 h-5" />
                <span>{t('about.availability')}</span>
              </div>
              <div className="flex items-center gap-3 text-primary-600">
                <Mail className="w-5 h-5" />
                <span>iordachepaul764@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary-800">
              {t('about.subtitle')}
            </h3>
            
            <p className="text-primary-600 leading-relaxed">
              {t('about.description')}
            </p>
            
            <p className="text-primary-600 leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.12, 
                    rotateY: 5, 
                    rotateZ: 15,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-white/90 via-primary-50/50 to-secondary-50/30 rounded-2xl border border-primary-100/60 hover:border-primary-300/80 transition-all duration-500 cursor-pointer transform-gpu relative overflow-hidden group backdrop-blur-sm"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/10 to-secondary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/30 via-secondary-400/30 to-accent-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl font-bold text-primary-600 mb-1 group-hover:text-primary-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-primary-500 group-hover:text-primary-600 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 