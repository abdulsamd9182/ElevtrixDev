"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Calculator,
  Gamepad2,
  Layout,
  Bot,
  ExternalLink,
  Github,
  Sparkles,
  Zap,
  ArrowLeft,
  Heart,
  Code,
  Star,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Target,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

// --- Feature Section Component (2-column interactive layout) ---
type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
  iconColor: string;
  bgColor: string;
  color: string;
};

function FeatureSection({ features }: { features: Feature[] }) {
  const [active, setActive] = React.useState(0);
  const selected = features[active];
  const Icon = selected.icon;

  return (
    <section className="mb-32">
      <div className="flex flex-col items-start mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
          Experience <span className="text-blue-600">Peak Performance</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Left: Feature List */}
        <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-[2.5rem] shadow-sm overflow-hidden h-full flex flex-col">
          {features.map((feat, idx) => {
            const FIcon = feat.icon;
            const isActive = active === idx;
            return (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-all duration-300 relative group
                  ${isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-50 text-slate-700 border-b border-slate-100/60"
                  }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-white/20" : feat.bgColor}`}>
                  <FIcon size={14} className={isActive ? "text-white" : feat.iconColor} />
                </div>
                <span className={`text-xs font-black uppercase tracking-wide ${isActive ? "text-white" : "text-slate-800"}`}>
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
          className={`${selected.bgColor} border border-slate-100 rounded-[2.5rem] p-12 relative overflow-hidden min-h-0 flex flex-col justify-center`}
        >
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Icon size={180} className={selected.iconColor} />
          </div>
          <div className="relative z-10">
            <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md`}>
              <Icon size={32} className={selected.iconColor} />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">
              {selected.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg max-w-md">
              {selected.desc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const PortfolioProject = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Workout Wizard",
      desc: "Interactive SVG muscle diagram with 800+ exercises, equipment filters, and posture images.",
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: Calculator,
      title: "Health Calculators",
      desc: "BMI, Ideal Body Weight, Macros, Hydration tracker with downloadable reports.",
      color: "from-emerald-500/10 to-emerald-600/10",
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50/50"
    },
    {
      icon: Gamepad2,
      title: "Focus Games",
      desc: "4 mind games: Focus Strike, Neural Recall, Reflex Pro, Zen Flow.",
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50/50"
    },
    {
      icon: Layout,
      title: "Kanban Board",
      desc: "Drag & drop task management with Supabase sync.",
      color: "from-amber-500/10 to-amber-600/10",
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50/50"
    },
    {
      icon: Bot,
      title: "AI Chatbot",
      desc: "24/7 Botpress AI assistant for fitness guidance.",
      color: "from-rose-500/10 to-rose-600/10",
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50/50"
    },
    {
      icon: Zap,
      title: "Unique UI/UX",
      desc: "Vertical snap scrolling, full-screen navbar, custom cursor, motivational marquee.",
      color: "from-cyan-500/10 to-cyan-600/10",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50/50"
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "⚛️", color: "bg-slate-900 text-white" },
    { name: "React", icon: "⚛️", color: "bg-blue-500 text-white" },
    { name: "Tailwind", icon: "🎨", color: "bg-cyan-500 text-white" },
    { name: "Framer", icon: "✨", color: "bg-slate-800 text-white" },
    { name: "Supabase", icon: "☁️", color: "bg-emerald-500 text-white" },
    { name: "Botpress", icon: "🤖", color: "bg-purple-600 text-white" },
    { name: "Vercel", icon: "▲", color: "bg-black text-white" },
  ];



  const problems = [
    "Gym memberships are expensive & locations are far",
    "No proper guidance leads to wrong posture & injuries",
    "Social anxiety & discomfort in public gyms",
    "Lack of motivation & boring workout routines",
    "Mental health ignored in traditional fitness apps",
    "Multiple apps needed for different features"
  ];

  const solutions = [
    "Free platform accessible anywhere, anytime",
    "Interactive SVG diagram with 800+ guided exercises",
    "Home workouts with bodyweight options",
    "4 focus games to keep mind engaged",
    "Kanban board to track progress & stay motivated",
    "All-in-one: calculators, wizard, games, chatbot"
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">

      {/* Full-Screen Hero with Background Image */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white" />

        {/* Modern Navigation inside hero */}
        <nav className="absolute top-6 left-0 right-0 z-50 flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl px-2 py-2 flex items-center gap-2">
            <Link
              href="/#work"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all text-xs font-bold tracking-tight border border-white/20"
            >
              <ArrowLeft size={14} />
              <span>PROJECTS</span>
            </Link>
            <div className="h-5 w-px bg-white/20 mx-1" />
            <div className="flex items-center gap-2 px-3">
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">noTrainer</span>
            </div>
          </div>
        </nav>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em]">Revolutionary Fitness</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none text-white drop-shadow-2xl"
          >
            noTrainer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            The ultimate digital companion for your fitness journey. Advanced analytics,
            interactive tracking, and peak performance tools in one seamless experience.
          </motion.p>

          {/* Scroll Cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-2 mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
            </motion.div>
            <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">Scroll</span>
          </motion.div>
        </div>
      </div>

      {/* White Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 -mt-8 pb-24">

        {/* PROBLEM & SOLUTION SECTION */}
        <section className="mt-32 mb-32">
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Problem & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Solution</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-red-50 rounded-2xl">
                    <AlertCircle size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">The Problem</h3>
                </div>
                <ul className="space-y-4">
                  {problems.map((problem, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solution Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-emerald-50 rounded-2xl">
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Our Solution</h3>
                </div>
                <ul className="space-y-4">
                  {solutions.map((solution, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed font-medium">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Stylized Visual Showcase */}
        <div className="grid grid-cols-12 gap-4 mb-32">
          <motion.div
            className="col-span-12 lg:col-span-8 aspect-video bg-slate-900 rounded-[2.5rem] p-1 border-8 border-white shadow-2xl relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop')` }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-emerald-600/30 group-hover:opacity-0 transition-opacity duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 group-hover:bg-black/10 transition-all duration-700">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 group-hover:scale-125 transition-all duration-700">
                <Dumbbell size={32} className="text-white" />
              </div>
              <p className="font-black text-xs uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">Dynamic Performance Engine</p>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <motion.div
              className="flex-1 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Calculator size={32} className="mb-4 opacity-20" />
              <h4 className="font-black text-xl mb-2">Health Matrix</h4>
              <p className="text-white/60 text-xs leading-relaxed">Precision calculations for your body's specific needs.</p>
            </motion.div>
            <motion.div
              className="flex-1 bg-gradient-to-br from-purple-600 to-purple-500 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Gamepad2 size={32} className="mb-4 opacity-20" />
              <h4 className="font-black text-xl mb-2">Neural Focus</h4>
              <p className="text-white/60 text-xs leading-relaxed">Sharpen your mind with high-intensity focus games.</p>
            </motion.div>
          </div>
        </div>

        {/* Feature Experience - 2 Column Interactive */}
        <FeatureSection features={features} />

        {/* Technical Mastery */}
        <section className="mb-32">
          <div className="bg-white/90 backdrop-blur-sm border border-white/60 rounded-[3rem] p-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Technical <span className="text-emerald-600">Architecture</span></h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`${tech.color} px-6 py-3 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-lg shadow-black/5 cursor-default transition-all`}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Public Assets (Standalone) */}
        <div className="mb-24">
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <h2 className="text-2xl font-black uppercase tracking-tight mb-10 flex items-center gap-3 relative z-10">
              <ExternalLink size={24} className="text-emerald-400" />
              Public Assets
            </h2>
            <div className="grid gap-4 relative z-10">
              <Link
                href="https://github.com/abdulsamd9182/noTrainer-Fyp"
                target="_blank"
                className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group/link"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="block font-black text-sm uppercase tracking-wide">Infrastructure</span>
                    <span className="text-[10px] text-white/40 font-medium">GITHUB REPOSITORY</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-white/20 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://no-trainer-theta.vercel.app/"
                target="_blank"
                className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl hover:brightness-110 transition-all group/link shadow-xl shadow-blue-600/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="block font-black text-sm uppercase tracking-wide">Live Platform</span>
                    <span className="text-[10px] text-white/60 font-medium">PRODUCTION DEPLOYMENT</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-black tracking-widest bg-white/20 px-2 py-1 rounded-full uppercase">SECURE</span>
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

export default PortfolioProject;