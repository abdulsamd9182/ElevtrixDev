"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="relative w-full py-24 bg-white text-center overflow-hidden border-t border-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-900 mb-8">
            Ready To <br /> Build Your App
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Connect with us to explore how we can deliver exceptional mobile applications tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hire-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-xs font-semibold uppercase tracking-widest hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/25 inline-flex items-center gap-2"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
