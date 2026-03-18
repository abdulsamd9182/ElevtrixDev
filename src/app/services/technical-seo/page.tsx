"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/technical-seo/Hero";
import Overview from "@/components/technical-seo/Overview";
import ServicesGrid from "@/components/technical-seo/ServicesGrid";
import Process from "@/components/technical-seo/Process";
import IndustriesServed from "@/components/technical-seo/IndustriesServed";
import TechStack from "@/components/technical-seo/TechStack";

export default function TechnicalSEOPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-emerald-100">
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
