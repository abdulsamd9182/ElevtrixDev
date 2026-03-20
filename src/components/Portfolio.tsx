'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowUpRight, Sparkles, Calendar, Briefcase, Zap, Eye } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'


const projects = [
  {
    id: 1,
    title: 'noTrainer',
    category: 'Fitness App',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop',
    description: 'A fitness web application that combines health calculators, interactive workout wizard, focus games, and a Kanban board.',
    year: '2025',
    client: 'Web Application',
    featured: true,
    color: 'from-blue-600 to-cyan-600',
    href: '/portfolio/notrainer'
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    description: 'Real-time data visualization platform with predictive insights',
    year: '2024',
    client: 'DataViz Corp',
    featured: false,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop',
    description: 'Cross-platform app with workout planning and progress tracking',
    year: '2023',
    client: 'FitLife',
    featured: true,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Banking Interface',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
    description: 'Intuitive design for a neobank with seamless user flows',
    year: '2024',
    client: 'Nexus Bank',
    featured: false,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 5,
    title: 'Eco Marketplace',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'Sustainable goods marketplace with carbon footprint tracker',
    year: '2023',
    client: 'GreenCart',
    featured: true,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 6,
    title: 'Streaming Service Redesign',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
    description: 'Modern interface for a video streaming platform',
    year: '2024',
    client: 'StreamFlix',
    featured: false,
    color: 'from-indigo-500 to-blue-500'
  }
]

