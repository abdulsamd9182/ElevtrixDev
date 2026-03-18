"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { 
  Building2, 
  ShoppingBag, 
  Globe2, 
  Cpu, 
  Stethoscope, 
  Scale,
  ShieldCheck,
  Zap
} from "lucide-react";

const industries = [
  { name: "FinTech & Banking", icon: Building2, color: "from-amber-600 to-orange-600" },
  { name: "Enterprise B2B", icon: Cpu, color: "from-orange-600 to-amber-700" },
  { name: "High-Growth E-Com", icon: ShoppingBag, color: "from-amber-500 to-orange-500" },
  { name: "Med-Tech Platforms", icon: Stethoscope, color: "from-orange-400 to-amber-600" },
  { name: "Legal Consulting", icon: Scale, color: "from-amber-500 to-amber-700" },
  { name: "Global SaaS", icon: Globe2, color: "from-orange-500 to-orange-700" }
];

const TiltCard = ({ item }: { item: typeof industries[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="flex-shrink-0 w-[300px] md:w-[350px] p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-amber-500/5 group relative overflow-hidden min-h-[300px] flex flex-col"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-[3rem] pointer-events-none" />
      
      <div className="relative mb-8">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-amber-200 group-hover:scale-110 transition-transform`}>
          <item.icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
        {item.name}
      </h3>
      
      <p className="text-gray-400 text-xs font-medium leading-relaxed mb-8 flex-grow">
        Elite authority engineering specifically tailored for {item.name.toLowerCase()} market dynamics and link equity benchmarks.
      </p>

      <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Verified Niche</span>
        </div>
        <Zap className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default function IndustriesServed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="relative w-full py-24 bg-gray-50/30 overflow-hidden">
      {/* Background Particles (Static Placeholder) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full blur-sm animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-amber-600 rounded-full blur-sm animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-amber-600" />
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">Market Verticals</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-[1.1]">
              INDUSTRIES WE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 font-black">
                DOMINATE
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs text-right hidden md:block">
            Engineering authority for high-stakes sectors with absolute precision.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((item, idx) => (
            <div key={idx} className="snap-center">
              <TiltCard item={item} />
            </div>
          ))}
          {/* Double for infinite loop feel if needed, but manual scroll is fine too */}
        </div>

        {/* Custom Progress Bar */}
        <div className="w-full h-[2px] bg-gray-100 rounded-full mt-8 relative overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollXProgress }}
            className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 origin-left"
          />
        </div>
      </div>
    </section>
  );
}

