'use client'

import { easeIn, easeInOut, motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Instagram, Sparkles, Rocket, Star, InfinityIcon } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 scroll-mt-24">
      {/* Modern Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-50 via-base-100 to-base-200"></div>
      
      {/* Enhanced Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 155, 142, 0.12) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Diagonal Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(41, 171, 135, 0.1) 50%, transparent 60%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          animate={{ 
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Medium Circle */}
        <motion.div
          animate={{ 
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Small Circle */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"
        ></motion.div>

        {/* Floating Stars */}
        <motion.div
          animate={{ 
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4"
        >
          <Star className="w-6 h-6 text-yellow-400/60" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 left-1/4"
        >
          <Star className="w-4 h-4 text-purple-400/60" />
        </motion.div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Main Heading with Better Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            >
              <motion.span
                className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.02,
                  filter: "brightness(1.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {t('hero.title')}
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1.0,
                y: 0
              }}
              transition={{
                duration: 0.8, 
                delay: 0.25
              }}
              className="text-4xl md:text-6xl font-bold text-wood-900 mb-6"
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.3 }
              }}
            >
              <div className="gradient-text">
                {t('hero.subtitle')}
              </div>
            </motion.h2>
          </motion.div>

          {/* Enhanced Subtitle with Better Visual Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.80 }}
            animate={{ opacity: 1, y: 0, scale: 1.0}}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mb-12"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-secondary-500" />
              </motion.div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                {t('hero.description')}
              </p>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-accent-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons with Clearer Action Verbs */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.80}}
            animate={{ opacity: 1, y: 0, scale: 1.0 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            {/* Primary CTA - "Start Your Project" */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative z-10"
                animate={{}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
              
              <span className="relative z-10">Start Your Project</span>
            </motion.button>

            {/* Secondary CTA - "Learn More" */}
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group relative bg-white text-primary-600 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-primary-200 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl overflow-hidden tap-target"
            >
              <span className="relative z-10">{t('hero.learnMore')}</span>
              
              <motion.div
                className="relative z-10"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links with Better Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.80}}
            animate={{ opacity: 1, y: 0, scale: 1.0}}
            transition={{ duration: 0.8, delay: 1.50 }}
            className="flex justify-center items-center gap-8"
          >
            <motion.a
              whileHover={{ 
                scale: 1.15, 
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Selix764"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden tap-target"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%"}}
                whileHover={{ x: "0%"}}
                transition={{ duration: 0.3 }}
              />
              <Github className="w-8 h-8 text-gray-700 relative z-10" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.15, 
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/building.dreams.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden tap-target"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Instagram className="w-8 h-8 text-gray-700 relative z-10" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.15, 
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:iordachepaul764@gmail.com"
              className="group p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden tap-target"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="w-8 h-8 text-gray-700 relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 , scale: 0.80}}
        animate={{ opacity: 1 , scale: 1.0}}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="group text-gray-600 hover:text-gray-800 transition-colors p-4 rounded-full hover:bg-white/70 backdrop-blur-sm border border-gray-200/50 tap-target"
          whileHover={{ 
            y: 8,
            scale: 1.1,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-7 h-7" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 