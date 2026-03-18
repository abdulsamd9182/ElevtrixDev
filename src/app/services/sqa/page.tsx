"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sqa/Hero";
import Overview from "@/components/sqa/Overview";
import ServicesCarousel from "@/components/sqa/ServicesGrid";
import IndustriesServed from "@/components/sqa/IndustriesServed";
import TechStack from "@/components/sqa/TechStack";
import SQAProcess from "@/components/sqa/SQAProcess";


export default function SQAPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#3b82f6]/30">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesCarousel />
        <IndustriesServed />
        <TechStack />
        <SQAProcess />

      </main>
    </div>
  );
}
