"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 space-y-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Final Protocol</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1]">
            READY TO <span className="text-blue-600">INTEGRATE</span> YOUR VISION?
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Our engineers are standing by to transform your technical requirements into a market-leading digital presence.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/hire-us">
              <button className="bg-black text-white px-12 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black/90 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-black/10">
                Start Integration
              </button>
            </Link>
            <div className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-blue-600 transition-colors">See case studies</span>
              <div className="w-6 h-px bg-gray-200 group-hover:bg-blue-600 group-hover:w-10 transition-all" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
