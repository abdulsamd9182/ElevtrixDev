"use client";

import {
  Server,
  Zap,
  Globe2,
  Code2,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Database,
  Globe,
  Settings,
  Search
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Server Architecture",
    description: "We engineer high-performance server configurations and edge caching strategies to minimize Time to First Byte (TTFB) and ensure maximum uptime during traffic surges. Our methodology focuses on server-side rendering (SSR) and edge-based delivery to eliminate the distance between your content and the user.",
    icon: Server,
    highlights: ["Edge Networks", "SSR/SSG Tuning", "Nginx/Vercel", "Surge Protection", "Cache Logic"],
    techIcons: [Database, Globe, Zap, Settings],
    stats: "Sub-50ms TTFB"
  },
  {
    title: "Core Web Vitals",
    description: "Surgical optimization of LCP, FID, and CLS scores. We refactor critical render paths and implement advanced asset loading strategies to achieve green scores across the board. Our process involves image format evolution, critical CSS extraction, and aggressive JS bundle splitting for maximum load velocity.",
    icon: Zap,
    highlights: ["LCP/CLS Tuning", "JS Bundling", "Critical CSS", "Next/Image", "Asset Preloading"],
    techIcons: [Zap, Globe, Code2, Settings],
    stats: "100/100 Mobile"
  },
  {
    title: "Crawl Management",
    description: "We optimize your crawl budget by eliminating duplicate content risks and engineering XML sitemap architectures that force bots to prioritize high-value URLs. We manage the robots.txt logic and canonicalization rules to ensure search engines crawl your site with surgical efficiency.",
    icon: Globe2,
    highlights: ["Crawl Auditing", "XML Automation", "Bot Prioritization", "Canonical Logic", "Duplicate Filter"],
    techIcons: [Globe, Search, Code2, Settings],
    stats: "10x Index Speed"
  },
  {
    title: "Structured Data",
    description: "We implement deep JSON-LD schema architectures that enable search engines to understand complex product data, pricing, and organizational relationships for rich results. Our structured data mapping covers everything from Product and Review schemas to complex Organizational Knowledge Graphs.",
    icon: Code2,
    highlights: ["JSON-LD", "Knowledge Graphs", "Rich Results", "Price/Review Sync", "Schema Mapping"],
    techIcons: [Code2, Database, Sparkles, Globe],
    stats: "Rich Result Mastery"
  },
  {
    title: "Technical Security",
    description: "Ensuring your SEO is protected by protocol-level security. We audit SSL handshakes, CSP headers, and secure redirection logic to prevent authority leakage. We focus on HSTS implementation and content security policies to build rank-worthy trust at the infrastructure level.",
    icon: ShieldCheck,
    highlights: ["SSL Handshakes", "HSTS Policy", "CSP Headers", "Redir Integrity", "WAF Config"],
    techIcons: [ShieldCheck, Zap, Globe, Settings],
    stats: "Enterprise Protect"
  }
];

export default function ServicesGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 uppercase">
            TECHNICAL SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">
            Select a service to view details
          </p>
        </motion.div>

        {/* Split Layout: Left List + Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left List */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                }
              }
            }}
            className="lg:col-span-5 flex flex-col gap-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative p-3.5 bg-white border rounded-xl cursor-pointer transition-all duration-300 ${selectedIndex === index
                    ? 'border-emerald-200 shadow-md shadow-emerald-500/10 bg-gradient-to-r from-emerald-50/50 to-transparent'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:bg-gray-50/50'
                  }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${selectedIndex === index
                      ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-200'
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                    }`}>
                    <service.icon className="w-4.5 h-4.5" />
                  </div>

                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-semibold transition-colors duration-300 ${selectedIndex === index ? 'text-emerald-600' : 'text-gray-700 font-medium'
                      }`}>
                      {service.title}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${selectedIndex === index
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-transparent text-gray-300 group-hover:bg-gray-100 group-hover:text-gray-400'
                      }`}>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeIndicatorTechSEO"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-emerald-600 rounded-r-full shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Card */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50/30 border border-gray-100 rounded-2xl p-7 shadow-xl shadow-emerald-500/5 sticky top-24 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-50" />

            <div className="relative flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-200/50">
                <selectedService.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedService.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs text-gray-400">Advanced Infrastructure</span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">Target Metric</span>
                <span className="text-2xl font-black text-gray-900 tracking-tighter">{selectedService.stats}</span>
              </div>
            </div>

            <div className="relative mb-5">
              <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-emerald-600 pl-6">
                {selectedService.description}
              </p>
            </div>

            <div className="relative mb-5">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-emerald-500 rounded-full" />
                CORE FOCUS AREAS
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.highlights.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 bg-white border border-gray-100 text-gray-600 text-[10px] font-bold rounded-lg shadow-sm hover:border-emerald-200 hover:text-emerald-600 transition-colors cursor-default flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="relative">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-teal-500 rounded-full" />
                TECH STACK
              </h4>
              <div className="flex items-center gap-3">
                {selectedService.techIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 hover:border-emerald-200 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
                <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Enterprise Ready</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-100/30 to-teal-100/30 rounded-tl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

