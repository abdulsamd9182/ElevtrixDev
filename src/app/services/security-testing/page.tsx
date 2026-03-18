"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/security-testing/Hero";
import Overview from "@/components/security-testing/Overview";
import ServicesGrid from "@/components/security-testing/ServicesGrid";
import IndustriesServed from "@/components/security-testing/IndustriesServed";
import TechStack from "@/components/security-testing/TechStack";
import Process from "@/components/security-testing/Process";

export default function SecurityTestingPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#ef4444]/30">
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
