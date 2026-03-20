"use client";

import {
  Search,
  Clapperboard,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Palette
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Vibe Check & Audit",
    description: "We analyze your TikTok presence and competitor content strategies to define angles that trigger the algorithm.",
    icon: Search,
    color: "from-pink-500 to-rose-500",
    deliverables: ["Creative Audit", "Trend Mapping", "Competitive Intel", "Signal Roadmap"]
  },
  {
    step: "02",
    title: "Creative Storyboarding",
    description: "The hook is everything. We storyboard concepts and source creators to produce content that stops the scroll.",
    icon: Clapperboard,
    color: "from-rose-500 to-purple-500",
    deliverables: ["Hook Engineering", "Direct-Response Scripts", "Creator Sourcing", "Visual Assets"]
  },
  {
    step: "03",
    title: "Signal Engineering",
    description: "Calibrating the content graph. We deploy Pixel/CAPI and Spark Ads to turn viewership into scalable revenue.",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    deliverables: ["Pixel / CAPI Setup", "Spark Ads Auth", "Audience Signals", "Shop Sync"]
  },
  {
    step: "04",
    title: "Iteration & Scale",
    description: "Scaling what resonates. We iterate on hook winners and bidding strategies for maximum market share.",
    icon: TrendingUp,
    color: "from-pink-600 to-rose-700",
    deliverables: ["Bid Management", "Creative Iteration", "VCO Optimization", "Scaling Winners"]
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
        hue: 330 + Math.random() * 40,
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
        ctx.fillStyle = `hsla(${p.hue}, 70%, 75%, ${p.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <ParticleField />

      <motion.div
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(219,39,119,0.05) 0%, transparent 60%)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-50/30 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none"
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
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 uppercase"
          >
            OUR TIKTOK ADS{" "}
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700">
              OPTIMIZATION PROCESS
            </span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="text-gray-500 text-sm md:text-base mt-4 mx-auto max-w-2xl px-4"
          >
            A high-energy content engineering methodology designed to transform viral signals into scalable, compounding revenue.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-6"
        >
          <div className="absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 hidden lg:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative group"
            >
              <div className="absolute -top-3 left-6 z-10">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-lg`}>
                  Step {step.step}
                </div>
              </div>

              <motion.div
                whileHover={{ y: -8 }}
                className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl group overflow-hidden h-full"
              >
                <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} animate-gradient`} />
                </div>

                <div className="relative z-10">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl`}>
                    <step.icon className="w-7 h-7 text-white" />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} blur-md`}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-[11px] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-pink-500 flex-shrink-0" />
                        <span className="text-[10px] text-gray-500 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${step.color} opacity-0 group-hover:opacity-20 rounded-tl-xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
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
