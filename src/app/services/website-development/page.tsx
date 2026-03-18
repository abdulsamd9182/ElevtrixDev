"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/website-development/Hero";
import Overview from "@/components/website-development/Overview";
import ServicesCarousel from "@/components/website-development/ServicesGrid";
import IndustriesServed from "@/components/website-development/IndustriesServed";
import TechStack from "@/components/website-development/TechStack";
import WebDevProcess from "@/components/website-development/WebDevProcess";


export default function WebsiteDevelopmentPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#3b82f6]/30">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesCarousel />
        <IndustriesServed />
        <TechStack />
        <WebDevProcess />

      </main>
    </div>
  );
}
