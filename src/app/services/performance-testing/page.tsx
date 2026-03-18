"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/performance-testing/Hero";
import Overview from "@/components/performance-testing/Overview";
import ServicesGrid from "@/components/performance-testing/ServicesGrid";
import IndustriesServed from "@/components/performance-testing/IndustriesServed";
import TechStack from "@/components/performance-testing/TechStack";
import Process from "@/components/performance-testing/Process";

export default function PerformanceTestingPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#10b981]/30">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesGrid />
        <IndustriesServed />
        <TechStack />
        <Process />
      </main>
    </div>
  );
}
