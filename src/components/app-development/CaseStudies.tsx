"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: 1,
    category: "Case Study",
    title: "Global FinTech App Achieves 5M Downloads in First Quarter",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Case Study",
    title: "Revolutionizing Telehealth: A Secure Mobile Portal Experience",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Insights",
    title: "The Rise of Flutter: Why Enterprises Are Adopting Cross-Platform",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 border-l-4 border-blue-600 pl-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">FEATURED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">INSIGHTS</span></h2>
          <p className="text-gray-500 text-base mt-2">Stories of our mobile transformations across diverse industries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-blue-600 tracking-wider shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-blue-600 tracking-wider">
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
