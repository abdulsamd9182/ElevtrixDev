"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  Search, 
  Map, 
  Layers, 
  Cpu, 
  MousePointer2, 
  LineChart,
  Target,
  ArrowRight
} from "lucide-react";

const stats = [
  { label: "Content Relevance", value: 95, suffix: "%", icon: Search },
  { label: "Intent Match", value: 100, suffix: "%", icon: Layers },
  { label: "CTR Improvement", value: 40, suffix: "%+", icon: MousePointer2 },
  { label: "Keyword Rankings", value: 500, suffix: "+", icon: LineChart },
];

const features = [
  {
    title: "Semantic Content Architecture",
    description: "Establishing topical authority by engineering content hubs that answer complex user queries.",
    icon: Map,
  },
  {
    title: "Entity-Based Optimization",
    description: "Aligning your content with Google's Knowledge Graph via entity-relationship mapping.",
    icon: Cpu,
  },
  {
    title: "Intent Alignment",
    description: "Ensuring page structure matches real-world search intent to maximize conversion velocity.",
    icon: Target,
  },
  {
    title: "Equity Distribution",
    description: "Strategically routing internal link equity across your domain to boost high-value priority nodes.",
    icon: Layers,
  }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer: any;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              timer = window.requestAnimationFrame(step);
            }
          };
          timer = window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => {
      observer.disconnect();
      if (timer) window.cancelAnimationFrame(timer);
    };
  }, [value]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />;
};

export default function Overview() {
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
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <ParticleCanvas />

      {/* Interactive Background Glow */}
      <motion.div
        animate={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.08) 0%, transparent 50%)`,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="text-[10px] font-black tracking-[0.3em] text-indigo-600 uppercase mb-4">Semantic Intelligence</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-8">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                TOPICAL AUTHORITY
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              We move beyond simple keywords. Our On-Page strategy engineers deep relevance across your entire domain architecture, ensuring search engines recognize you as the ultimate authority in your niche.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="group p-6 bg-white border border-gray-100 rounded-3xl hover:border-indigo-100 transition-all duration-300 shadow-xl shadow-indigo-500/5 hover:-translate-y-1">
                  <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  <div className="w-8 h-1 bg-indigo-100 mt-4 rounded-full group-hover:w-full group-hover:bg-indigo-600 transition-all duration-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white/50 backdrop-blur-sm border border-gray-100 rounded-[2.5rem] hover:border-indigo-200 transition-all duration-500 shadow-xl shadow-indigo-500/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
                  
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    System Protocol <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

