"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  BarChart3, 
  Search, 
  Code2, 
  Database, 
  Zap, 
  Sparkles,
  RefreshCw,
  Target,
  Globe,
  Settings,
  ShieldCheck
} from "lucide-react";

const tools = [
  {
    name: "SurferSEO",
    category: "NLP Optimization",
    icon: Sparkles,
    description: "Real-time content engineering via Natural Language Processing and entity-gap analysis.",
    features: ["Entity Extraction", "Content Score CI", "Topic Gap Mapping"],
    metrics: "95% Optimization Score"
  },
  {
    name: "Semrush Pro",
    category: "Intent Intelligence",
    icon: Search,
    description: "Deep-dive keyword research and competitor intent mapping to ensure topical coverage.",
    features: ["Keyword Gap Detect", "Intent Categorization", "SERP History Logs"],
    metrics: "10x Insight Velocity"
  },
  {
    name: "Screaming Frog",
    category: "Architecture Audit",
    icon: Database,
    description: "Enterprise-grade crawling to ensure perfect header hierarchy and data-linking silos.",
    features: ["Silo Visualization", "Header Logic Audit", "Canonical Control"],
    metrics: "100% Crawl Coverage"
  },
  {
    name: "Schema Markup",
    category: "Structured Data",
    icon: Code2,
    description: "Engineering advanced JSON-LD scripts to help AI-driven crawlers understand entity relations.",
    features: ["Article Schema", "Product Entity Map", "Local SEO Rich Result"],
    metrics: "Rich Result Ready"
  }
];

const TiltCard = ({ tool, index }: { tool: typeof tools[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Connector Line */}
      <div className="absolute left-1/2 top-0 bottom-[-96px] w-px bg-gradient-to-b from-indigo-200 via-indigo-100 to-transparent -translate-x-1/2 hidden lg:block last:hidden" />
      
      {/* Content Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { setRotateX(0); setRotateY(0); }}
        style={{ perspective: 1000 }}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-[45%]"
      >
        <motion.div
          animate={{ rotateX, rotateY }}
          className="relative p-8 bg-white border border-gray-100 rounded-3xl hover:border-indigo-200 transition-all duration-300 shadow-xl shadow-indigo-500/5 group"
        >
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:scale-110 transition-transform duration-500">
              <tool.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h3>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{tool.category}</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-indigo-100 pl-6 group-hover:border-indigo-600 transition-colors">
            {tool.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {tool.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Optimization Hub</span>
            </div>
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{tool.metrics}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-indigo-600 shadow-lg shadow-indigo-200 z-20 hidden lg:flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </div>

      {/* Spacer for reverse side */}
      <div className="hidden lg:block w-[45%]" />
    </div>
  );
};

export default function TechStack() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-50/40 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 uppercase"
          >
            THE ON-PAGE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 uppercase leading-tight">
              SEO STACK
            </span>
          </motion.h2>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="w-8 h-px bg-indigo-200 hidden md:block" />
            <span className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-center px-4">Elite SEO Intelligence Pipeline</span>
            <div className="w-8 h-px bg-indigo-200 hidden md:block" />
          </div>
        </div>

        <div className="relative">
          {tools.map((tool, idx) => (
            <TiltCard key={idx} tool={tool} index={idx} />
          ))}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
    </section>
  );
}

