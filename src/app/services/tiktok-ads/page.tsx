"use client";

import Hero from "@/components/tiktok-ads/Hero";
import Overview from "@/components/tiktok-ads/Overview";
import ServicesGrid from "@/components/tiktok-ads/ServicesGrid";
import Process from "@/components/tiktok-ads/Process";
import IndustriesServed from "@/components/tiktok-ads/IndustriesServed";
import TechStack from "@/components/tiktok-ads/TechStack";

export default function TikTokAdsPage() {
  return (
    <main className="w-full">
      <Hero />
      <Overview />
      <ServicesGrid />
      <Process />
      <IndustriesServed />
      <TechStack />
    </main>
  );
}
