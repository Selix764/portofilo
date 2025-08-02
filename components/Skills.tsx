'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Globe, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      icon: <Code className="w-8 h-8" />,
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']
    },
    {
      title: t('skills.categories.backend'),
      icon: <Database className="w-8 h-8" />,
      skills: ['API Integration', 'Google Drive API', 'Calendar API', 'Serverless Functions', 'REST APIs']
    },
    {
      title: t('skills.categories.tools'),
      icon: <Cloud className="w-8 h-8" />,
      skills: ['GitHub', 'Vercel', 'Cursor', 'ChatGPT', 'Claude', 'VS Code']
    },
    {
      title: t('skills.categories.design'),
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['Responsive Design', 'Modern UI/UX', 'Component Design', 'Mobile-First', 'Performance']
    },
    {
      title: t('skills.categories.business'),
      icon: <Globe className="w-8 h-8" />,
      skills: ['Client Communication', 'Project Management', 'Freelance Pitching', 'Pricing Strategy', 'Lead Generation']
    },
    {
      title: t('skills.categories.payments'),
      icon: <Zap className="w-8 h-8" />,
      skills: ['ING Banking', 'Crypto (USDT/BTC)', 'Freelance Payments', 'Financial Planning']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                y: -10, 
                scale: 1.1
              }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/20 rounded-2xl p-6 border border-primary-100/50 hover:border-primary-300/80 transition-all duration-300 transform-gpu relative overflow-hidden group hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="text-primary-600"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -4
                      }}
                      transition={{ 
                        duration: 0.3,
                        delay: skillIndex * 0.05
                      }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-50/80 to-secondary-50/80 text-primary-700 text-sm font-medium rounded-full border border-primary-200/60 hover:border-primary-400/80 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 