"use client";

import {
  Code2,
  ShieldCheck,
  Zap,
  Smartphone,
  Globe,
  Link2,
  Settings,
  BarChart4,
  ChevronRight,
  Sparkles,
  Shield,
  CheckCircle2,
  Target,
  FileText,
  HardDrive
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Automated Testing",
    description: "Accelerate your release cycles with robust test automation frameworks. We build scalable automation suites using tools like Selenium, Cypress, and Playwright, ensuring your applications remain bug-free with every deployment while reducing manual testing efforts.",
    icon: Target,
    highlights: ["Selenium", "Cypress/Playwright", "CI/CD Integration", "Regression Testing", "Data-Driven Tests"],
    techIcons: [Code2, Zap, Settings, Globe]
  },
  {
    title: "Manual Quality Assurance",
    description: "Comprehensive exploratory testing by expert QA engineers who think like your users. We dive deep into complex workflows, validate usability, and catch subtle edge cases that automated scripts might miss, ensuring a flawless end-user experience.",
    icon: ShieldCheck,
    highlights: ["Exploratory Testing", "Usability Testing", "Functional Testing", "Cross-Browser", "Defect Tracking"],
    techIcons: [ShieldCheck, FileText, Globe, Smartphone]
  },
  {
    title: "Performance & Load Testing",
    description: "Guarantee your application's stability under extreme user loads. We simulate thousands of concurrent users to identify bottlenecks, optimize server response times, and prevent embarrassing crashes during peak traffic events.",
    icon: Zap,
    highlights: ["JMeter", "k6", "Stress Testing", "Scalability Limits", "Capacity Planning"],
    techIcons: [Zap, BarChart4, HardDrive, Settings]
  },
  {
    title: "Security Penetration Testing",
    description: "Protect your users' data and your brand's reputation. Our certified ethical hackers perform rigorous vulnerability assessments and penetration tests to identify and remediate security flaws before malicious actors can exploit them.",
    icon: Shield,
    highlights: ["OWASP Top 10", "Vulnerability Scanning", "Penetration Testing", "Security Audits", "Compliance (HIPAA/GDPR)"],
    techIcons: [Shield, ShieldCheck, Code2, Globe]
  },
  {
    title: "API & Integration Testing",
    description: "Ensure seamless communication between your microservices and third-party integrations. We validate API responses, payloads, status codes, and security protocols to ensure your service-oriented architecture functions perfectly.",
    icon: Link2,
    highlights: ["Postman", "REST Assured", "GraphQL Testing", "Contract Testing", "Authentication Flow"],
    techIcons: [Link2, Code2, Zap, Settings]
  },
  {
    title: "Mobile App Testing",
    description: "Deliver a 5-star mobile experience across all devices and OS versions. We test native, hybrid, and PWA applications on real devices and emulators to guarantee flawless performance, UI consistency, and battery efficiency.",
    icon: Smartphone,
    highlights: ["Appium", "Espresso/XCUITest", "Real Device Testing", "Network Simulation", "UI/UX Validation"],
    techIcons: [Smartphone, Zap, Target, Shield]
  },
  {
    title: "Web Accessibility Testing",
    description: "Make your digital products accessible to everyone, ensuring compliance with WCAG, ADA, and Section 508 standards. We perform both automated scans and manual audits using screen readers and keyboard navigation.",
    icon: Globe,
    highlights: ["WCAG 2.1 Compliance", "Axe Core", "Screen Reader Testing", "Keyboard Navigation", "Color Contrast"],
    techIcons: [Globe, CheckCircle2, Target, FileText]
  },
  {
    title: "QA Process Consulting",
    description: "Transform your internal quality processes from a bottleneck into a competitive advantage. We assess your current SDLC, implement Shift-Left testing strategies, and establish metrics to measure and improve your engineering quality.",
    icon: Settings,
    highlights: ["Shift-Left Strategy", "Process Audit", "Test Management", "Tool Selection", "Quality Metrics"],
    techIcons: [Settings, BarChart4, Target, Sparkles]
  }
];


export default function ServicesSplit() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedService = services[selectedIndex];

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
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

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            QA & TESTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">SOLUTIONS</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2">
            Select a service to view details
          </p>
        </motion.div>

        {/* Split Layout: Left List + Right Card - Centered Vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left List - Clickable Services - ONLY NAMES (5 columns) */}
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

                  {/* ONLY Service Name */}
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
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-600 rounded-r-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Card - Full Service Details (7 columns) - Centered */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50/30 border border-gray-100 rounded-2xl p-7 shadow-xl shadow-blue-500/5 sticky top-24 overflow-hidden"
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
                  <span className="text-xs text-gray-400">Premium Testing Process</span>
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
                KEY HIGHLIGHTS
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

            {/* Technologies Section */}
            <div className="relative">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-3 bg-indigo-500 rounded-full" />
                TOOLS WE USE
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
                <span className="text-xs text-gray-400 ml-2">+ many more</span>
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
