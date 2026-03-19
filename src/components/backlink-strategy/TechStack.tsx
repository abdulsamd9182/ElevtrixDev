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
        whileHover={{ y: -4 }}
        className="w-[45%] p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[5rem] pointer-events-none transition-transform group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-200 group-hover:rotate-6 transition-transform">
            <tool.icon className="w-7 h-7 text-white" />
          </div>

          <div className="inline-block px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{tool.phase} PHASE</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
          <p className="text-gray-600 text-xs leading-relaxed mb-6">
            {tool.desc}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{tool.category}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform">
          <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
        </div>
        <div className="h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-500 to-blue-600 absolute top-0" />
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            OUR LINK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-bold">
              TECH DEPTH
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            Engineering authority for high-stakes sectors with absolute precision.
          </p>
        </div>

        <div className="relative">
          {tools.map((tool, idx) => (
            <TiltCard key={idx} tool={tool} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

