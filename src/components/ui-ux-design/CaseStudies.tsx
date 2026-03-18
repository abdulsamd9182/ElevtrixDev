"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    category: "Case Study",
    title: "Redesigning a Global E-Commerce Giant: 40% Increase in Conversions",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Case Study",
    title: "Healthcare Dashboard: Simplifying Patient Data Navigation",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Insights",
    title: "The Psychology of Micro-Interactions in Daily App Usage",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2600&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black tracking-[0.2em] text-white uppercase mb-4">Design Insights</h2>
          <p className="text-gray-500 text-sm font-medium tracking-tight uppercase tracking-widest">Stories of transformation through empathetic design</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8 border border-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black uppercase text-white tracking-widest border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#3b82f6] transition-colors leading-tight">{item.title}</h3>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#3b82f6] tracking-[0.2em]">
                <span>Explore Details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
