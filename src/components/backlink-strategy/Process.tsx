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
    color: "from-blue-600 to-indigo-600",
    deliverable: "Target Whitelist"
  },
  {
    number: "02",
    title: "Pitch Architecture",
    desc: "Crafting bespoke pitch frameworks that secure editorial interest and establish long-term placement authority.",
    icon: Users,
    color: "from-indigo-600 to-purple-600",
    deliverable: "Editorial Approval"
  },
  {
    number: "03",
    title: "Equity Injection",
    desc: "Deploying high-impact assets and managing the distribution of link juice across strategic domain nodes.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    deliverable: "Live Link Assets"
  },
  {
    number: "04",
    title: "Stability Audit",
    desc: "Continuous monitoring of link status and indexing to ensure domain authority remains on an upward trajectory.",
    icon: BarChart4,
    color: "from-purple-500 to-pink-500",
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
      ctx.fillStyle = "rgba(37, 99, 235, 0.15)";
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
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-sans"
    >
      <ParticleBackground />

      {/* Interactive Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), transparent 40%)`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 z-10">
        <div className="flex flex-col items-center text-center mb-16 px-4">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
            THE AUTHORITY <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 uppercase">PIPELINE</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mt-4 uppercase tracking-[0.2em] font-black">
            A scientifically audited process for link equity acquisition and propagation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 cursor-default">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Step Number Background */}
                <div className="absolute top-6 right-8 text-5xl font-black text-gray-400/10 group-hover:text-blue-500/20 transition-colors">
                  {step.number}
                </div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {step.desc}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Deliverable</span>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-tight">{step.deliverable}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Connector for large screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-blue-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
