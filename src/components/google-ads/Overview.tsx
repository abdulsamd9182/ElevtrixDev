"use client";

import { 
  Search, 
  TrendingUp, 
  Layers, 
  ShieldCheck,
  Target,
  BarChart3,
  Zap,
  Trophy,
  PieChart
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Search Accuracy", value: 99, suffix: "%", icon: Search },
  { label: "Conversion Lift", value: 55, suffix: "%+", icon: TrendingUp },
  { label: "Lead Quality", value: 85, suffix: "%+", icon: Target },
  { label: "Ads Managed", value: 5, suffix: "M+", icon: BarChart3 },
];

const features = [
  {
    title: "Intent Mapping",
    description: "Finding the exact search queries your customers use to target high-intent buyers with surgical precision.",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Smart Bidding",
    description: "AI-powered bid strategies that maximize conversions within every budget constraint across all Google properties.",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Full Funnel Strategy",
    description: "From Search to Shopping and P-Max, we design unified Google ecosystems for consistent, multi-channel growth.",
    icon: Layers,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Fraud Protection",
    description: "Deploying multi-layered click-fraud detection tools to protect your ad budget from invalid and malicious traffic.",
    icon: ShieldCheck,
    color: "from-orange-500 to-red-500"
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(0)}{suffix}
    </span>
  );
}

function ParticleCanvas({ mousePos }: { mousePos: { x: number; y: number } }) {
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: 0.1 + Math.random() * 0.2,
        hue: 200 + Math.random() * 40,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        if (mousePos.x && mousePos.y) {
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - dist) / 100 * 0.2;
            p.x += Math.cos(angle) * force * 5;
            p.y += Math.sin(angle) * force * 5;
          }
        }

        p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.01;
        p.y += p.speedY + Math.cos(time + p.x * 0.01) * 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, ${p.opacity})`;
        ctx.fill();
      }

      time += 0.005;
      requestAnimationFrame(animate);
    };
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ mixBlendMode: "soft-light" }}
    />
  );
}

export default function Overview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-white overflow-hidden">
      <ParticleCanvas mousePos={mousePos} />

      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-6">
              REDEFINING <br />
              <span className="text-blue-600">
                SEARCH PERFORMANCE
              </span>
            </div>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We architect Google Ads ecosystems that capture high-intent traffic. Using AI-powered bidding and elite keyword architectures, we transform search visibility into profitable growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
                  <div className="text-2xl font-black text-gray-900 mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
