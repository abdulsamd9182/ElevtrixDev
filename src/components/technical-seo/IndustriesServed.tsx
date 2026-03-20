"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Building2, 
  ShoppingBag, 
  Globe2, 
  Cpu, 
  Stethoscope, 
  Scale,
  Database,
  Search,
  Zap,
  ShieldCheck,
  Code2
} from "lucide-react";

const industries = [
  { 
    name: "Enterprise SaaS", 
    icon: Cpu, 
    desc: "Multi-tenant architecture optimization and API performance engineering.",
    metrics: "100% Crawl Efficiency"
  },
  { 
    name: "Global E-Commerce", 
    icon: ShoppingBag, 
    desc: "Dynamic facets and large-scale product schema architecture.", 
    metrics: "10x Indexing Speed"
  },
  { 
    name: "Deep Tech", 
    icon: Database, 
    desc: "Engineering for massive data volumes and server-side complexity.", 
    metrics: "Sub-100ms Load Time"
  },
  { 
    name: "Health Logistics", 
    icon: Stethoscope, 
    desc: "Mission-critical infrastructure with strict protocol optimization.", 
    metrics: "Zero Downtime Audit"
  },
  { 
    name: "Real Estate Tech", 
    icon: Building2, 
    desc: "Dynamic map indexing and location-based schema clusters.", 
    metrics: "Green Core Web Vitals"
  },
  { 
    name: "Gov & Research", 
    icon: Scale, 
    desc: "Secure, high-authority domain management and protocol integrity.", 
    metrics: "Enterprise Security"
  }
];

const TiltCard = ({ item }: { item: typeof industries[0] }) => {
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

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex-shrink-0 w-72 md:w-80 h-[300px] group preserve-3d"
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-2xl border border-gray-100 group-hover:border-emerald-200 transition-colors p-6 flex flex-col justify-between shadow-xl shadow-emerald-500/5">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200/50">
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Mission Critical</span>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
        </div>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target</span>
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{item.metrics}</span>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-100/20 to-transparent rounded-tr-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ParticleField = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5 + 0.2
          }}
          animate={{
            y: [null, Math.random() * -100 - 50 + "px"],
            opacity: [null, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default function IndustriesServed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += 0.5;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <ParticleField />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 uppercase"
          >
            INDUSTRIES WE{" "}
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
              AUDIT & OPTIMIZE
            </span>
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 font-black uppercase tracking-[0.2em] px-4">
            Scaling technical authority across competitive sectors
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-10 no-scrollbar"
          >
            {[...industries, ...industries].map((item, idx) => (
              <TiltCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

