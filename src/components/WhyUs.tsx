'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function WhyUs() {
  const pairs = [
    { left: 'Innovation', right: 'Reliability' },
    { left: 'Speed', right: 'Quality' },
    { left: 'Design', right: 'Function' },
    { left: 'Strategy', right: 'Execution' },
    { left: 'Vision', right: 'Results' },
  ]

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
        >
          Built in Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            DNA
          </span>
        </motion.h2>

        <div className="relative">
          {/* Central helix line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {pairs.map((pair, index) => (
              <div key={index} className="relative grid grid-cols-2 gap-8">
                {/* Left strand */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-right pr-8"
                >
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                    <span className="text-white font-bold">{pair.left}</span>
                  </div>
                </motion.div>

                {/* Right strand */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-left pl-8"
                >
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl">
                    <span className="text-white font-bold">{pair.right}</span>
                  </div>
                </motion.div>

                {/* Connecting dots */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                />
              </div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 mt-12 max-w-2xl mx-auto"
        >
          These aren't just words — they're the fundamental building blocks of everything we create.
        </motion.p>
      </div>
    </section>
  )
}
