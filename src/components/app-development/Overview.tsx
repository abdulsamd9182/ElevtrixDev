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
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Engine Speed",
    description: "Optimized 60fps fluid interfaces with specialized battery conservation.",
    icon: Zap,
    color: "from-blue-700 to-indigo-600",
  },
  {
    title: "Biometric Lab",
    description: "Advanced FaceID/TouchID protocols with encrypted hardware security.",
    icon: Fingerprint,
    color: "from-cyan-600 to-blue-700",
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
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );
}

export default function Overview() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden font-sans">
      <ParticleCanvas />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Protocol Intelligence</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-[1.2] mb-6">
              MOBILE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                SOVEREIGNTY
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Engineering world-class mobile architectures that combine 
              intuitive design with technical absolute performance.
            </p>

            <div className="flex gap-4">
              <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 flex-1">
                <div className="text-3xl font-black text-gray-900 mb-1">99.9%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Crash-Free Engineering</div>
              </div>
              <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 flex-1">
                <div className="text-3xl font-black text-blue-600 mb-1">60ms</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Latency Protocol</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <TiltCard key={idx}>
                <div className="group h-full p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-blue-100 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] transition-all duration-500 overflow-hidden relative">
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors group-hover:text-blue-600">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <BarChart3 className="w-5 h-5 text-blue-100" />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

