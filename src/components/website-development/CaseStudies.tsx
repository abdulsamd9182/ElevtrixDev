"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    category: "Case Study",
    title: "US Fashion Resale Platform Scales to 100K Monthly Transactions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Case Study",
    title: "FinTech Hub: Revolutionizing Cross-Border Payment Architecture",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Insights",
    title: "The Future of Web 3.0: Integrating Decentralized Assets into Web Apps",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gray-50 border border-gray-100">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Featured Insights</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-gray-900 uppercase leading-[1.1]">
            SUCCESS <span className="text-blue-600">STORIES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 border border-gray-100 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-gray-900 tracking-widest border border-white/50 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight px-2">{item.title}</h3>
              <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase text-gray-400 group-hover:text-blue-600 tracking-[0.3em] px-2">
                <span>Explore Protocol</span>
                <div className="w-8 h-px bg-gray-200 group-hover:bg-blue-600 group-hover:w-12 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
