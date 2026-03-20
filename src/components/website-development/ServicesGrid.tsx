"use client";

import {
  Code2,
  ShoppingCart,
  FileText,
  Layout,
  Paintbrush,
  Link2,
  Settings,
  BarChart4,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Custom Web Development",
    description: "We build custom websites tailored to your unique business requirements and growth objectives. From simple landing pages to complex enterprise portals, we deliver high-performance, scalable solutions using modern frameworks like React, Next.js, and Node.js. Our development process ensures clean code, optimal performance, and future-proof architecture that can scale as your business grows.",
    icon: Code2,
    highlights: ["React/Next.js", "Node.js", "Python", "Performance Optimized", "Scalable Architecture"],
    techIcons: [Globe, Zap, Code2, Settings]
  },
  {
    title: "E-Commerce Development",
    description: "Powerful e-commerce websites on Shopify, Magento, WooCommerce, and custom architectures. We create seamless shopping experiences with secure payment gateways, inventory management, and mobile-optimized interfaces that drive conversions. Our e-commerce solutions include product catalog management, shopping cart optimization, checkout flow improvement, and integration with major payment providers.",
    icon: ShoppingCart,
    highlights: ["Shopify", "Magento", "WooCommerce", "Payment Integration", "Inventory Management"],
    techIcons: [ShoppingCart, Zap, Shield, Globe]
  },
  {
    title: "Content Management Systems",
    description: "Flexible CMS platforms like WordPress, Sanity, and Contentful for intuitive management. Empower your team to update content easily while maintaining design consistency and performance standards. We implement headless CMS architectures for maximum flexibility, allowing you to deliver content across web, mobile, and other digital channels from a single backend.",
    icon: FileText,
    highlights: ["WordPress", "Sanity.io", "Contentful", "Headless CMS", "Custom Post Types"],
    techIcons: [FileText, Globe, Code2, Settings]
  },
  {
    title: "Web Application Development",
    description: "Complex, scalable web apps using React, Next.js, and Node.js for ultimate performance. From dashboards to SaaS platforms, we build robust applications with real-time features and cloud integration. Our web apps are built with security best practices, responsive design, and optimized for search engines, ensuring they perform flawlessly under heavy load.",
    icon: Layout,
    highlights: ["Real-time Apps", "SaaS Platforms", "Cloud Integration", "Scalable", "Microservices"],
    techIcons: [Layout, Zap, Code2, Globe]
  },
  {
    title: "UI/UX Design",
    description: "Stunning, intuitive interfaces focused on seamless user experience and accessibility. Our design process combines user research, wireframing, and high-fidelity prototyping to create products users love. We focus on user-centered design principles, ensuring your digital product is not only beautiful but also functional, accessible, and optimized for user engagement.",
    icon: Paintbrush,
    highlights: ["User Research", "Wireframing", "Prototyping", "Accessibility", "User Testing"],
    techIcons: [Paintbrush, Sparkles, Layout, Globe]
  },
  {
    title: "API Integration & Development",
    description: "Seamless integration of third-party services and custom API architectures. We connect your applications with payment gateways, CRMs, social platforms, and build RESTful or GraphQL APIs. Our API development focuses on security, documentation, and performance, ensuring your systems communicate efficiently and reliably with external services and internal components.",
    icon: Link2,
    highlights: ["RESTful APIs", "GraphQL", "Third-party Integration", "Microservices", "API Security"],
    techIcons: [Link2, Code2, Zap, Settings]
  },
  {
    title: "Website Maintenance & Support",
    description: "Ongoing maintenance, critical security updates, and multi-tier optimization. We ensure your website remains secure, up-to-date, and performing at its peak with 24/7 monitoring and support. Our maintenance packages include regular backups, security patches, performance audits, and priority support to keep your digital presence running smoothly.",
    icon: Settings,
    highlights: ["Security Updates", "Performance Monitoring", "Backup Solutions", "24/7 Support", "Bug Fixes"],
    techIcons: [Settings, Shield, Zap, Globe]
  },
  {
    title: "SEO & Digital Marketing Integration",
    description: "SEO best practices integrated throughout the development lifecycle for maximum reach. From technical SEO to content strategy, we build websites that rank higher and attract more visitors. We implement schema markup, optimize page speed, ensure mobile-friendliness, and structure content for search engines while maintaining excellent user experience.",
    icon: BarChart4,
    highlights: ["Technical SEO", "Analytics Setup", "Content Strategy", "Conversion Optimization", "Speed Optimization"],
    techIcons: [BarChart4, Globe, Zap, Sparkles]
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
            WEBSITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">SOLUTIONS</span>
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
                  <span className="text-xs text-gray-400">Premium Service</span>
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
                TECHNOLOGIES WE USE
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