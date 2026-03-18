"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/meta-ads/Hero";
import Overview from "@/components/meta-ads/Overview";
import ServicesGrid from "@/components/meta-ads/ServicesGrid";
import AdsProcess from "@/components/meta-ads/AdsProcess";
import IndustriesServed from "@/components/meta-ads/IndustriesServed";
import TechStack from "@/components/meta-ads/TechStack";

export default function MetaAdsPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-600/10">
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Overview />
        <ServicesGrid />
        <AdsProcess />
        <IndustriesServed />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
