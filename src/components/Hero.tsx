'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [useVideo, setUseVideo] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)

    // Check for slow connection or data saver
    if ('connection' in navigator) {
      const conn = (navigator as any).connection
      if (conn) {
        const isSlow = conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g'
        const dataSaver = conn.saveData === true
        if (isSlow || dataSaver) {
          setUseVideo(false)
        }
      }
    }
  }, [])

  // Only show video on homepage
  const showVideo = isMounted && pathname === '/' && useVideo

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Video Background - Only on homepage and if connection allows */}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-bg.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback gradient for other pages or slow connections */}
      {(!showVideo) && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 z-0" />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-20 text-center px-4 pt-20">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
        >
          Turn Your Vision Into{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Digital Reality
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto drop-shadow"
        >
          Think big from day one — we'll handle the rest. Scalable solutions built for today and engineered for tomorrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/hire-us">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="#services">
            <button className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
              See Our Process
            </button>
          </Link>
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-sm text-white/60 mt-8"
        >
          Trusted by 50+ businesses • Free consultation • 24hr response
        </motion.p>
      </div>
    </section>
  )
}