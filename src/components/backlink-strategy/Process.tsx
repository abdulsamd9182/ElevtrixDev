"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Users, 
  FileSearch, 
  Network, 
  BarChart4, 
  Zap, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  Database,
  Target,
  Layers
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Prospect Intel",
    desc: "Identifying high-relevance, high-DA publishers using proprietary discovery algorithms and link-gap analysis.",
    icon: FileSearch,
    color: "from-amber-600 to-orange-600",
    deliverable: "Target Whitelist"
  },
  {
    number: "02",
    title: "Pitch Architecture",
    desc: "Crafting bespoke pitch frameworks that secure editorial interest and establish long-term placement authority.",
    icon: Users,
    color: "from-orange-600 to-amber-700",
    deliverable: "Editorial Approval"
  },
  {
    number: "03",
    title: "Equity Injection",
    desc: "Deploying high-impact assets and managing the distribution of link juice across strategic domain nodes.",
    icon: Zap,
    color: "from-amber-700 to-amber-600",
    deliverable: "Live Link Assets"
  },
  {
    number: "04",
    title: "Stability Audit",
    desc: "Continuous monitoring of link status and indexing to ensure domain authority remains on an upward trajectory.",
    icon: BarChart4,
    color: "from-amber-600 to-orange-700",
    deliverable: "Equity Report"
  }
];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; size: number; sx: number; sy: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        sx: (Math.random() - 0.5) * 0.4,
        sy: (Math.random() - 0.5) * 0.4,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      particles.forEach(p => {
        p.x += p.sx;
        p.y += p.sy;
        if (p.x < 0 || p.x > width) p.sx *= -1;
        if (p.y < 0 || p.y > height) p.sy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default function Process() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 bg-white overflow-hidden font-sans"
    >
      <ParticleBackground />

      {/* Interactive Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.08), transparent 40%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-[10px] font-black tracking-[0.3em] text-amber-600 uppercase">Strategic Protocol</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-6">
            THE AUTHORITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">PIPELINE</span>
          </h2>
          <p className="text-gray-400 text-xs font-black uppercase tracking-[0.3em] max-w-lg">
            A scientifically audited process for link equity acquisition and propagation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white border border-gray-100 rounded-[3rem] shadow-2xl shadow-amber-500/5 group-hover:border-amber-200 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Step Number Background */}
                <div className="absolute top-6 right-8 text-5xl font-black text-gray-400/10 group-hover:text-amber-500/20 transition-colors">
                  {step.number}
                </div>

                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-xl shadow-amber-200 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-xs font-medium leading-relaxed mb-10 flex-grow">
                  {step.desc}
                </p>

                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Deliverable</span>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-tight">{step.deliverable}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Connector for large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-amber-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-gray-900 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] group-hover:bg-amber-600/20 transition-colors" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                <Target className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h4 className="text-white text-xl font-black uppercase tracking-tight">Ready to scale domain equity?</h4>
                <p className="text-gray-400 text-xs font-medium mt-1 uppercase tracking-widest">Our engineers are standing by to audit your link profile.</p>
              </div>
            </div>
            <button className="px-10 py-5 bg-white text-gray-900 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-2xl">
              Initiate Asset Discovery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
