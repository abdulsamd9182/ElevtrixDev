"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-white flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.03]"
        >
          <source src="/web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Animated Performance Blobs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10 w-full mt-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full shadow-sm"
          >
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-black tracking-[0.2em] text-amber-600 uppercase">
              Elite Authority Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-gray-900"
          >
            SCALE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
              DOMAIN EQUITY
            </span> <br />
            WITH ELITE LINKS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl"
          >
            We build scientific backlink architectures that propel domain authority. 
            Through high-impact guest posting and curated niche placements, we deliver 
            equity that search engines cannot ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gray-900 text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-gray-200 hover:bg-amber-600 transition-colors duration-500"
              >
                Launch Campaign 
                <Zap className="w-4 h-4 fill-white group-hover:animate-pulse" />
              </motion.button>
            </Link>
            
            <div className="flex -space-x-4 overflow-hidden p-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br from-amber-${i}00 to-orange-${i}00 opacity-20`} />
                </div>
              ))}
              <div className="flex items-center gap-2 pl-6">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trusted by 500+ Scale-Ups</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

