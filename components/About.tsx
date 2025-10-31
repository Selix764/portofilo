'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Star, Award, Code, Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const stats = [
    { label: t('about.stats.age'), value: new Date().getFullYear() - 2009 as number, icon: User },
    { label: t('about.stats.projects'), value: '10+' as string, icon: Code },
    { label: t('about.stats.technologies'), value: '8+' as string, icon: Award },
    { label: t('about.stats.satisfaction'), value: '+90%' as string, icon: Heart },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Enhanced Profile Image */}
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.05,
                y: -8
              }}
              transition={{ duration: 0.3 }}
            >

              <div className="w-80 h-80 mx-auto rounded-full gradient-border hover:shadow-2xl transition-all duration-300 relative">
                <div className="w-full h-full rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 flex items-center justify-center">
                    <img src="projects/portofolio_photo.jpg" className="w-full h-full object-cover rounded-full" />
                    
                    {/* Floating elements around the profile */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute top-4 right-4"
                    >
                      <Star className="w-6 h-6 text-yellow-400/60" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        y: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-4 left-4"
                    >
                      <Award className="w-6 h-6 text-purple-400/60" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Personal Info */}
            <div className="space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-100/50">
              <div className="flex items-center gap-4 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                <div className="p-2 bg-primary-100 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">{t('about.location')}</span>
              </div>
              <div className="flex items-center gap-4 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                <div className="p-2 bg-secondary-100 rounded-full">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="font-medium">{t('about.availability')}</span>
              </div>
              <div className="flex items-center gap-4 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                <div className="p-2 bg-accent-100 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">iordachepaul764@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-800">
                {t('about.subtitle')}
              </h3>
              
              <div className="space-y-4">
                <p className="text-base text-primary-600 leading-relaxed">
                  {t('about.description')}
                </p>
                
                <p className="text-base text-primary-600 leading-relaxed">
                  {t('about.description2')}
                </p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.08
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gradient-to-br from-white/90 via-primary-50/50 to-secondary-50/30 rounded-2xl border border-wood-200 hover:border-wood-400 transition-all duration-300 cursor-pointer transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
                >
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