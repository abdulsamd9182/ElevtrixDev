"use client";

import Hero from "@/components/sqa/Hero";
import Overview from "@/components/sqa/Overview";
import ServicesCarousel from "@/components/sqa/ServicesGrid";
import IndustriesServed from "@/components/sqa/IndustriesServed";
import TechStack from "@/components/sqa/TechStack";
import SQAProcess from "@/components/sqa/SQAProcess";


export default function SQAPage() {
  return (
    <main className="w-full">
      <Hero />
      <Overview />
      <ServicesCarousel />
      <IndustriesServed />
      <TechStack />
      <SQAProcess />
    </main>
  );
}