// Progress indicator component
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects

  // Advanced scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transform scroll progress to line fill percentage
  const lineFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const lineGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2])

  // Active project based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.floor(latest * filteredProjects.length)
      if (index < filteredProjects.length) {
        setActiveProject(filteredProjects[index].id)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, filteredProjects])


  return (
    <>
      <ScrollProgress />

      <section id="work" ref={containerRef} className="relative py-24 bg-[#050505] overflow-hidden">
        {/* Advanced particle background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>

          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'none\' stroke=\'rgba(255,255,255,0.02)\' stroke-width=\'1\'/%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
          {/* Header with floating badge */}
          <div className="text-center mb-16">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Our Work
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
            >
              A showcase of our finest work across branding, web, mobile, and user interfaces.
            </motion.p>

          </div>

          {/* Advanced Timeline Layout with scroll-filling line */}
          <div className="relative" ref={timelineRef}>
            {/* Scroll-filling central line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent hidden md:block overflow-hidden"
              style={{
                height: '100%',
              }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                style={{
                  height: lineFill,
                  boxShadow: '0 0 20px rgba(59,130,246,0.5)'
                }}
              >
                {/* Moving glow inside the filled line */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 blur-xl"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>


            <div className="space-y-8 md:space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const isLeft = index % 2 === 0
                  const isActive = activeProject === project.id

                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 80,
                        damping: 15
                      }}
                      className={cn(
                        "flex flex-col md:flex-row relative",
                        isLeft ? "md:justify-start" : "md:justify-end"
                      )}
                      onHoverStart={() => setHoveredId(project.id)}
                      onHoverEnd={() => setHoveredId(null)}
                    >
                      {/* Timeline dot with advanced effects */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: hoveredId === project.id || isActive ? 1.5 : 1,
                          }}
                        >
                          {/* Main dot */}
                          <div className={cn(
                            "w-4 h-4 rounded-full bg-gradient-to-r shadow-lg",
                            project.color
                          )} />

                          {/* Pulse rings */}
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              className={cn(
                                "absolute inset-0 rounded-full bg-gradient-to-r",
                                project.color
                              )}
                              animate={{
                                scale: [1, 2 + i, 1],
                                opacity: [0.5, 0, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                          ))}

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="absolute -inset-4 rounded-full border-2 border-blue-500"
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* Card with advanced hover effects */}
                      <motion.div
                        className="w-full md:w-5/12"
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <div
                          className={cn(
                            "group relative h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 text-left transition-all duration-700",
                            isLeft ? "md:mr-auto" : "md:ml-auto",
                            isActive ? "border-blue-500/50 shadow-xl shadow-blue-500/20" : "hover:border-blue-500/30"
                          )}
                        >
                          {/* Parallax image with zoom on hover */}
                          <motion.div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${project.image})`,
                              scale: useTransform(scrollYProgress, [index / filteredProjects.length, (index + 1) / filteredProjects.length], [1, 1.2])
                            }}
                            animate={{ scale: hoveredId === project.id ? 1.15 : 1 }}
                            transition={{ duration: 0.7 }}
                          />

                          {/* Dynamic gradient overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent"
                            animate={{
                              opacity: hoveredId === project.id ? 0.95 : 0.85,
                              background: isActive
                                ? 'linear-gradient(to top, #050505, rgba(59,130,246,0.3), transparent)'
                                : 'linear-gradient(to top, #050505, rgba(0,0,0,0.5), transparent)'
                            }}
                          />

                          {/* Featured badge with animation */}
                          {project.featured && (
                            <motion.div
                              initial={{ x: 100, rotate: 45 }}
                              animate={{ x: 0, rotate: 0 }}
                              whileHover={{ scale: 1.05 }}
                              className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full z-10"
                            >
                              <Sparkles className="w-3 h-3 text-yellow-400" />
                              <span className="text-[8px] font-bold text-yellow-400 uppercase tracking-wider">Featured</span>
                            </motion.div>
                          )}

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col justify-end p-6">
                            {/* Category with animated icon */}
                            <motion.div
                              className="flex items-center gap-2 mb-2"
                              animate={{ x: hoveredId === project.id ? 5 : 0 }}
                            >
                              <Briefcase className="w-3 h-3 text-blue-400" />
                              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                                {project.category}
                              </span>
                            </motion.div>

                            {/* Title with gradient on hover */}
                            <h3 className="text-xl font-bold text-white tracking-tight mb-2 leading-tight">
                              {project.title}
                            </h3>

                            <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                              {project.description}
                            </p>

                            {/* Meta info with hover effects */}
                            <div className="flex items-center gap-3 mb-4">
                              <motion.div
                                className="flex items-center gap-1"
                                animate={{ x: hoveredId === project.id ? 3 : 0 }}
                              >
                                <Calendar className="w-3 h-3 text-gray-500" />
                                <span className="text-[8px] text-gray-500">{project.year}</span>
                              </motion.div>
                              <span className="text-[8px] text-gray-500">•</span>
                              <motion.span
                                className="text-[8px] text-gray-500"
                                animate={{ color: hoveredId === project.id ? '#60A5FA' : '#6B7280' }}
                              >
                                {project.client}
                              </motion.span>
                            </div>

                            {/* Action button with advanced hover */}
                            <div className="flex items-center justify-between">
                              <Link href={project.href || '#'}>
                                <motion.div
                                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white cursor-pointer overflow-hidden"
                                  whileHover={{
                                    rotate: 12,
                                    scale: 1.1,
                                    backgroundColor: 'rgba(59,130,246,0.5)'
                                  }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <motion.div
                                    animate={{ rotate: hoveredId === project.id ? [0, 360] : 0 }}
                                    transition={{ duration: 0.5 }}
                                  >
                                    <ArrowUpRight className="w-5 h-5" />
                                  </motion.div>
                                </motion.div>
                              </Link>

                              <Link 
                                href={project.href || '#'}
                                className="text-[10px] text-white/40 font-medium uppercase tracking-widest hover:text-white transition-colors"
                              >
                                View Case Study
                              </Link>
                            </div>
                          </div>

                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 pointer-events-none"
                            animate={{
                              background: hoveredId === project.id
                                ? 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.1) 35%, transparent 40%)'
                                : 'none',
                              x: hoveredId === project.id ? ['-100%', '200%'] : '-100%'
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}