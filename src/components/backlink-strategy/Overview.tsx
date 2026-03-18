"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  Link2, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Users,
  Sparkles,
  ChevronRight
} from "lucide-react";

const stats = [
  { label: "Domain Authority", value: 85, suffix: "+", icon: ShieldCheck },
  { label: "Link Retention", value: 99, suffix: "%", icon: Link2 },
  { label: "Organic Reach", value: 400, suffix: "%", icon: TrendingUp },
  { label: "Elite Placements", value: 1000, suffix: "+", icon: Target },
];

const features = [
  {
    title: "Authority Outreach",
    description: "Multi-layered campaigns targeting top-tier publishers to secure high-equity backlink placements.",
    icon: Users,
  },
  {
    title: "Equity Engineering",
    description: "Scientifically acquiring links that pass maximum domain trust signals to your SEO nodes.",
    icon: ShieldCheck,
  },
  {
    title: "Niche Placements",
    description: "Strategic placement of high-value content on industry-relevant domains for referral traffic.",
    icon: Search,
  },
  {
    title: "Juice Architecture",
    description: "Optimizing the distribution of link equity across your site's siloes for maximum impact.",
    icon: Link2,
  }
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; size: number; sx: number; sy: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        sx: (Math.random() - 0.5) * 0.3,
        sy: (Math.random() - 0.5) * 0.3,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(245, 158, 11, 0.2)";
      ctx.strokeStyle = "rgba(245, 158, 11, 0.1)";

      particles.forEach((p, i) => {
        p.x += p.sx;
        p.y += p.sy;

        if (p.x < 0 || p.x > width) p.sx *= -1;
        if (p.y < 0 || p.y > height) p.sy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default function Overview() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleCanvas />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-amber-600" />
              <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">Foundation & Trust</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-8 uppercase tracking-tight">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">AUTHORITY SIGNALS</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 font-medium">
              Backlinks are the hard currency of search authority. We don't just "get links"—we engineer a web of trust that signals absolute topical dominance to search engine algorithms, ensuring your domain stands as a lighthouse of industry expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-xl shadow-amber-500/5 group hover:border-amber-200 transition-colors"
                >
                  <div className="text-2xl font-black text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-amber-500/5 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/50 rounded-bl-[3rem] pointer-events-none transition-transform group-hover:scale-110" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center mb-6 shadow-xl shadow-amber-200 group-hover:rotate-6 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest">
                    Strategy Detail <ChevronRight className="w-3 h-3" />
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

