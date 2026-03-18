"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 pb-24 overflow-hidden bg-white flex items-start pt-40">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100">
          <source src="/web.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 z-10 w-full">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }} className="space-y-5 max-w-xl">
          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white drop-shadow-xl">
            INTELLIGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AUTOMATED <br /> TESTING
            </span>{" "}<br />
            AT SCALE.
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-white text-sm md:text-base font-medium leading-relaxed max-w-md drop-shadow-sm">
            We engineer high-velocity test automation frameworks that run thousands of checks on every commit, giving your team instant confidence to ship faster.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-3 pt-3">
            <Link href="/hire-us" passHref>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 inline-flex items-center gap-2">
                Build Our Framework <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
