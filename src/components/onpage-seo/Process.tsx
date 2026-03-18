"use client";

import {
  Search,
  PenTool,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Intent Discovery",
    description: "Analyzing search landscape to identify core user intent and high-value semantic clusters.",
    icon: Search,
    color: "from-indigo-500 to-violet-500",
    deliverables: ["Topic Research", "Intent Mapping", "Competitor Gap Analysis", "Content Roadmap"]
  },
  {
    step: "02",
    title: "Semantic Engineering",
    description: "Reconstructing pages with NLP-driven content hubs and entity-relationship architectures.",
    icon: Layers,
    color: "from-violet-500 to-purple-500",
    deliverables: ["NLP Optimization", "Entity Mapping", "Internal Link Silos", "Topic Hubs"]
  },
  {
    step: "03",
    title: "Markup & Structure",
    description: "Implementing advanced JSON-LD and semantic HTML to help AI crawlers understand data relations.",
    icon: Code2,
    color: "from-purple-500 to-indigo-500",
    deliverables: ["Schema Scripts", "Semantic Refactor", "Header Logic", "Breadcrumb Paths"]
  },
  {
    step: "04",
    title: "Rank Monitoring",
    description: "Real-time surveillance of keyword velocity and topical authority growth across search engines.",
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-500",
    deliverables: ["Authority Logs", "Rank Surveillance", "Intent drift Tracking", "CTR Benchmarking"]
  }
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }[] = [];

    for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 1 + Math.random() * 3,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: 0.1 + Math.random() * 0.2,
          hue: 240 + Math.random() * 40,
        });
      }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.speedX + Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.01;
        p.y += p.speedY + Math.cos(Date.now() * 0.001 + p.x * 0.01) * 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-white overflow-hidden">
      <ParticleField />

      <motion.div
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.05) 0%, transparent 60%)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                staggerChildren: 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] 
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 uppercase">
            ON-PAGE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
              STRATEGY FLOW
            </span>
          </motion.h2>

          <motion.p className="text-gray-400 text-xs mt-2 uppercase tracking-[0.2em] font-black">
            A systematic approach to search relevance and intent capture
          </motion.p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-indigo-200 via-violet-200 to-purple-200 hidden lg:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -top-3 left-6 z-10">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-[10px] font-black uppercase shadow-lg`}>
                  Step {step.step}
                </div>
              </div>

              <motion.div
                whileHover={{ y: -8 }}
                className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl group overflow-hidden h-full flex flex-col"
              >
                <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} animate-gradient`} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-[10px] font-medium leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2 mt-auto">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${step.color} opacity-0 group-hover:opacity-100 rounded-tl-xl transition-opacity duration-500 mix-blend-overlay`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
