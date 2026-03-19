"use client";

import Hero from "@/components/backlink-strategy/Hero";
import Overview from "@/components/backlink-strategy/Overview";
import ServicesGrid from "@/components/backlink-strategy/ServicesGrid";
import Process from "@/components/backlink-strategy/Process";
import IndustriesServed from "@/components/backlink-strategy/IndustriesServed";
import TechStack from "@/components/backlink-strategy/TechStack";

export default function BacklinkStrategyPage() {
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
