"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/automated-testing/Hero";
import Overview from "@/components/automated-testing/Overview";
import ServicesGrid from "@/components/automated-testing/ServicesGrid";
import IndustriesServed from "@/components/automated-testing/IndustriesServed";
import TechStack from "@/components/automated-testing/TechStack";
import Process from "@/components/automated-testing/Process";

export default function AutomatedTestingPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#06b6d4]/30">
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
