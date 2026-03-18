"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/onpage-seo/Hero";
import Overview from "@/components/onpage-seo/Overview";
import ServicesGrid from "@/components/onpage-seo/ServicesGrid";
import Process from "@/components/onpage-seo/Process";
import IndustriesServed from "@/components/onpage-seo/IndustriesServed";
import TechStack from "@/components/onpage-seo/TechStack";

export default function OnPageSEOPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-indigo-100">
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
