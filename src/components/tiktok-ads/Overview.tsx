"use client";

import { 
  Zap, 
  Video, 
  TrendingUp, 
  Sparkles, 
  Smartphone,
  Music2,
  Heart,
  Target,
  BarChart3
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Viral Engagement", value: 450, suffix: "%+", icon: Zap },
  { label: "Creative Velocity", value: 12, suffix: "x", icon: Video },
  { label: "Conversion Lift", value: 65, suffix: "%+", icon: TrendingUp },
  { label: "CPM Savings", value: 30, suffix: "%", icon: Sparkles },
];

const features = [
  {
    title: "Vertical Engineering",
    description: "Designing hyper-native creatives that stop the scroll in milliseconds and drive massive action.",
    icon: Video,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Graph Algorithms",
    description: "Leveraging TikTok's interest engine to find your buyers with surgical precision and intent.",
    icon: Zap,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Spark Influence",
    description: "Transforming creator authenticity into high-performance ad vehicles that build trust at scale.",
    icon: Sparkles,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Mobile Ops",
    description: "Optimizing the path to purchase with dedicated mobile-first funnels and one-tap checkout loops.",
    icon: Smartphone,
    color: "from-indigo-500 to-blue-500"
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
        hue: 330 + Math.random() * 40, // Pink/Rose hues
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
        ctx.fillStyle = `hsla(${p.hue}, 70%, 75%, ${p.opacity})`;
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
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <ParticleCanvas mousePos={mousePos} />

      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-50/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-rose-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-6">
              REDEFINING <br />
              <span className="text-pink-600">
                VIRAL PERFORMANCE
              </span>
            </div>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              We engineer hyper-profitable TikTok advertising ecosystems. By combining scroll-stopping creative execution with behavioral interest modeling and vertical influence.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
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
                className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-pink-100 hover:shadow-xl transition-all duration-500"
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
