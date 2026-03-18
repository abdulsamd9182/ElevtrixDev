"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/google-ads/Hero";
import Overview from "@/components/google-ads/Overview";
import ServicesGrid from "@/components/google-ads/ServicesGrid";
import Process from "@/components/google-ads/Process";
import IndustriesServed from "@/components/google-ads/IndustriesServed";
import TechStack from "@/components/google-ads/TechStack";


export default function GoogleAdsPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
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
