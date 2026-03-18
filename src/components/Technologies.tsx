'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGithub,
  FaFigma
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiFramer,
  SiVercel,
  SiPrisma
} from 'react-icons/si'

const technologies = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Framer', icon: <SiFramer className="text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-white" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
]

// Triple items for seamless vertical loop
const marqueeItems = [...technologies, ...technologies, ...technologies]

export default function VerticalTechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [marqueeHeight, setMarqueeHeight] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimationControls()

  // Calculate total height of one set of technologies
  useEffect(() => {
    if (!containerRef.current) return
    const itemElements = containerRef.current.querySelectorAll('.tech-item')
    if (itemElements.length > 0) {
      let totalHeight = 0
      for (let i = 0; i < technologies.length; i++) {
        totalHeight += itemElements[i].clientHeight
      }
      // Add gap between items (each item has mb-4 which is 1rem = 16px)
      totalHeight += (technologies.length - 1) * 16
      setMarqueeHeight(totalHeight)
    } else {
      // Fallback: approximate height per item (80px for icon + 20px for text + 16px gap)
      setMarqueeHeight(technologies.length * (80 + 20 + 16))
    }
  }, [])

  // Control vertical animation
  useEffect(() => {
    if (marqueeHeight === 0) return
    if (isHovered) return
    controls.start({
      y: [0, -marqueeHeight],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: marqueeHeight / 30, // speed factor
          ease: 'linear',
        },
      },
    })
  }, [controls, marqueeHeight, isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    controls.start({
      y: [0, -marqueeHeight],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: marqueeHeight / 30,
          ease: 'linear',
        },
      },
    })
  }

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Powered by Modern{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Technologies
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We leverage the most powerful tools and frameworks to build high‑performance,
              secure, and scalable digital solutions for your business.
            </p>

            {/* Stats / trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vertical Marquee */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gradient overlays for top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>

            <div className="h-full overflow-hidden">
              <motion.div
                ref={containerRef}
                className="flex flex-col"
                animate={controls}
                initial={{ y: 0 }}
              >
                {marqueeItems.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-item flex flex-col items-center justify-center mb-4 group/item"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/5 group-hover/item:scale-110 group-hover/item:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                      {tech.icon}
                    </div>
                    <span className="mt-1.5 text-xs font-medium text-gray-500 group-hover/item:text-white transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hint text */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 text-[10px] text-gray-600 uppercase tracking-wider">
              Hover to pause
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}