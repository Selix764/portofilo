'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Project {
  id: string
  name: string
  description: string
  githubUrl: string
  liveUrl?: string
  image: string
  technologies: string[]
}

const Projects = () => {
  const { t } = useLanguage()
  
  const projects: Project[] = [
    {
      id: 'pddle',
      name: 'Pddle',
      description: 'Smart paddleboard rental platform with instant locker access, QR code unlocking, and premium SUP equipment. Features real-time availability and seamless booking experience.',
      githubUrl: 'https://github.com/Selix764/pddle',
      liveUrl: 'https://pddle.vercel.app/',
      image: '/projects/Pddle.png',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'QR Integration']
    },
    {
      id: 'phm',
      name: 'Perfect Home Media',
      description: 'Professional media agency website showcasing production services, event organization, and brand development. Features modern design with comprehensive service portfolio.',
      githubUrl: 'https://github.com/Selix764/phm',
      liveUrl: 'https://perfecthomemedia-ro.vercel.app/',
      image: '/projects/PHM.png',
      technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Media Production']
    },
    {
      id: 'copt-de-fericire',
      name: 'Copt de Fericire',
      description: 'Traditional Romanian restaurant website featuring authentic recipes, online menu, and reservation system. Showcases local cuisine with modern web design.',
      githubUrl: 'https://github.com/Selix764/Copt-de-fericire',
      liveUrl: 'https://copt-de-fericire.vercel.app/',
      image: '/projects/Copt-de-fericire.png',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Restaurant CMS']
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              {/* Project Screenshot - Large 16:9 Image */}
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.03,
                  y: -6
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="block relative w-full aspect-[16/10] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden border border-primary-200 mb-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary-300"
              >
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-primary-700 text-sm font-medium">
                      {t('projects.clickToVisit')}
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Project Info Card */}
              <motion.div 
                className="bg-gradient-to-br from-white/90 via-primary-50/30 to-secondary-50/20 rounded-2xl p-6 shadow-lg border border-primary-100 max-w-xl mx-auto hover:border-primary-300 transition-all duration-300 transform-gpu relative overflow-hidden group backdrop-blur-sm hover:shadow-xl"
                whileHover={{ 
                  y: -12, 
                  scale: 1.05
                }}
                transition={{ 
                  duration: 0.3
                }}
              >
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary-800 mb-4 group-hover:text-primary-900 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed text-sm group-hover:text-primary-700 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        whileHover={{ 
                          scale: 1.12, 
                          y: -3
                        }}
                        transition={{ 
                          duration: 0.3,
                          delay: techIndex * 0.05
                        }}
                        className="px-2 py-1 bg-gradient-to-r from-primary-50/80 to-secondary-50/80 text-primary-700 text-xs font-medium rounded-full border border-primary-200/60 max-w-full truncate hover:border-primary-400/80 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
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
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 text-center flex items-center justify-center gap-1 glow text-xs min-w-0"
                    >
                      <Github className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{t('projects.viewCode')}</span>
                    </motion.a>
                    
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ 
                          scale: 1.08, 
                          rotateZ: 12,
                          boxShadow: "0 15px 30px -5px rgba(236, 72, 153, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ 
                          duration: 0.3,
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-accent-500 text-accent-600 py-2 px-3 rounded-lg font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-1 text-xs min-w-0"
                      >
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{t('projects.liveDemo')}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Selix764"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 glow"
          >
            <Github className="w-5 h-5" />
            {t('projects.viewAll')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 