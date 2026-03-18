"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 w-full z-10 relative">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <ChevronRight className="w-3 h-3" />
      <Link href="/services" className="hover:text-white transition-colors">Services</Link>
      <ChevronRight className="w-3 h-3" />
      <span className="text-white">Google Ads</span>
    </nav>
  );
}
