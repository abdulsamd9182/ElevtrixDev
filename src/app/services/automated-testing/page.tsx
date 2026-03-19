"use client";

import Hero from "@/components/automated-testing/Hero";
import Overview from "@/components/automated-testing/Overview";
import ServicesGrid from "@/components/automated-testing/ServicesGrid";
import IndustriesServed from "@/components/automated-testing/IndustriesServed";
import TechStack from "@/components/automated-testing/TechStack";
import Process from "@/components/automated-testing/Process";

export default function AutomatedTestingPage() {
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
