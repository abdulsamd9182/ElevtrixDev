"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/#services",
    subItems: [
      { 
        label: "Development", 
        items: [
          { name: "Website Development", href: "/services/website-development" },
          { name: "App Development", href: "/services/app-development" },
          { name: "UX/UI Design", href: "/services/ui-ux-design" },
        ]
      },
      { 
        label: "Software Quality Assurance", 
        items: [
          { name: "Manual Testing", href: "/services/manual-testing" },
          { name: "Automated Testing", href: "/services/automated-testing" },
          { name: "Performance Testing", href: "/services/performance-testing" },
          { name: "Security Testing", href: "/services/security-testing" },
        ]
      },
      { 
        label: "Ad Campaigns", 
        items: [
          { name: "Meta Ads", href: "/services/meta-ads" },
          { name: "Google Ads", href: "/services/google-ads" },
          { name: "Tiktok Ads", href: "/services/tiktok-ads" },
        ]
      },
      { 
        label: "SEO Strategies", 
        items: [
          { name: "Technical SEO", href: "/services/technical-seo" },
          { name: "On-Page SEO", href: "/services/onpage-seo" },
          { name: "Backlink Strategy", href: "/services/backlink-strategy" },
        ]
      }
    ]
  },
  { name: "Our Work", href: "/#work" },
  { name: "Contact", href: "/hire-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6",
        scrolled ? "py-2" : "py-4"
      )}>
        <div className={cn(
          "max-w-6xl mx-auto rounded-xl px-4 py-2 flex items-center justify-between transition-all duration-300 border",
          scrolled ? "bg-white/95 backdrop-blur-md border-black/10 shadow-2xl" : "bg-white/80 backdrop-blur-md border-black/5 shadow-lg"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 focus:outline-none">
            <span className="text-lg font-bold tracking-tight text-black">
              Eleytrix<span className="text-[#3b82f6] italic">Dev</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#4b5563] hover:text-[#3b82f6] transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.subItems && <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                </Link>

                {/* Desktop Dropdown - Full Width */}
                {link.subItems && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-[68px] left-0 right-0 w-full bg-white/95 backdrop-blur-2xl border-y border-black/10 shadow-2xl z-[110]"
                      >
                        <div className="max-w-6xl mx-auto py-12 px-6">
                          <div className="grid grid-cols-4 gap-12">
                            {link.subItems.map((group) => (
                              <div key={group.label} className="flex flex-col">
                                <div className="px-3 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-[#3b82f6] border-l-2 border-[#3b82f6]/30 ml-1">
                                  {group.label}
                                </div>
                                <div className="space-y-3">
                                  {group.items.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="block px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#4b5563] hover:text-black hover:translate-x-1 transition-all"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-gray-500">
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Trusted Partners for:</span>
                              <div className="flex gap-4 opacity-50 grayscale">
                                {/* Placeholder for partner icons/text */}
                                <span className="text-[9px] font-bold">Innovation</span>
                                <span className="text-[9px] font-bold">Reliability</span>
                                <span className="text-[9px] font-bold">Growth</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/hire-us" className="btn-premium px-4 py-1.5 text-[9px] block">
              Hire Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1.5 text-black">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] md:hidden bg-white/98 backdrop-blur-2xl p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold tracking-tight text-black">
                Eleytrix<span className="text-[#3b82f6] italic">Dev</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="text-black bg-black/5 p-2 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="text-2xl font-bold tracking-tight text-black hover:text-[#3b82f6] transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.subItems && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 bg-black/5 rounded-lg text-black"
                      >
                        <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name && "rotate-180")} />
                      </button>
                    )}
                  </div>

                  {link.subItems && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/5 rounded-2xl border border-white/5 flex flex-col p-2 gap-4"
                        >
                          {link.subItems.map((group) => (
                            <div key={group.label} className="p-2">
                              <div className="px-2 mb-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#3b82f6]/60">
                                {group.label}
                              </div>
                              <div className="flex flex-col gap-1">
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-[#4b5563] hover:text-black hover:bg-black/5 rounded-xl transition-all"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              <Link 
                href="/hire-us" 
                onClick={() => setIsOpen(false)}
                className="mt-6 btn-premium py-4 text-center text-sm"
              >
                Hire Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
