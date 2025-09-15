'use client'

import { motion } from 'framer-motion'
import { Github, Rocket } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const HowItStarted = () => {
  const { t } = useLanguage()

  return (
    <section id="how-it-started" className="section-padding bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            {t('howItStarted.title')}
          </h2>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
            {t('howItStarted.subtitle')}
          </p>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed mt-4">
            {t('howItStarted.paragraph2')}
          </p>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed mt-4">
            {t('howItStarted.paragraph3')}
          </p>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed mt-4">
            {t('howItStarted.paragraph4')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Project Screenshot - Large 16:10 Image */}
            <motion.div 
              className="relative w-full aspect-[16/10] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden border border-primary-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -6
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/projects/mron-launcher.png" 
                alt="MRON-Launcher"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Story */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-6 h-6 text-accent-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary-800">
                  {t('howItStarted.projectTitle')}
                </h3>
              </div>
              
              <div className="space-y-4 text-primary-600 leading-relaxed">
                <p>
                  {t('howItStarted.projectDescription1')}
                </p>
                
                <p>
                  {t('howItStarted.projectDescription2')}
                </p>
                
                <p>
                  {t('howItStarted.projectDescription3')}
                </p>
                
                <p className="text-primary-500 italic">
                  {t('howItStarted.projectNote')}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['C#', '.NET', 'WPF', 'Desktop Development'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    whileHover={{ 
                      scale: 1.12, 
                      y: -4
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-accent-50/80 via-primary-50/60 to-secondary-50/40 text-primary-700 text-sm font-medium rounded-full border border-wood-200 hover:border-wood-400 transition-all duration-300 cursor-pointer transform-gpu backdrop-blur-sm relative overflow-hidden group hover:shadow-lg"
                  >
                    <span className="relative z-10">{tech}</span>
                  </motion.span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8">
                <motion.a
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3, 
                    rotateZ: 15,
                    boxShadow: "0 20px 40px -10px rgba(236, 72, 153, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  href="https://github.com/Selix764/MRON-Launcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-600 to-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:from-accent-700 hover:to-primary-700 transition-all duration-300 glow"
                >
                  <Github className="w-5 h-5" />
                  {t('howItStarted.viewFirstProject')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItStarted 