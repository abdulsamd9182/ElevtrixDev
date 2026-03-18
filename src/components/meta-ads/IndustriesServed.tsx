"use client";

import {
  ShoppingBag,
  Building2,
  GraduationCap,
  MapPin,
  HeartPulse,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    name: "E-Commerce & DTC",
    description: "Scaling high-volume sales through dynamic product ads, catalog sales, and high-ROAS funnel architectures.",
    icon: ShoppingBag,
    color: "from-blue-600 to-indigo-600",
    stats: "4.5x Avg. ROAS"
  },
  {
    name: "Real Estate",
    description: "Securing high-quality buyer/seller leads using specialized ad formats and precision geo-targeting.",
    icon: Building2,
    color: "from-purple-600 to-pink-600",
    stats: "35% Lead Quality"
  },
  {
    name: "Education & Coaching",
    description: "Filling webinars and maximizing course enrollments with tailored remarketing and authority-building content.",
    icon: GraduationCap,
    color: "from-emerald-600 to-teal-600",
    stats: "60% Enroll Lift"
  },
  {
    name: "Local Services",
    description: "Driving hyper-local lead generation and foot traffic directly to your door with map-aware campaigns.",
    icon: MapPin,
    color: "from-orange-600 to-red-600",
    stats: "2x Foot Traffic"
  },
  {
    name: "Health & Fitness",
    description: "Acquiring qualified membership signups and patient inquiries predictably through empathy-first ad creative.",
    icon: HeartPulse,
    color: "from-red-600 to-rose-600",
    stats: "50% Signup Boost"
  }
];

// Particle component for background effect
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
    }[] = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: 0.1 + Math.random() * 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
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
      style={{ mixBlendMode: "soft-light" }}
    />
  );
}

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * 5;
    const rotateYValue = ((centerX - x) / centerX) * 5;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
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
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function IndustriesServed() {
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
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.03) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10">
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
          className="mb-10 text-center"
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
            INDUSTRIES WE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              SCALE
            </span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="text-gray-400 text-xs mt-2 mx-auto max-w-2xl"
          >
            Specialized Meta advertising expertise delivering measurable ROI across high-growth industry sectors.
          </motion.p>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max py-8"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              whileHover={{ transition: { duration: 100 } }}
            >
              {[...industries, ...industries].map((item, idx) => (
                <motion.div
                  key={`${item.name}-${idx}`}
                  whileHover={{ y: -8 }}
                  className="group relative w-[320px] flex flex-col"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                  />

                  <TiltCard className="relative p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl h-full flex flex-col">
                    <motion.div
                      animate={{
                        rotate: [0, 90, 180, 270, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    </motion.div>

                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto shadow-xl`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-base font-bold text-gray-900 mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300"
                    >
                      {item.name}
                    </motion.h3>

                    <p className="text-gray-500 text-xs leading-relaxed font-normal text-center mb-6 flex-grow min-h-[48px]">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-center gap-1 mt-auto">
                      <span className="text-[10px] font-semibold text-gray-400">
                        {item.stats}
                      </span>
                      <Sparkles className="w-3 h-3 text-blue-400" />
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
