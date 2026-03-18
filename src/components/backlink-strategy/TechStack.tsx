"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart4, 
  RefreshCw, 
  SearchCode, 
  Network, 
  ShieldCheck, 
  Users, 
  Link2,
  Cpu,
  Zap,
  ChevronRight
} from "lucide-react";

const tools = [
  {
    name: "Ahrefs Elite",
    category: "Equity Discovery",
    icon: Network,
    phase: "Planning",
    desc: "Comprehensive domain analysis to identify high-equity crawl paths."
  },
  {
    name: "Hunter.io",
    category: "Outreach Intelligence",
    icon: SearchCode,
    phase: "Discovery",
    desc: "Multi-point identity verification for precision outreach."
  },
  {
    name: "BuzzStream",
    category: "Relationship CRM",
    icon: Users,
    phase: "Execution",
    desc: "Industrial-scale relationship management with publisher whitelisting."
  },
  {
    name: "Majestic SEO",
    category: "Trust Analysis",
    icon: ShieldCheck,
    phase: "Verification",
    desc: "Deep-layer trust flow audit for link juice validation."
  },
  {
    name: "Semrush Audit",
    category: "Surveillance",
    icon: BarChart4,
    phase: "Monitoring",
    desc: "Real-time monitoring of link profile health and acquisition velocity."
  },
  {
    name: "In-House CRM",
    category: "Publisher Registry",
    icon: RefreshCw,
    phase: "Hardening",
    desc: "Proprietary database of verified high-impact publisher relations."
  }
];

const TiltCard = ({ tool, index }: { tool: typeof tools[0], index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center justify-between w-full mb-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, rotateY: isEven ? 5 : -5 }}
        className="w-[45%] p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-amber-500/5 group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[5rem] pointer-events-none transition-transform group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-200 group-hover:rotate-6 transition-transform">
            <tool.icon className="w-7 h-7 text-white" />
          </div>

          <div className="inline-block px-3 py-1 bg-amber-50 rounded-full mb-4">
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{tool.phase} PHASE</span>
          </div>

          <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{tool.name}</h3>
          <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6 italic">
            {tool.desc}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{tool.category}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white border-4 border-amber-600 flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-amber-600 fill-amber-600" />
        </div>
        <div className="h-full w-1 bg-gradient-to-b from-amber-600 via-orange-500 to-amber-600 absolute top-0" />
      </div>

      {/* Spacing for layout */}
      <div className="w-[45%]" />
    </motion.div>
  );
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-white overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gray-100" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="text-center mb-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-amber-600" />
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">Authority Stack</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight leading-none">
            OUR LINK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 font-black">
              TECH DEPTH
            </span>
          </h2>
        </div>

        <div className="relative">
          {tools.map((tool, idx) => (
            <TiltCard key={idx} tool={tool} index={idx} />
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gray-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-gray-200 hover:bg-amber-600 transition-colors"
          >
            Review Strategy Documentation
          </motion.button>
        </div>
      </div>
    </section>
  );
}

