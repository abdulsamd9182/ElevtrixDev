"use client";

import Hero from "@/components/technical-seo/Hero";
import Overview from "@/components/technical-seo/Overview";
import ServicesGrid from "@/components/technical-seo/ServicesGrid";
import Process from "@/components/technical-seo/Process";
import IndustriesServed from "@/components/technical-seo/IndustriesServed";
import TechStack from "@/components/technical-seo/TechStack";

export default function TechnicalSEOPage() {
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
