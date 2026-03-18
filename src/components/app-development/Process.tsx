"use client";

import {
  Search,
  PenTool,
  Code2,
  Rocket,
  Sparkles,
  CheckCircle2,
  Workflow,
  Target,
  BarChart3,
  Smartphone,
  Layers,
  MousePointer2,
  ShieldCheck,
  ChevronRight,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Defining core value propositions, target users, and platform strategy (Native vs Cross-platform).",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
    deliverables: ["Product Roadmap", "User Personas", "Platform Strategy", "Tech Stack Definition"]
  },
  {
    step: "02",
    title: "Mobile UI/UX Design",
    description: "Crafting intuitive, platform-native interfaces (HIG & Material) with interactive protocols.",
    icon: PenTool,
    color: "from-indigo-600 to-blue-500",
    deliverables: ["Hi-Fi Wireframes", "Interactive Prototype", "Mobile Design System", "Asset Optimization"]
  },
  {
    step: "03",
    title: "Engineering & QA",
    description: "Building with Swift, Kotlin, or Flutter with rigorous sprint cycles and real-device testing.",
    icon: Code2,
    color: "from-blue-700 to-indigo-600",
    deliverables: ["Clean Codebase", "API Integration", "Real-Device Testing", "Security Hardening"]
  },
  {
    step: "04",
    title: "Deployment & Scaling",
    description: "Handling Store submissions and providing post-launch growth iterations and CI/CD setup.",
    icon: Rocket,
    color: "from-cyan-600 to-blue-700",
    deliverables: ["Store Submission", "ASO Strategy", "CI/CD Setup", "Scaling Roadmap"]
  }
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number; opacity: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;
        this.opacity = Math.random() * 0.15 + 0.05;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 35; i++) particles.push(new Particle());

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0" />;
}

export default function Process() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden font-sans">
      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Workflow className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Protocol Loop</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            GROWTH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              ARCHITECTURE
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            A high-speed engineering workflow optimized for the mobile ecosystem, 
            transforming raw concepts into market leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -top-3 left-6 z-10">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-lg`}>
                  Step {step.step}
                </div>
              </div>

              <div className="h-full p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl group overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-4 relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-50 mt-auto relative z-10">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      <span className="text-[10px] text-gray-500">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ChevronRight className="w-4 h-4 text-blue-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-8 border border-blue-50 bg-blue-50/30 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Enterprise Sovereignty</p>
              <p className="text-[10px] font-medium text-blue-600 uppercase tracking-widest">Protocol v4.2 Security Standard</p>
            </div>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="relative w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-lg">
                <Image 
                  src={`https://i.pravatar.cc/150?u=${i+10}`} 
                  alt="User" 
                  fill
                  className="object-cover" 
                />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-900 flex items-center justify-center text-[10px] font-black text-white shadow-lg">
              +12k
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
