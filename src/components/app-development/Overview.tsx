"use client";

import { Globe, Smartphone, Zap, ShieldCheck, Target, BarChart3, Fingerprint, Layers } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "OS Architecture",
    description: "Expert engineering for both Swift/iOS and Kotlin/Android ecosystems.",
    icon: Smartphone,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Hybrid Protocol",
    description: "High-performance deployment via Flutter and React Native architectures.",
    icon: Layers,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Engine Speed",
    description: "Optimized 60fps fluid interfaces with specialized battery conservation.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Biometric Lab",
    description: "Advanced FaceID/TouchID protocols with encrypted hardware security.",
    icon: Fingerprint,
    color: "from-emerald-600 to-teal-500",
  }
];

// Simple Counter component
function Counter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= numericValue) {
          clearInterval(interval);
          return numericValue;
        }
        return prev + (numericValue / 50);
      });
    }, 20);
    return () => clearInterval(interval);
  }, [numericValue]);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 flex-1"
    >
      <div className="text-3xl font-black text-gray-900 mb-1">
        {count.toFixed(1)}{value.includes('%') ? '%' : value.match(/[a-zA-Z]+/) || ''}
      </div>
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}

export default function Overview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move handler
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

  // Particles effect
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

    const particleCount = 40;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
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
        // Mouse repulsion
        if (mousePos.x && mousePos.y) {
          const dx = p.x - mousePos.x;
          const dy = p.y - mousePos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const angle = Math.atan2(dy, dx);
            const force = (80 - dist) / 80 * 0.3;
            p.x += Math.cos(angle) * force * 3;
            p.y += Math.sin(angle) * force * 3;
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

        // Glow for larger particles
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, 2 * Math.PI);
          ctx.fillStyle = `hsla(${p.hue}, 60%, 70%, 0.03)`;
          ctx.fill();
        }
      }

      time += 0.005;
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, [mousePos]);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-white overflow-hidden">
      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "soft-light" }}
      />

      {/* Subtle gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="lg:col-span-5"
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-6">
              MOBILE <br />
              <span className="text-blue-600">
                SOVEREIGNTY
              </span>
            </div>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Engineering world-class mobile architectures that combine 
              intuitive design with technical absolute performance.
            </p>

            <div className="flex gap-6">
              <Counter value="99.9%" label="Crash-Free Engineering" />
              <Counter value="60ms" label="Latency Protocol" />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] transition-all duration-500"
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

                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

