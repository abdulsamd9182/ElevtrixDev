"use client";

import { Search, LayoutGrid, ShoppingBag, Cpu, PlayCircle, Target, BarChart3, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Search Ads Management",
    description: "Capturing purchase-ready intent with meticulously crafted responsive search ads.",
    icon: Search
  },
  {
    title: "Performance Max Campaigns",
    description: "Leveraging Google's full inventory with AI-driven asset testing for maximum reach.",
    icon: Cpu
  },
  {
    title: "Shopping & Product Listing Ads",
    description: "Dominating e-commerce search results with optimized Merchant Center feeds.",
    icon: ShoppingBag
  },
  {
    title: "Display & Retargeting",
    description: "Recovering lost visitors across Google's 3 million+ display network partners.",
    icon: LayoutGrid
  },
  {
    title: "YouTube Video Ads",
    description: "Skippable and non-skippable video campaigns delivering brand impact at scale.",
    icon: PlayCircle
  },
  {
    title: "Demand Gen Campaigns",
    description: "Visually immersive ads across Gmail, Discover, and YouTube to drive new demand.",
    icon: Target
  },
  {
    title: "Conversion Rate Optimization",
    description: "Landing page analysis and A/B testing to increase Quality Scores and lower CPA.",
    icon: BarChart3
  },
  {
    title: "Account Audits & Restructuring",
    description: "Deep-dive analysis to eliminate budget waste and rebuild campaign architecture.",
    icon: Workflow
  }
];

export default function ServicesCarousel() {
  return (
    <section className="relative w-full border-t border-white/5 py-24">
      <div className="absolute inset-0 bg-[url('/web-dev-services-bg.png')] bg-cover bg-center bg-no-repeat opacity-15 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a] z-0" />

      <div className="relative max-w-7xl mx-auto px-8 md:px-16 mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-black tracking-[0.2em] text-white uppercase text-center md:text-left mb-4 md:mb-0">OUR GOOGLE ADS SERVICES</h2>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden z-10 px-8 md:px-16">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

        <div className="relative w-full">
          <motion.div
            className="flex w-max gap-6 pb-8"
            animate={{ x: [0, "-50%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          >
            {[...services, ...services].map((service, idx) => (
              <motion.div
                key={`${service.title}-${idx}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] p-8 bg-[#111111] border border-[#222222] rounded-3xl hover:border-[#3b82f6]/60 transition-all duration-500 relative overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: (idx % 8) * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-8 hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-[#3b82f6]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 leading-tight hover:text-[#3b82f6] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium mt-auto">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
