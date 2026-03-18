"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Layers,
  Server,
  Code2,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  Gauge,
  Workflow,
  SearchCode,
  Music2,
  MousePointer2,
  PieChart
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stacks = [
  {
    category: "Native Development",
    items: ["Swift", "SwiftUI", "Objective-C", "Kotlin", "Jetpack Compose", "Java"],
    icon: Smartphone,
    color: "from-blue-600 to-indigo-600",
    expertise: 95,
    description: "High-performance native development using platform-specific languages and tools for the best responsive experiences.",
    technologies: ["SwiftUI", "Jetpack Compose", "CoreData", "Room DB", "Core Animation", "Material Design 3"],
    stats: { projects: "25+", experience: "7+ years" }
  },
  {
    category: "Cross-Platform",
    items: ["React Native", "Flutter", "Dart", "TypeScript", "Expo", "Capacitor"],
    icon: Layers,
    color: "from-indigo-500 to-purple-600",
    expertise: 92,
    description: "Efficient multi-platform apps using a single codebase, minimizing development costs and time-to-market.",
    technologies: ["Flutter 3.x", "React Native", "Dart", "Expo SDK", "Redux", "Flutter Hooks"],
    stats: { projects: "30+", experience: "5+ years" }
  },
  {
    category: "Mobile Backend",
    items: ["Firebase", "AWS Amplify", "Node.js", "GraphQL", "Supabase", "Appwrite"],
    icon: Server,
    color: "from-blue-600 to-cyan-600",
    expertise: 88,
    description: "Robust, scalable backend infrastructures optimized for mobile, featuring real-time data sync and secure auth.",
    technologies: ["Firebase Cloud", "AWS Lambda", "GraphQL", "PostgreSQL", "Push Notifs", "Serverless"],
    stats: { projects: "20+", experience: "6+ years" }
  },
  {
    category: "Design & UX",
    items: ["Figma", "Sketch", "Adobe XD", "ProtoPie", "Zeplin", "Principle"],
    icon: Code2,
    color: "from-indigo-600 to-blue-700",
    expertise: 90,
    description: "Mobile-first UI/UX design with high-fidelity prototypes following HIG and Material Design guidelines.",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Testing", "Lottie Animations"],
    stats: { projects: "40+", experience: "8+ years" }
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
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.2 + 0.1;
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

    for (let i = 0; i < 30; i++) particles.push(new Particle());

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

function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotate({ x: x * -10, y: y * 10 });
  };
  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );
}

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 bg-white overflow-hidden font-sans"
    >
      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Protocol Stack</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            THE MOBILE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              ENGINE
            </span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            Expertly curated technology stacks for building fluid, native-grade applications 
            that redefine user standards.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-100 to-transparent hidden md:block" />

          {stacks.map((stack, idx) => (
            <div key={idx} className="relative mb-24 last:mb-0">
              <div className="absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-white border-2 border-blue-600 hidden md:flex items-center justify-center z-10 shadow-lg shadow-blue-100">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`${idx % 2 === 0 ? 'md:text-right flex md:flex-row-reverse' : 'text-left flex'} flex-col md:flex-row items-start gap-8`}
                >
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stack.color} flex items-center justify-center shadow-2xl shadow-blue-200 flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                    <stack.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className={`flex items-center gap-2 mb-1 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Gauge className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-xs text-gray-400">Efficiency {stack.expertise}%</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {stack.category}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <TiltCard>
                    <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl group overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-2xl group-hover:scale-110 transition-transform duration-500" />
                      
                      <p className="text-gray-600 text-xs leading-relaxed mb-4">
                        {stack.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                        <div>
                          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-2">
                             <Zap className="w-3 h-3 text-blue-500" /> Key Tech
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {stack.technologies.slice(0, 3).map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded-full text-[9px] font-medium text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-200 cursor-default shadow-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-2 justify-end">
                             <Sparkles className="w-3 h-3 text-blue-500" /> Projects
                          </h4>
                          <p className="text-lg font-bold text-gray-900 tracking-tight">{stack.stats.projects}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-50 relative z-10">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[8px] text-gray-400">Expertise</span>
                          <span className="text-[8px] font-bold text-gray-700">{stack.expertise}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stack.expertise}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${stack.color}`}
                          />
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Smartphone className="w-4 h-4 text-blue-200" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] flex flex-wrap justify-around items-center gap-12 text-white shadow-2xl shadow-blue-200"
        >
          {[
            { label: "Sync Velocity", value: "Real-time" },
            { label: "Data Integrity", value: "99.9%" },
            { label: "Scale Multiplier", value: "Unlimited" },
            { label: "Avg Latency", value: "< 15ms" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-1 drop-shadow-lg group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-[10px] font-medium text-blue-100/60 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

