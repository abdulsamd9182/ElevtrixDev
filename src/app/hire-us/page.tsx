"use client";

import Navbar from "@/components/Navbar";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Clock, Shield, DollarSign, Calendar, ChevronDown, X, Monitor, Smartphone, Palette, Search, Megaphone, Gauge, Lock, Code, Bug } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Particle background component
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
      hue: number;
    }[] = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: 0.2 + Math.random() * 0.2,
        hue: 220 + Math.random() * 40,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.speedX + Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.05;
        p.y += p.speedY + Math.cos(Date.now() * 0.001 + p.x * 0.01) * 0.05;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 50%, ${p.opacity})`;
        ctx.fill();

        for (let j = 0; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100 && p !== p2) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 70%, 50%, 0.08)`;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

// Confetti effect
function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 1,
            x: Math.random() * 100 + "%",
            y: -20,
            rotate: 0,
          }}
          animate={{
            y: "120%",
            rotate: 360 * 2,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
          }}
          className={`absolute w-1.5 h-1.5 rounded-full ${["bg-blue-600", "bg-purple-600", "bg-cyan-600", "bg-pink-600"][i % 4]
            }`}
        />
      ))}
    </div>
  );
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function HireUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const serviceCategories = [
    {
      name: "Development",
      icon: Code,
      services: [
        { id: "website-development", name: "Website Development", icon: Monitor },
        { id: "app-development", name: "App Development", icon: Smartphone },
        { id: "ui-ux-design", name: "UX/UI Design", icon: Palette },
      ]
    },
    {
      name: "Quality Assurance",
      icon: Bug,
      services: [
        { id: "manual-testing", name: "Manual Testing", icon: CheckCircle2 },
        { id: "automated-testing", name: "Automated Testing", icon: Gauge },
        { id: "performance-testing", name: "Performance Testing", icon: Gauge },
        { id: "security-testing", name: "Security Testing", icon: Lock },
      ]
    },
    {
      name: "Ad Campaigns",
      icon: Megaphone,
      services: [
        { id: "meta-ads", name: "Meta Ads", icon: Megaphone },
        { id: "google-ads", name: "Google Ads", icon: Search },
        { id: "tiktok-ads", name: "Tiktok Ads", icon: Smartphone },
      ]
    },
    {
      name: "SEO Strategies",
      icon: Search,
      services: [
        { id: "technical-seo", name: "Technical SEO", icon: Gauge },
        { id: "onpage-seo", name: "On-Page SEO", icon: Search },
        { id: "backlink-strategy", name: "Backlink Strategy", icon: Sparkles },
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/abdulsamadkhan9182@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#fafafa] min-h-screen text-[#0a0a0a] overflow-hidden flex flex-col relative">
      <ParticleField />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-purple-100 rounded-full blur-[150px] pointer-events-none"
      />

      <Navbar />

      <section className="flex-1 flex items-center px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center w-full">

          {/* Left Side: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight text-gray-900">
              Ready to Scale <br />
              <span className="text-blue-600">
                Your Digital Future?
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-medium">
              Join the elite businesses leveraging our high-performance systems. From concept to scale, we engineer your success. Our team responds within 24 hours.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-10">
              {[
                { label: "Response Time", value: "< 24 Hours", icon: Clock },
                { label: "Confidentiality", value: "100% Secure", icon: Shield },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Premium Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full max-w-md"
          >
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-white/40 backdrop-blur-3xl border border-white/50 p-5 md:p-6 rounded-[2rem] shadow-2xl overflow-hidden">
                {submitted && <Confetti />}

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20"
                    >
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-black mb-2 text-gray-900">Application Sent!</h3>
                    <p className="text-gray-600 text-xs mb-6 max-w-xs mx-auto">
                      Our strategists are reviewing your project. Expect a response within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-all font-black text-gray-700"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
                        <input id="name" required name="name" type="text" placeholder="John Wick" className="w-full bg-black/5 border border-black/5 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all placeholder:text-gray-400 text-gray-900" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                        <input id="email" required name="email" type="email" placeholder="john@continental.com" className="w-full bg-black/5 border border-black/5 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all placeholder:text-gray-400 text-gray-900" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="service-trigger" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Service Required</label>
                      <button
                        id="service-trigger"
                        type="button"
                        onClick={() => setIsServiceModalOpen(true)}
                        className="w-full bg-black/5 border border-black/5 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all text-left flex items-center justify-between group/btn cursor-pointer"
                      >
                        <span className={selectedService ? "text-gray-900 font-medium" : "text-gray-400"}>
                          {selectedService ? serviceCategories.flatMap(c => c.services).find(s => s.id === selectedService)?.name : "Select a Service"}
                        </span>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover/btn:text-blue-600 transition-colors" />
                      </button>
                      <input type="hidden" name="service" value={selectedService} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="budget" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Estimated Budget</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input id="budget" required name="budget" type="text" placeholder="$5,000" className="w-full bg-black/5 border border-black/5 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all placeholder:text-gray-400 text-gray-900" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="timeline" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Timeline</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <select id="timeline" name="timeline" defaultValue="immediate" className="w-full bg-black/5 border border-black/5 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all text-gray-600 appearance-none cursor-pointer">
                            <option value="immediate" className="bg-white">Immediate Start</option>
                            <option value="1-3-months" className="bg-white">1 — 3 Months</option>
                            <option value="3-6-months" className="bg-white">3 — 6 Months</option>
                            <option value="flexible" className="bg-white">Flexible</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="details" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Project Objective</label>
                      <textarea id="details" required name="details" rows={2} placeholder="Describe the problem we're solving..." className="w-full bg-black/5 border border-black/5 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500/30 focus:bg-white transition-all resize-none placeholder:text-gray-400 text-gray-900"></textarea>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 p-2 bg-red-100 border border-red-200 rounded-xl text-red-600 text-[10px] font-bold uppercase tracking-wider">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {error}
                      </div>
                    )}

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-600/20 disabled:opacity-50 group text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Initiate Project
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>

                    <p className="text-[7px] text-center text-gray-400 font-bold uppercase tracking-widest">* Signature EleytrixDev NDA included</p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selection Modal */}
      <AnimatePresence>
        {isServiceModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsServiceModalOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-8 pb-4 flex items-center justify-between border-b border-black/[0.03]">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight text-left">Select a Service</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 text-left">What can we build for you?</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsServiceModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center gap-2 pb-2 border-b border-black/[0.02]">
                        <category.icon className="w-4 h-4 text-blue-600" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{category.name}</h3>
                      </div>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              setSelectedService(service.id);
                              setIsServiceModalOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300 text-left group ${
                              selectedService === service.id
                                ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20"
                                : "bg-white/50 border-black/[0.03] hover:bg-white hover:border-blue-200"
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                              selectedService === service.id ? "bg-white/20" : "bg-gray-50 group-hover:bg-blue-50"
                            }`}>
                              <service.icon className={`w-4 h-4 ${
                                selectedService === service.id ? "text-white" : "text-gray-400 group-hover:text-blue-600"
                              }`} />
                            </div>
                            <div>
                                <p className={`text-sm font-bold tracking-tight ${selectedService === service.id ? "text-white" : "text-gray-900"}`}>
                                    {service.name}
                                </p>
                                <p className={`text-[10px] font-medium leading-tight ${selectedService === service.id ? "text-white/70" : "text-gray-400"}`}>
                                    Expert solutions
                                </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 md:p-6 bg-gray-50/50 border-t border-black/[0.03] text-center">
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Can't find what you're looking for? Message us directly.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}