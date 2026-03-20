"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ChevronRight,
  Globe,
  ShieldCheck,
  Search,
  Megaphone,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

// Types
interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const footerLinks = {
  services: [
    { name: "Technical Development", href: "/#services", icon: Globe },
    { name: "Ad Campaigns", href: "/#services", icon: Megaphone },
    { name: "Software Quality", href: "/#services", icon: ShieldCheck },
    { name: "SEO Strategies", href: "/#services", icon: Search },
  ],
  company: [
    { name: "Our Work", href: "/#work" },
    { name: "Contact", href: "/hire-us" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/elevtrix", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/elevtrix", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/elevtrix", icon: Github },
];

const contactInfo = [
  { icon: Mail, text: "support@elevytrixdev.com", href: "mailto:support@elevytrixdev.com", isLink: true },
  { icon: Clock, text: "Mon-Fri 9am-6pm PT", isLink: false },
];

// Simple particle effect for footer
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

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

    const particles: Particle[] = [];

    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: 0.05 + Math.random() * 0.1,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Wave motion
        p.x += Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.02;
        p.y += Math.cos(Date.now() * 0.001 + p.x * 0.01) * 0.02;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-black/5 py-16 px-6 overflow-hidden">
      {/* Particle Background */}
      <ParticleField />

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-1/4 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none"
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
        className="absolute -bottom-24 right-1/4 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand Identity */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <motion.span
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-black tracking-tight text-black group-hover:text-[#3b82f6] transition-colors inline-block"
              >
                Elevtrix<span className="text-[#3b82f6] italic">Dev</span>
              </motion.span>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
              Architecting the next generation of digital dominance. We engineer high-performance systems for businesses that refuse to settle for average.
            </p>

            {/* Trust badge */}
            <div className="flex items-center gap-2 pt-1">
              <Sparkles className="w-4 h-4 text-[#3b82f6]/60" />
              <span className="text-[10px] font-medium text-gray-400">Trusted by 50+ businesses</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#3b82f6] hover:border-[#3b82f6] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href={link.href} className="text-gray-600 hover:text-black text-[13px] font-medium transition-colors flex items-center gap-2">
                      <span className="w-5 h-5 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-[#3b82f6]/10 transition-colors">
                        <link.icon className="w-3 h-3 text-gray-500 group-hover:text-[#3b82f6] transition-colors" />
                      </span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href={link.href} className="text-gray-600 hover:text-black text-[13px] font-medium transition-colors flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Get in Touch</h4>
            <div className="space-y-2">
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-7 h-7 rounded-lg bg-white border border-black/5 flex items-center justify-center group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] shadow-sm transition-all duration-300"
                    >
                      <item.icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="text-[11px] font-medium">{item.text}</span>
                  </div>
                );

                if (item.isLink && item.href) {
                  return (
                    <motion.a
                      key={item.text}
                      href={item.href}
                      whileHover={{ x: 3 }}
                      className="block group"
                    >
                      {content}
                    </motion.a>
                  );
                }

                return (
                  <div key={item.text} className="group">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Gradient separator */}
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4" />

            {/* Email highlight */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-xs font-medium text-gray-700">support@elevytrixdev.com</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar with animated separator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[9px] font-medium text-gray-400 hover:text-[#3b82f6] transition-colors uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3b82f6] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-300">
              © {currentYear} ElevtrixDev Systems
            </span>
            <ArrowUpRight className="w-3 h-3 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}