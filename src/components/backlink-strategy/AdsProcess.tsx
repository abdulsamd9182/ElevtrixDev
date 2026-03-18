"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  FileSearch, 
  Network, 
  BarChart4, 
  Zap, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Prospect Intelligence",
    desc: "We identify high-relevance, high-DA publishers using proprietary discovery algorithms and link-gap analysis.",
    icon: FileSearch,
    color: "from-amber-600 to-orange-600"
  },
  {
    number: "02",
    title: "Creative Outreach Architecture",
    desc: "Crafting bespoke pitch frameworks that secure editorial interest and establish long-term placement authority.",
    icon: Users,
    color: "from-orange-600 to-amber-700"
  },
  {
    number: "03",
    title: "Equity Injection & Deployment",
    desc: "Securing live placements and managing the distribution of link juice across your domain's strategic nodes.",
    icon: Zap,
    color: "from-amber-700 to-amber-600"
  },
  {
    number: "04",
    title: "Portfolio Stability Monitoring",
    desc: "Continuous monitoring of link status and indexing to ensure your domain authority remains in an upward trajectory.",
    icon: BarChart4,
    color: "from-amber-600 to-orange-700"
  }
];

export default function AdsProcess() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-[10px] font-black tracking-[0.2em] text-amber-600 uppercase">Our Authority Path</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 uppercase"
          >
            OUR LINK{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
              BUILDING ECOSYSTEM
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-amber-100 transition-all duration-500 shadow-xl shadow-amber-500/5 h-full">
                <div className="absolute top-6 right-8 text-4xl font-black text-gray-50 group-hover:text-amber-50 transition-colors">
                  {step.number}
                </div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-lg shadow-amber-200`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black text-amber-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Pipeline Status <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
