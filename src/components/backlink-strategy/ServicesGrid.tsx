"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Zap, 
  Users, 
  Globe2, 
  Network, 
  FileEdit, 
  SearchCode
} from "lucide-react";

const services = [
  {
    id: "outreach",
    title: "High-Caliber Outreach",
    shortDesc: "Accessing elite publisher networks.",
    icon: Users,
    fullDesc: "We build bespoke outreach architectures that bypass gatekeepers and secure placements on high-DA domains that your competitors can't touch.",
    features: [
      "Custom Persona Engineering",
      "Publisher Relationship Mgmt",
      "Manual High-Vetting Process",
      "Whitelist Access Control"
    ],
    tech: ["Hunter.io", "BuzzStream", "In-House CRM"],
    stats: "DR 70+ Targeted"
  },
  {
    id: "content",
    title: "Asset-Driven Guesting",
    shortDesc: "Content worth linking to.",
    icon: FileEdit,
    fullDesc: "We produce high-value editorial assets that publishers are eager to feature, ensuring your backlink stays live and continues to pass equity for years.",
    features: [
      "Editorial Asset Creation",
      "Data-Driven Storyboarding",
      "Ghostwriting Excellence",
      "Natural Anchor Blending"
    ],
    tech: ["Grammarly Business", "Ahrefs Content Explorer"],
    stats: "Indefinite Link Life"
  },
  {
    id: "authority",
    title: "Authority Scaling",
    shortDesc: "Aggressive equity distribution.",
    icon: Network,
    fullDesc: "We engineer a multi-layered link profile that distributes equity strategically across your site's highest-converting pages and categories.",
    features: [
      "Tiered Link Architecture",
      "Brand Anchor Balancing",
      "Domain Trust Engineering",
      "Velocity Management"
    ],
    tech: ["Majestic SEO", "Moz Pro", "Internal Scripts"],
    stats: "Top 1% Profile Health"
  },
  {
    id: "gap",
    title: "Link GAP Analysis",
    shortDesc: "Reverse-engineering the leaders.",
    icon: SearchCode,
    fullDesc: "We surgically analyze the link profiles of your top-ranking competitors to identify and steal their most valuable authority sources.",
    features: [
      "Overlap Discovery",
      "Equity source Hijacking",
      "Backlink Profile Stress-Test",
      "Unlinked Brand Mention Fix"
    ],
    tech: ["Semrush Link Gap", "Ahrefs Site Audit"],
    stats: "Absolute Advantage"
  },
  {
    id: "global",
    title: "Global Integration",
    shortDesc: "International authority signals.",
    icon: Globe2,
    fullDesc: "Securing backlinks from country-specific TLDs and international publishers to build ranking signals for various global markets.",
    features: [
      "ccTLD Placement Targeting",
      "Multilingual Outreach",
      "Geo-Relevant Anchor Logic",
      "Hreflang Sync Integration"
    ],
    tech: ["Global IP Proxies", "Localization AI"],
    stats: "Global Visibility"
  }
];

export default function ServicesGrid() {
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
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 z-10 font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 uppercase">
            LINK BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">SERVICES</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-gray-400 uppercase">
            <div className="w-8 h-px bg-amber-200" />
            Elite Authority Propagation
            <div className="w-8 h-px bg-amber-200" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Service List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                onClick={() => setSelectedIndex(index)}
                className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-500 ${selectedIndex === index
                    ? 'bg-white border border-amber-100 shadow-xl shadow-amber-500/10'
                    : 'bg-transparent border border-transparent hover:bg-gray-50'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${selectedIndex === index
                      ? 'bg-gradient-to-br from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-amber-50 text-amber-400'
                    }`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-black uppercase tracking-tight transition-colors duration-500 ${selectedIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {service.title}
                    </h3>
                    <p className="text-[10px] font-medium text-gray-400 mt-0.5">{service.shortDesc}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all duration-500 ${selectedIndex === index ? 'text-amber-600 translate-x-0' : 'text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </div>

                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeBacklinkIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-amber-600 rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Details Card */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-2xl shadow-amber-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 rounded-bl-[5rem] pointer-events-none" />
              
              <div className="flex justify-between items-start mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-amber-600 flex items-center justify-center shadow-xl shadow-amber-200">
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{selectedService.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em]">Authority layer</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-2xl font-black text-gray-900 leading-none">{selectedService.stats}</p>
                </div>
              </div>

              <div className="mb-10 relative">
                <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-amber-100 pl-8 group-hover:border-amber-600 transition-colors">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    Strategy Nodes
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                    Pipeline Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tech.map((tool, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-tight shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Campaign</span>
                </div>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-colors shadow-lg shadow-gray-200">
                  Deploy Layer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
