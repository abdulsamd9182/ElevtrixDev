"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/backlink-strategy/Hero";
import Overview from "@/components/backlink-strategy/Overview";
import ServicesGrid from "@/components/backlink-strategy/ServicesGrid";
import Process from "@/components/backlink-strategy/Process";
import IndustriesServed from "@/components/backlink-strategy/IndustriesServed";
import TechStack from "@/components/backlink-strategy/TechStack";

export default function BacklinkStrategyPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-amber-100">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesGrid />
        <Process />
        <IndustriesServed />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
