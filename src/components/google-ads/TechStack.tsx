"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import {
  SearchCode,
  LineChart,
  MousePointer2,
  Target,
  Sparkles,
  Zap,
  CheckCircle2,
  Cpu,
  Gauge,
  Workflow,
  BarChart,
  PieChart
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stacks = [
  {
    category: "Search & Display Platforms",
    items: ["Google Search Ads", "Google Shopping", "Performance Max", "YouTube Ads", "Display Network"],
    icon: SearchCode,
    color: "from-blue-500 to-indigo-500",
    expertise: 98,
    description: "Dominating the entire Google advertising landscape. We design sophisticated keyword architectures and multi-channel placements that capture user intent at every stage.",
    technologies: ["Bidding Strategies", "Responsive Search Ads", "Feed Optimization", "P-Max Signals", "Dynamic Display"],
    stats: { projects: "180+", experience: "8+ years" }
  },
  {
    category: "Measurement & Intelligence",
    items: ["GA4", "GTM", "Looker Studio", "Search Console", "Merchant Center"],
    icon: LineChart,
    color: "from-purple-500 to-pink-500",
    expertise: 96,
    description: "Absolute data integrity and tracking calibration. We ensure every conversion is attributed correctly, providing the raw power for Google's machine learning algorithms.",
    technologies: ["GA4 Calibration", "Event Tracking", "Offline Conversions", "Data Layer Design", "Dashboard Building"],
    stats: { projects: "120+", experience: "7+ years" }
  },
  {
    category: "Creative & LPO",
    items: ["Adobe Suite", "Unbounce", "Instapage", "Hotjar", "Figma"],
    icon: MousePointer2,
    color: "from-green-500 to-emerald-500",
    expertise: 92,
    description: "Conversion-optimized landing experiences. We bridge the gap between ad intent and final action through heatmapping, A/B testing, and high-trust visual communication.",
    technologies: ["Heatmapping", "LPO Strategy", "A/B Testing", "Visual Ad Design", "UX Copywriting"],
    stats: { projects: "95+", experience: "6+ years" }
  },
  {
    category: "Market & Strategy",
    items: ["Keyword Planner", "SEMrush", "SpyFu", "Auction Insights", "Trends"],
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    expertise: 94,
    description: "Strategic market positioning and competitor analysis. We identify untapped keyword opportunities and exploit weaknesses in competitor bidding environments.",
    technologies: ["Keyword Sculpting", "Competitor Audit", "Trend Analysis", "Auction Intelligence", "Budget Forecasting"],
    stats: { projects: "140+", experience: "7+ years" }
  }
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

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
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: 1 + Math.random() * 4,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: 0.1 + Math.random() * 0.3,
        hue: 200 + Math.random() * 60,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - dist) / 100 * 0.5;
          p.x += Math.cos(angle) * force * 2;
          p.y += Math.sin(angle) * force * 2;
        } else {
          p.x += (p.baseX - p.x) * 0.01;
          p.y += (p.baseY - p.y) * 0.01;
        }

        p.x += Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.1;
        p.y += Math.cos(Date.now() * 0.001 + p.x * 0.01) * 0.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
        ctx.fill();

        for (let j = 0; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 80 && p !== p2) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 70%, 65%, 0.05)`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 10;
    const rotateYValue = ((centerX - x) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);

    setGlowPosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(59,130,246,0.15) 0%, transparent 50%)`,
        }}
      />
      <div style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

function ProgressBar({ percentage, color }: { percentage: number; color: string }) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
      >
        <motion.div
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.div>
    </div>
  );
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

export default function TechStack() {
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
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.08) 0%, transparent 60%)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"
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
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 uppercase"
          >
            OUR GOOGLE ADS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              TECH STACK
            </span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="text-gray-500 text-xs mt-2 mx-auto max-w-xl"
          >
            Equipped with industry-leading tools to track every click, conversion, and dollar spent on Google Search.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-16"
          >
            {stacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                className="relative"
                variants={itemVariants}
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hidden md:flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${index % 2 === 0 ? '' : 'direction-rtl'}`}>
                  <div className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} flex justify-${index % 2 === 0 ? 'end' : 'start'}`}>
                    <div className="md:sticky md:top-24 w-full max-w-sm text-left">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stack.color} flex items-center justify-center shadow-2xl shadow-blue-500/20 group flex-shrink-0`}>
                          <stack.icon className="w-7 h-7 text-white relative z-10" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stack.color} blur-xl`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {stack.category}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Gauge className="w-3.5 h-3.5 text-blue-500" />
                            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">PROFICIENCY {stack.expertise}%</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <TiltCard>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-xl group overflow-hidden text-left"
                      >
                        <div className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stack.color} animate-gradient`} />
                        </div>

                        <div className="relative z-10">
                          <p className="text-gray-600 text-[11px] leading-relaxed mb-4">
                            {stack.description}
                          </p>

                          <div className="flex gap-3 mb-4">
                            <div className="flex items-center gap-1">
                              <Cpu className="w-3 h-3 text-blue-500" />
                              <span className="text-[9px] font-bold text-gray-500">{stack.stats.projects} PROJECTS</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-blue-500" />
                              <span className="text-[9px] font-bold text-gray-500">{stack.stats.experience} EXPERIENCE</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-2">
                              <span className="w-1 h-2 bg-blue-500 rounded-full" />
                              KEY TOOLS
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {stack.technologies.slice(0, 4).map((tech) => (
                                <motion.span
                                  key={tech}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  className="px-2 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[9px] font-bold text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:border-transparent transition-all duration-200 cursor-default shadow-sm"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                              <span className="text-[8px] text-gray-400 self-center">+{stack.technologies.length - 4}</span>
                            </div>
                          </div>

                          <div className="mt-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Proficiency</span>
                              <span className="text-[8px] font-black text-blue-600">{stack.expertise}%</span>
                            </div>
                            <ProgressBar percentage={stack.expertise} color={stack.color} />
                          </div>
                        </div>

                        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${stack.color} opacity-0 group-hover:opacity-20 rounded-tl-2xl transition-opacity duration-500`} />
                      </motion.div>
                    </TiltCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
        .direction-rtl {
          direction: rtl;
        }
        .direction-rtl > div {
          direction: ltr;
        }
      `}</style>
    </section>
  );
}
