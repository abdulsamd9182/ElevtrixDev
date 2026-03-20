"use client";

import {
  Compass, MonitorSmartphone, Workflow, Globe, Settings2, Languages,
  ChevronRight, Sparkles, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Exploratory Testing",
    description: "Unscripted, creative testing where engineers actively learn, design, and execute tests simultaneously to find edge cases. Our QA engineers simulate real-world behavior to discover unexpected defects that scripted tests miss entirely.",
    icon: Compass,
    highlights: ["Unscripted Sessions", "Edge Case Discovery", "Risk-Based Approach", "Session Reporting", "Heuristic Methods"],
    techIcons: [Compass, Globe, Settings2, Workflow]
  },
  {
    title: "Cross-Device Compatibility",
    description: "Ensuring pixel-perfect consistency and flawless functionality across hundreds of real mobile devices, tablets, and browsers. We validate UI rendering, touch gestures, orientation changes, and platform-specific behavior.",
    icon: MonitorSmartphone,
    highlights: ["Real Devices", "Browser Matrix", "OS Versions", "Touch Testing", "Resolution Testing"],
    techIcons: [MonitorSmartphone, Globe, Settings2, Compass]
  },
  {
    title: "End-to-End Workflows",
    description: "Simulating complete user journeys from registration to checkout to guarantee smooth multi-step processes. We validate every transition, state change, and conditional branch within your critical business workflows.",
    icon: Workflow,
    highlights: ["User Journey Mapping", "Flow Validation", "State Testing", "Business Logic", "Regression Paths"],
    techIcons: [Workflow, Compass, Globe, Settings2]
  },
  {
    title: "Usability & UI Assessment",
    description: "Evaluating the application's intuitiveness, aesthetic consistency, and overall user experience from a human perspective. We assess navigation clarity, content readability, CTA prominence, and accessibility compliance.",
    icon: Globe,
    highlights: ["UX Evaluation", "Accessibility", "UI Consistency", "Content Review", "Navigation Audit"],
    techIcons: [Globe, Compass, MonitorSmartphone, Workflow]
  },
  {
    title: "Configuration Testing",
    description: "Validating software behavior under different hardware setups, OS versions, screen sizes, and network conditions to expose environment-specific bugs that only surface in unique combinations.",
    icon: Settings2,
    highlights: ["Hardware Configs", "OS Variants", "Network Conditions", "Screen Densities", "Locale Settings"],
    techIcons: [Settings2, Globe, Workflow, MonitorSmartphone]
  },
  {
    title: "Localization Testing",
    description: "Checking translation accuracy, cultural appropriateness, and UI adaptability to different languages and regions. We verify text truncation, RTL layouts, date formats, and culturally-specific content.",
    icon: Languages,
    highlights: ["Translation QA", "RTL Layouts", "Date Formats", "Currency Display", "Cultural Fit"],
    techIcons: [Languages, Globe, Settings2, Compass]
  }
];

export default function ServicesGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            MANUAL QA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">SOLUTIONS</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">Select a service to view details</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="lg:col-span-5 flex flex-col gap-2">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative p-3.5 bg-white border rounded-xl cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'border-blue-200 shadow-md shadow-blue-500/10 bg-gradient-to-r from-blue-50/50 to-transparent' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:bg-gray-50/50'}`}
                whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${selectedIndex === index ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                    <service.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-semibold transition-colors duration-300 ${selectedIndex === index ? 'text-blue-600' : 'text-gray-700 font-medium'}`}>{service.title}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${selectedIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-transparent text-gray-300 group-hover:bg-gray-100 group-hover:text-gray-400'}`}>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                {selectedIndex === index && (
                  <motion.div layoutId="activeIndicatorManual" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-600 rounded-r-full shadow-[0_0_12px_rgba(37,99,235,0.4)]" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: 0.3 }} />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div key={selectedIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50/30 border border-gray-100 rounded-2xl p-7 shadow-xl shadow-blue-500/5 lg:sticky lg:top-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-50" />
            <div className="relative flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-200/50">
                <selectedService.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedService.title}</h3>
                <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-blue-500" /><span className="text-xs text-gray-400">Manual QA Service</span></div>
              </div>
            </div>
            <div className="relative mb-5"><p className="text-gray-600 text-sm leading-relaxed">{selectedService.description}</p></div>
            <div className="relative mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2"><span className="w-1 h-3 bg-blue-500 rounded-full" />KEY HIGHLIGHTS</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.highlights.map((tag, i) => (
                  <motion.span key={tag} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="px-3 py-1.5 bg-white border border-gray-100 text-gray-600 text-xs rounded-lg shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />{tag}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="relative">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2"><span className="w-1 h-3 bg-cyan-500 rounded-full" />TOOLS WE USE</h4>
              <div className="flex items-center gap-3">
                {selectedService.techIcons.map((Icon, i) => (
                  <motion.div key={i} whileHover={{ y: -2, scale: 1.1 }} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
                <span className="text-xs text-gray-400 ml-2">+ many more</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-100/30 to-cyan-100/30 rounded-tl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
