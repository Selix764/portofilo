'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Instagram, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Diagonal Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Medium Circle */}
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Small Circle */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"
        ></motion.div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-4 tracking-tight"
            >
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
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
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              {t('hero.subtitle')}
            </motion.h2>
          </motion.div>

          {/* Enhanced Subtitle with Sparkle Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-purple-500" />
              </motion.div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                {t('hero.description')}
              </p>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-blue-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button with New Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 flex justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
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

          {/* Enhanced Social Links with New Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center gap-6"
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
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Github className="w-7 h-7 text-gray-700 relative z-10" />
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
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Instagram className="w-7 h-7 text-gray-700 relative z-10" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.15, 
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:iordachepaul764@gmail.com"
              className="group p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white border border-gray-200/50 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="w-7 h-7 text-gray-700 relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="group text-gray-600 hover:text-gray-800 transition-colors p-3 rounded-full hover:bg-white/70 backdrop-blur-sm border border-gray-200/50"
          whileHover={{ 
            y: 8,
            scale: 1.1,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 