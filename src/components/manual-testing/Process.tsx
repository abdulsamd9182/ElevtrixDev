"use client";

import { Search, ClipboardList, Bug, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Test Planning",
    description: "Analyzing requirements to define scope, objectives, test types, and entry/exit criteria for the QA engagement.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    deliverables: ["Test Strategy Document", "Scope Definition", "Risk Analysis", "Resource Planning"]
  },
  {
    step: "02",
    title: "Test Case Design",
    description: "Writing comprehensive, reusable test cases covering all happy paths, edge cases, and error conditions.",
    icon: ClipboardList,
    color: "from-purple-500 to-pink-500",
    deliverables: ["Test Case Repository", "Test Data Sets", "Boundary Value Analysis", "Equivalence Partitioning"]
  },
  {
    step: "03",
    title: "Test Execution",
    description: "Systematic execution of test cases across all required environments, recording pass/fail status and capturing evidence.",
    icon: Bug,
    color: "from-green-500 to-emerald-500",
    deliverables: ["Bug Reports with Steps", "Screenshot Evidence", "Severity Classification", "Test Run Logs"]
  },
  {
    step: "04",
    title: "Sign-off & Reporting",
    description: "Providing a summary test report with defect metrics, coverage data, and a formal quality sign-off for release.",
    icon: CheckCircle2,
    color: "from-orange-500 to-red-500",
    deliverables: ["Test Summary Report", "Defect Metrics", "Coverage Report", "QA Sign-off"]
  }
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let width = window.innerWidth; let height = window.innerHeight;
    const resize = () => { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; };
    window.addEventListener("resize", resize); resize();
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; hue: number; }[] = [];
    for (let i = 0; i < 40; i++) { particles.push({ x: Math.random() * width, y: Math.random() * height, size: 1 + Math.random() * 3, speedX: (Math.random() - 0.5) * 0.1, speedY: (Math.random() - 0.5) * 0.1, opacity: 0.1 + Math.random() * 0.2, hue: 200 + Math.random() * 60 }); }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.x += p.speedX + Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.01;
        p.y += p.speedY + Math.cos(Date.now() * 0.001 + p.x * 0.01) * 0.01;
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`; ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: "overlay" }} />;
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) => { if (!sectionRef.current) return; const r = sectionRef.current.getBoundingClientRect(); setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); };
    window.addEventListener("mousemove", h); return () => window.removeEventListener("mousemove", h);
  }, []);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 12 } } };

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-white overflow-hidden">
      <ParticleField />
      <motion.div animate={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.05) 0%, transparent 60%)` }} transition={{ type: "spring", stiffness: 30, damping: 20 }} className="absolute inset-0 pointer-events-none" />
      <motion.div animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/30 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="text-center mb-16">
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            HOW WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">EXECUTE QA</span>
          </motion.h2>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }} className="text-gray-500 text-lg max-w-2xl mx-auto mt-4">
            A systematic approach to deliver thorough manual quality coverage
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200 hidden lg:block" />
          {processSteps.map((step, index) => (
            <motion.div key={step.step} variants={itemVariants} className="relative group">
              <div className="absolute -top-3 left-6 z-10">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold shadow-lg`}>Step {step.step}</div>
              </div>
              <motion.div whileHover={{ y: -8 }} className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl group overflow-hidden h-full">
                <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color}`} style={{ backgroundSize: "200% 200%", animation: "gradient 3s ease infinite" }} />
                </div>
                <div className="relative z-10">
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-xl`}>
                    <step.icon className="w-7 h-7 text-white" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }} className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.color} blur-md`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.deliverables.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        <span className="text-[10px] text-gray-500">{item}</span>
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
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </section>
  );
}
