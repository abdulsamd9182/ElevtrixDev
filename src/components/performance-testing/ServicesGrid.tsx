"use client";

import { Users2, ArrowUpRight, Hourglass, Gauge, CloudRain, ServerCrash, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "Load Testing", description: "Measuring system behavior under expected user loads to ensure response times meet SLAs during normal daily peak traffic hours. We establish your baseline performance metrics.", icon: Users2, highlights: ["Virtual Users", "Ramp-up Profiles", "SLA Validation", "Response Time P95/P99", "Throughput Metrics"], techIcons: [Users2, Gauge, CloudRain, ArrowUpRight] },
  { title: "Stress Testing", description: "Taking your application past its normal capacity limits until it breaks, establishing your exact failure points and maximum operational thresholds.", icon: ArrowUpRight, highlights: ["Breaking Point", "Failure Mode Analysis", "Recovery Testing", "Max Throughput", "Error Rates"], techIcons: [ArrowUpRight, Users2, Gauge, Hourglass] },
  { title: "Endurance/Soak Testing", description: "Sustaining a significant load over extended durations (hours or days) to detect memory leaks, connection pool exhaustion, and gradual performance degradation.", icon: Hourglass, highlights: ["Memory Leak Detection", "Long Duration", "Connection Pool", "CPU Drift", "Thread Analysis"], techIcons: [Hourglass, Gauge, Users2, ServerCrash] },
  { title: "Spike Testing", description: "Simulating sudden, massive surges in traffic like a viral tweet or flash sale to observe whether your system recovers gracefully or collapses entirely under sudden load.", icon: Gauge, highlights: ["Traffic Spikes", "Auto-scaling Validation", "Recovery Time", "Queue Overflow", "CDN Behavior"], techIcons: [Gauge, ArrowUpRight, CloudRain, Users2] },
  { title: "Volume Testing", description: "Subjecting the database layer to massive amounts of data records to expose queries that slow down exponentially as table sizes grow into the millions.", icon: CloudRain, highlights: ["Database Volume", "Index Performance", "Query Optimization", "Row Count Scaling", "Pagination Testing"], techIcons: [CloudRain, ServerCrash, Gauge, Hourglass] },
  { title: "Scalability Assessment", description: "Verifying your cloud infrastructure's auto-scaling policies to ensure new instances spin up fast enough to handle incoming load without user-visible degradation.", icon: ServerCrash, highlights: ["AWS Auto-scaling", "Kubernetes HPA", "Instance Warmup", "Load Balancer Config", "Cost Optimization"], techIcons: [ServerCrash, CloudRain, Gauge, Users2] }
];

export default function ServicesGrid() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];
  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/20 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">PERFORMANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">DIAGNOSTICS</span></h2>
          <p className="text-gray-400 text-xs mt-2">Select a service to view details</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="lg:col-span-5 flex flex-col gap-2">
            {services.map((service, index) => (
              <motion.div key={service.title} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative p-3.5 bg-white border rounded-xl cursor-pointer transition-all duration-300 ${selectedIndex === index ? 'border-emerald-200 shadow-md shadow-emerald-500/10 bg-gradient-to-r from-emerald-50/50 to-transparent' : 'border-gray-100 hover:border-gray-200 hover:shadow-sm hover:bg-gray-50/50'}`}
                whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${selectedIndex === index ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}><service.icon className="w-4 h-4" /></div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-semibold transition-colors duration-300 ${selectedIndex === index ? 'text-emerald-600' : 'text-gray-700 font-medium'}`}>{service.title}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${selectedIndex === index ? 'bg-emerald-100 text-emerald-600' : 'bg-transparent text-gray-300'}`}><ChevronRight className="w-3.5 h-3.5" /></div>
                  </div>
                </div>
                {selectedIndex === index && <motion.div layoutId="activeIndicatorPerf" className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-emerald-600 rounded-r-full shadow-[0_0_12px_rgba(16,185,129,0.4)]" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ duration: 0.3 }} />}
              </motion.div>
            ))}
          </motion.div>
          <motion.div key={selectedIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50/30 border border-gray-100 rounded-2xl p-7 shadow-xl shadow-emerald-500/5 sticky top-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="relative flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-xl shadow-emerald-200/50"><selectedService.icon className="w-8 h-8 text-white" /></div>
              <div className="flex-1"><h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedService.title}</h3><div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-500" /><span className="text-xs text-gray-400">Performance Service</span></div></div>
            </div>
            <div className="relative mb-5"><p className="text-gray-600 text-sm leading-relaxed">{selectedService.description}</p></div>
            <div className="relative mb-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2"><span className="w-1 h-3 bg-emerald-500 rounded-full" />KEY HIGHLIGHTS</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.highlights.map((tag, i) => (<motion.span key={tag} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="px-3 py-1.5 bg-white border border-gray-100 text-gray-600 text-xs rounded-lg shadow-sm hover:border-emerald-200 hover:text-emerald-600 transition-colors cursor-default flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" />{tag}</motion.span>))}
              </div>
            </div>
            <div className="relative">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2"><span className="w-1 h-3 bg-teal-500 rounded-full" />TECHNOLOGIES WE USE</h4>
              <div className="flex items-center gap-3">
                {selectedService.techIcons.map((Icon, i) => (<motion.div key={i} whileHover={{ y: -2, scale: 1.1 }} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200 hover:border-emerald-200 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"><Icon className="w-5 h-5" /></motion.div>))}
                <span className="text-xs text-gray-400 ml-2">+ many more</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-100/30 to-teal-100/30 rounded-tl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
