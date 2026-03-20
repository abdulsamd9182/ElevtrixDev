"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  TrendingUp,
  ShieldCheck,
  FileText,
  Headphones,
  Route,
  Zap,
  ArrowLeft,
  Sparkles,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Globe,
  Mail
} from "lucide-react";
import Link from "next/link";

// --- Feature Section Component (2-column interactive layout) ---
type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
  iconColor: string;
  bgColor: string;
};

function FeatureSection({ features }: { features: Feature[] }) {
  const [active, setActive] = React.useState(0);
  const selected = features[active];
  const Icon = selected.icon;

  return (
    <section className="mb-20 md:mb-32">
      <div className="flex flex-col items-start mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
          Comprehensive <span className="text-blue-600">Dispatch Solutions</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
        {/* Left: Feature List */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl md:rounded-[2.5rem] shadow-sm overflow-hidden h-full flex flex-col">
          {features.map((feat, idx) => {
            const FIcon = feat.icon;
            const isActive = active === idx;
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-full flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3.5 text-left transition-all duration-300 relative group
                  ${isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-50 text-slate-700 border-b border-slate-100/60"
                  }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-white/20" : feat.bgColor}`}>
                  <FIcon size={14} className={isActive ? "text-white" : feat.iconColor} />
                </div>
                <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wide ${isActive ? "text-white" : "text-slate-800"}`}>
                  {feat.title}
                </span>
                {isActive && (
                  <ChevronRight size={14} className="text-white/60 ml-auto" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Detail Panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`${selected.bgColor} border border-slate-100 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-center`}
        >
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Icon size={180} className={selected.iconColor} />
          </div>
          <div className="relative z-10">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-md`}>
              <Icon size={28} className={selected.iconColor} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-3 sm:mb-4">
              {selected.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-md">
              {selected.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const LogiSmartSolutions = () => {
  const features = [
    {
      icon: Truck,
      title: "Load Booking",
      desc: "Finding the best freight loads that match your equipment and preferred routes to keep you moving profitably.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: TrendingUp,
      title: "Rate Negotiation",
      desc: "Experienced negotiation to secure competitive rates, maximizing your revenue per mile on every single haul.",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50/50"
    },
    {
      icon: ShieldCheck,
      title: "Credit Checks",
      desc: "Instant broker credit verification and payment history checks to protect you from non-paying entities.",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50/50"
    },
    {
      icon: FileText,
      title: "Admin Support",
      desc: "Total handling of BOLs, PODs, rate confirmations, and invoice submissions for a hands-free experience.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      desc: "Round-the-clock professional support for any issues, delays, or questions that arise during your operations.",
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50/50"
    },
    {
      icon: Route,
      title: "Profit Optimization",
      desc: "Strategic route planning and intelligent load selection to minimize deadhead miles and maximize earnings.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50/50"
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "⚛️", color: "bg-slate-900 text-white" },
    { name: "React", icon: "⚛️", color: "bg-blue-500 text-white" },
    { name: "Tailwind", icon: "🎨", color: "bg-cyan-500 text-white" },
    { name: "Framer", icon: "✨", color: "bg-slate-800 text-white" },
    { name: "Lucide", icon: "🛡️", color: "bg-emerald-500 text-white" },
    { name: "Vercel", icon: "▲", color: "bg-black text-white" },
  ];

  const problems = [
    "Inefficient manual load searching.",
    "Low-paying freight loads and tight margins.",
    "Stressful negotiations with brokers.",
    "Overwhelming administrative paperwork.",
    "Risk of non-paying brokers.",
    "Lack of 24/7 emergency support."
  ];

  const solutions = [
    "Strategic automated load booking.",
    "Expert rate negotiation for premium rates.",
    "Professional back-office admin management.",
    "Real-time broker credit checks.",
    "Dedicated 24/7 operational support.",
    "Smart route optimization to minimize deadhead."
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">

      {/* Full-Screen Hero */}
      <div className="relative h-[90vh] sm:h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />

        <nav className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl px-2 py-2 flex items-center gap-2 max-w-full overflow-hidden">
            <Link
              href="/#work"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all text-[10px] sm:text-xs font-bold tracking-tight border border-white/20 shrink-0"
            >
              <ArrowLeft size={14} />
              <span>PROJECTS</span>
            </Link>
            <div className="h-5 w-px bg-white/20 mx-1" />
            <div className="flex items-center gap-2 px-2 sm:px-3 whitespace-nowrap overflow-hidden">
              <span className="text-[9px] sm:text-[10px] font-black text-white/60 uppercase tracking-[0.2em] truncate">LogiSmart Solutions</span>
            </div>
          </div>
        </nav>

        <div className="relative z-10 text-center px-6 mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 sm:mb-8"
          >
            <Truck size={12} className="text-blue-400" />
            <span className="text-[9px] font-black text-white/80 uppercase tracking-[0.2em]">Logistics Management</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl"
          >
            LogiSmart <br className="sm:hidden" /> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium px-4"
          >
            Professional dispatch services that maximize revenue while minimizing administrative burdens.
            Strategic planning, premium negotiation, and 24/7 support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2 mt-8 sm:mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 sm:pt-2"
            >
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/50 rounded-full" />
            </motion.div>
            <span className="text-[8px] sm:text-[9px] text-white/30 uppercase tracking-widest font-bold">Scroll</span>
          </motion.div>
        </div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-8 pb-20 md:pb-24">

        {/* PROBLEM & SOLUTION SECTION */}
        <section className="mt-20 md:mt-32 mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Market <br className="sm:hidden" /> Challenges & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Our Strategy</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-red-50 rounded-2xl">
                    <AlertCircle size={20} className="text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">The Friction</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {problems.map((problem, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-red-500" />
                      </span>
                      <span className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-emerald-50 rounded-2xl">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">LogiSmart Impact</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {solutions.map((solution, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                      </span>
                      <span className="text-[13px] sm:text-sm text-slate-700 leading-relaxed font-medium">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visual Showcase */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mb-20 md:mb-32">
          <motion.div
            className="col-span-12 lg:col-span-8 aspect-video bg-slate-900 rounded-2xl md:rounded-[2.5rem] p-1 border-4 sm:border-8 border-white shadow-xl md:shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2670&auto=format&fit=crop')` }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-emerald-600/30 group-hover:opacity-0 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 group-hover:bg-black/10 transition-all duration-700 p-4 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 group-hover:scale-125 transition-all duration-700">
                <Truck size={32} className="text-white" />
              </div>
              <p className="font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">Global Logistics Network</p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 md:gap-4">
            <motion.div
              className="flex-1 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl md:rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TrendingUp size={32} className="mb-3 sm:mb-4 opacity-20" />
              <h4 className="font-black text-lg sm:text-xl mb-1 sm:mb-2">Revenue Surge</h4>
              <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed font-medium italic">partners see average 30% increase.</p>
            </motion.div>
            <motion.div
              className="flex-1 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl md:rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Zap size={32} className="mb-3 sm:mb-4 opacity-20" />
              <h4 className="font-black text-lg sm:text-xl mb-1 sm:mb-2">Quick Launch</h4>
              <p className="text-white/60 text-[11px] sm:text-xs leading-relaxed font-medium italic">Start within 24 hours.</p>
            </motion.div>
          </div>
        </div>

        {/* Feature Experience */}
        <FeatureSection features={features} />

        {/* Technical Architecture */}
        <section className="mb-20 md:mb-32">
          <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl md:rounded-[3rem] p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8 md:mb-12">Service <span className="text-blue-600">Foundation</span></h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-bold shadow-lg shadow-black/5 cursor-default transition-all`}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Public Assets */}
        <div className="mb-16 md:mb-24">
          <div className="bg-slate-900 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 sm:mb-10 flex items-center gap-3 relative z-10">
              <Globe size={24} className="text-emerald-400" />
              Digital Presence
            </h2>
            <div className="grid gap-3 sm:gap-4 relative z-10">
              <Link
                href="https://www.logismartsolutions.com/"
                target="_blank"
                className="flex items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl sm:rounded-3xl hover:brightness-110 transition-all group/link shadow-xl shadow-blue-600/20"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="block font-black text-[12px] sm:text-sm uppercase tracking-wide">Official Platform</span>
                    <span className="text-[9px] sm:text-[10px] text-white/60 font-medium whitespace-nowrap">LIVE WEBSITE DEPLOYMENT</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[8px] font-black tracking-widest bg-white/20 px-2 py-1 rounded-full uppercase">SECURE</span>
                  <ChevronRight size={16} className="opacity-40" />
                </div>
              </Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default LogiSmartSolutions;
