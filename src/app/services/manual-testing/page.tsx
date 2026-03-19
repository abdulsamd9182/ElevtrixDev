"use client";

import Hero from "@/components/manual-testing/Hero";
import Overview from "@/components/manual-testing/Overview";
import ServicesGrid from "@/components/manual-testing/ServicesGrid";
import IndustriesServed from "@/components/manual-testing/IndustriesServed";
import TechStack from "@/components/manual-testing/TechStack";
import Process from "@/components/manual-testing/Process";

export default function ManualTestingPage() {
  return (
    <main className="w-full">
      <Hero />
      <Overview />
      <ServicesGrid />
      <IndustriesServed />
      <TechStack />
      <Process />
    </main>
  );
}
