"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="w-full border-t border-white/5 py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-8">
              GET IN <span className="text-[#3b82f6]">TOUCH</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
              Partner with us to transform your vision into technical reality. Our experts are ready to audit your requirements.
            </p>
            
            <div className="mt-12 space-y-4">
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-6">
                <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Response Matrix: <span className="text-white">&lt; 24h</span></span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] border border-[#222222] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle2 className="w-16 h-16 text-[#3b82f6] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Protocol Initiated</h3>
                <p className="text-gray-500 text-sm">Your message has been encoded and synced with our team.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-[11px] font-black uppercase text-[#3b82f6] tracking-widest"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest pl-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="E.g. Elon Musk"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest pl-2">Sync Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="mars@space.com"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest pl-2">Phone Vector</label>
                    <input 
                      type="tel" 
                      placeholder="+1 234 567 890"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest pl-2">Service Sector</label>
                    <select 
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-all appearance-none"
                    >
                      <option>Website Development</option>
                      <option>SaaS Framework</option>
                      <option>UX/UI Architecture</option>
                      <option>Technical QA</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest pl-2">Mission Parameters</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your architectural needs..."
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#3b82f6]/50 transition-all resize-none"
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full btn-premium py-5 flex items-center justify-center gap-3 rounded-2xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-[11px] font-black uppercase tracking-[0.3em]">SYNCHRONIZING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span className="text-[11px] font-black uppercase tracking-[0.3em]">INITIATE CONTACT</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
