"use client";

import {
  HeartPulse,
  ShoppingBag,
  Banknote,
  Dumbbell,
  Car,
  Sparkles,
  ArrowUpRight,
  Stethoscope,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    name: "Health & Fitness",
    description: "Workout trackers, telemedicine apps, and patient portal integrations with deep HealthKit/Google Fit sync.",
    icon: HeartPulse,
    color: "from-blue-600 to-cyan-500",
    stats: "20+ Apps"
  },
  {
    name: "Retail & Commerce",
    description: "Mobile-first shopping experiences, loyalty programs, and POS integrations with Apple Pay & Google Pay.",
    icon: ShoppingBag,
    color: "from-indigo-600 to-purple-500",
    stats: "35+ Apps"
  },
  {
    name: "Fintech & Banking",
    description: "Secure fintech applications, budget trackers, and digital wallets with biometric authentication.",
    icon: Banknote,
    color: "from-blue-700 to-indigo-600",
    stats: "15+ Apps"
  },
  {
    name: "Media & Sports",
    description: "Live score apps, streaming platforms, and fan engagement applications with real-time push notifications.",
    icon: Dumbbell,
    color: "from-indigo-500 to-blue-600",
    stats: "10+ Apps"
  },
  {
    name: "Fleet & Logistics",
    description: "Fleet management, ride-sharing apps, and real-time delivery tracking with background location services.",
    icon: Car,
    color: "from-cyan-600 to-blue-700",
    stats: "12+ Apps"
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

    for (let i = 0; i < 40; i++) particles.push(new Particle());

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
      className="perspective-1000 h-full"
    >
      {children}
    </motion.div>
  );
}

export default function IndustriesServed() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden font-sans">
      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="border-l-4 border-blue-600 pl-6 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            INDUSTRIES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              WE TRANSFORM
            </span>
          </h2>
          
          <p className="text-gray-500 text-base mt-2 max-w-xl">
            Delivering specialized mobile development solutions tailored to the 
            unique demands of diverse global sectors.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden py-10">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...industries, ...industries].map((item, idx) => (
                <div key={idx} className="w-[380px] group">
                  <TiltCard>
                    <div className="relative h-[380px] p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col overflow-hidden">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rounded-bl-[4rem]`} />
                      
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl shadow-blue-100/50 group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed mb-auto">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-50 relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                            <Smartphone className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{item.stats}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

