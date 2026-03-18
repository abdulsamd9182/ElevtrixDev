"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/app-development/Hero";
import Overview from "@/components/app-development/Overview";
import ServicesGrid from "@/components/app-development/ServicesGrid";
import IndustriesServed from "@/components/app-development/IndustriesServed";
import TechStack from "@/components/app-development/TechStack";
import Process from "@/components/app-development/Process";

export default function AppDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#3b82f6]/30">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesGrid />
        <IndustriesServed />
        <TechStack />
        <Process />
      </main>

      <Footer />
    </div>
  );
}
