"use client";

import { motion } from "framer-motion";
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
  { name: "FinTech & Banking", icon: Building2, color: "from-blue-600 to-indigo-600" },
  { name: "Enterprise B2B", icon: Cpu, color: "from-indigo-600 to-purple-600" },
  { name: "High-Growth E-Com", icon: ShoppingBag, color: "from-blue-500 to-cyan-500" },
  { name: "Med-Tech Platforms", icon: Stethoscope, color: "from-purple-500 to-pink-500" },
  { name: "Legal Consulting", icon: Scale, color: "from-blue-600 to-purple-600" },
  { name: "Global SaaS", icon: Globe2, color: "from-indigo-500 to-blue-700" }
];

const TiltCard = ({ item }: { item: typeof industries[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex-shrink-0 w-[320px] p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:border-blue-100 group relative overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[3rem] pointer-events-none" />
      
      <div className="relative mb-8">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform`}>
          <item.icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
        {item.name}
      </h3>
      
      <p className="text-gray-500 text-xs leading-relaxed font-normal text-center mb-6 flex-grow">
        Elite authority engineering specifically tailored for {item.name.toLowerCase()} market dynamics and link equity benchmarks.
      </p>

      <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Verified Niche</span>
        </div>
        <Zap className="w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default function IndustriesServed() {

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Particles (Static Placeholder) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-600 rounded-full blur-sm animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="mb-10 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              INDUSTRIES WE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-bold">
                DOMINATE
              </span>
            </h2>
            <p className="text-gray-400 text-xs mt-2 mx-auto max-w-2xl">
              Engineering authority for high-stakes sectors with absolute precision.
            </p>
          </div>
        </div>

        {/* Industries Carousel with Seamless Animation */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Fades for seamless transition */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max py-8"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 100 } }} // Slow down on hover
          >
            {[...industries, ...industries].map((item, idx) => (
              <TiltCard key={`${item.name}-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

