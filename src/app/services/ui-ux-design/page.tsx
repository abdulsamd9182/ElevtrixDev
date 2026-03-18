"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/ui-ux-design/Hero";
import Overview from "@/components/ui-ux-design/Overview";
import ServicesGrid from "@/components/ui-ux-design/ServicesGrid";
import IndustriesServed from "@/components/ui-ux-design/IndustriesServed";
import TechStack from "@/components/ui-ux-design/TechStack";
import DesignProcess from "@/components/ui-ux-design/DesignProcess";

export default function UIUXDesignPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#3b82f6]/30">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesGrid />
        <IndustriesServed />
        <TechStack />
        <DesignProcess />
      </main>

      <Footer />
    </div>
  );
}
