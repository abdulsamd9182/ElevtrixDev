"use client";

import {
  Workflow,
  Search,
  TrendingUp,
  BarChart,
  Target,
  ShoppingCart,
  Layers,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Zap,
  PieChart,
  RefreshCcw
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Search Advertising",
    description: "We engineer laser-targeted Search campaigns that capture customers at the exact moment of intent. Our strategy focuses on quality score optimization and high-conversion ad copy to ensure you dominate peak interest queries.",
    icon: Search,
    highlights: ["Keyword Research", "Dynamic Search Ads", "SKAGs Strategy", "Negative Sculpting", "Quality Score Focus"],
    techIcons: [Search, Target, TrendingUp, BarChart]
  },
  {
    title: "Google Shopping",
    description: "Maximize your product visibility with optimized shopping feeds and Performance Max campaigns. We bridge the gap between product catalog and final checkout using data-driven asset optimization.",
    icon: ShoppingCart,
    highlights: ["Feed Optimization", "Merchant Center", "P-Max Strategy", "ROAS Bidding", "Catalog Sync"],
    techIcons: [ShoppingCart, Workflow, Zap, BarChart]
  },
  {
    title: "Display & YouTube",
    description: "Engage your audience with stunning visual ads across millions of websites and high-impact YouTube placements designed to drive interest, brand recall, and mid-funnel consideration.",
    icon: Layers,
    highlights: ["Visual Targeting", "Contextual Ads", "In-Stream Video", "Responsive Assets", "Brand Awareness"],
    techIcons: [Layers, Target, Sparkles, Workflow]
  },
  {
    title: "Smart Retargeting",
    description: "Stay top-of-mind with previous visitors. We deploy strategic remarketing sequences that bring high-intent users back to your site to complete their purchase or inquiry, maximizing conversion rates.",
    icon: Target,
    highlights: ["Dynamic Remarketing", "RLSA Strategy", "Sequential Messaging", "Cart Recovery", "Custom Segments"],
    techIcons: [Target, RefreshCcw, Zap, Layers]
  },
  {
    title: "Analytics & Monitoring",
    description: "Flawless setup of GA4 and server-side tracking. We ensure absolute data accuracy for better machine learning optimization and clear attribution of your marketing results in real-time.",
    icon: PieChart,
    highlights: ["GA4 Full Setup", "Server-Side Tracking", "UTM Architecture", "Event Modeling", "ROI Attribution"],
    techIcons: [PieChart, BarChart, Workflow, Zap]
  }
];


export default function ServicesSplit() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = () => {
    stopRotation();
    intervalRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % services.length);
    }, 5000);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startRotation();
    } else {
      stopRotation();
    }
    return () => stopRotation();
  }, [isHovered, selectedIndex]);

  const selectedService = services[selectedIndex];

  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-16 bg-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 uppercase">
            OUR GOOGLE ADS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">
            Select a service to view specialized expertise
          </p>
        </motion.div>

        {/* Split Layout: Left List + Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left List - Clickable Services */}
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
                    ? 'border-blue-200 shadow-md shadow-blue-500/10 bg-gradient-to-r from-blue-50/50 to-transparent'
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:bg-gray-50/50'
                  }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${selectedIndex === index
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200'
                      : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                    }`}>
                    <service.icon className="w-4.5 h-4.5" />
                  </div>

                  {/* Service Name */}
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-semibold transition-colors duration-300 ${selectedIndex === index ? 'text-blue-600' : 'text-gray-700 font-medium'
                      }`}>
                      {service.title}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${selectedIndex === index
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-transparent text-gray-300 group-hover:bg-gray-100 group-hover:text-gray-400'
                      }`}>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Active indicator line */}
                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeIndicatorGAds"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-600 rounded-r-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Card - Full Service Details */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50/30 border border-gray-100 rounded-2xl p-7 shadow-xl shadow-blue-500/5 lg:sticky lg:top-24 overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-50" />

            {/* Header with icon and title */}
            <div className="relative flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-200/50">
                <selectedService.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {selectedService.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-xs text-gray-400">Strategic G-Ads Service</span>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="relative mb-5">
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Key Highlights Section */}
            <div className="relative mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-blue-500 rounded-full" />
                CAMPAIGN HIGHLIGHTS
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.highlights.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 bg-white border border-gray-100 text-gray-600 text-xs rounded-lg shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Technologies & Expertise Section */}
            <div className="relative">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-indigo-500 rounded-full" />
                CAPABILITIES & TOOLS
              </h4>
              <div className="flex items-center gap-3">
                {selectedService.techIcons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
                <span className="text-xs text-gray-400 ml-2">+ intent tracking</span>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100/30 to-indigo-100/30 rounded-tl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
