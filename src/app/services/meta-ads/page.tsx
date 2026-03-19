"use client";

import Hero from "@/components/meta-ads/Hero";
import Overview from "@/components/meta-ads/Overview";
import ServicesGrid from "@/components/meta-ads/ServicesGrid";
import AdsProcess from "@/components/meta-ads/AdsProcess";
import IndustriesServed from "@/components/meta-ads/IndustriesServed";
import TechStack from "@/components/meta-ads/TechStack";

export default function MetaAdsPage() {
  return (
    <main className="w-full">
      <Hero />
      <Overview />
      <ServicesGrid />
      <AdsProcess />
      <IndustriesServed />
      <TechStack />
    </main>
  );
}
