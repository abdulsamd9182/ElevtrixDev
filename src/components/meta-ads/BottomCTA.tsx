"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] text-center border-t border-white/5 overflow-hidden">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-[url('/web-dev-hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-20 z-0 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-0" />
      {/* Existing Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111111]/80 z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 space-y-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase">
            Ready To <span className="text-[#3b82f6]">Scale Your ROAS?</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Connect with us for a free ad account audit and discover the hidden revenue potential in your campaign architecture.
          </p>
          <div className="pt-8">
            <Link href="/hire-us">
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3.5 rounded-lg text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-95">
                Get Your Free Audit
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
