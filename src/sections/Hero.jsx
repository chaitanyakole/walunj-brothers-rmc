import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Phone, ShieldCheck, Clock, Truck, HardHat, ChevronDown, ArrowRight } from 'lucide-react';
import { business } from '../config/business';
import { images } from '../data/images';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero({ onQuoteClick }) {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Walunj Brother's RMC, I am interested in getting a quotation for Ready-Mix Concrete supply."
  );

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with layered overlays for optimal text contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Walunj Brother's RMC transit mixer delivering concrete to construction site in Pune"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Layered architectural gradients: light ground transition or dark obsidian in industrial mode */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] dark:from-[#0e1117] via-[#f8fafc]/92 dark:via-[#0e1117]/90 to-slate-900/45 dark:to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] dark:from-[#0e1117] via-[#f8fafc]/92 dark:via-[#0e1117]/88 to-transparent" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, CAD Badges, Supporting text, CTAs */}
          <div className="lg:col-span-7">
            {/* Live Operational Status Pill & Blueprint CAD Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-sm shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Plant Operational • Batching Live</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold">
                <span>18.5910° N, 73.9850° E • Pune</span>
              </div>
            </motion.div>

            {/* Main Heading with rich gradient typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white tracking-tight leading-[1.12] mb-4 sm:mb-6"
            >
              Precision Ready-Mix Concrete, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-300">
                Engineered for Strength.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl"
            >
              IS-certified automated batching and rapid transit mixer delivery across Wagholi, Pune & surrounding corridors. Formulated for uniform slump, maximum durability, and structural longevity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
            >
              <button
                onClick={onQuoteClick}
                className="btn-primary w-full sm:w-auto"
              >
                <FileText className="w-5 h-5 text-slate-950" />
                <span>Calculate & Get Quote</span>
              </button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                {business.phone ? (
                  <a
                    href={`tel:${business.phone}`}
                    className="btn-outline gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Call Desk</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="btn-outline gap-2"
                  >
                    <Phone className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Contact</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Trust Indicators Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-5 sm:pt-6 border-t border-slate-200/90 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              {[
                { icon: ShieldCheck, text: "IS 456 / 4926 Certified" },
                { icon: Clock, text: "Synchronized Slump" },
                { icon: Truck, text: "Dedicated Agitator Fleet" },
                { icon: HardHat, text: "Direct Site Pump Support" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 flex items-center justify-center text-blue-700 dark:text-amber-400 shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold tracking-normal text-slate-800 dark:text-slate-200">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Live Batching Dispatch & Mix Spec Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/85 dark:bg-[#131720]/85 backdrop-blur-sm border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xl shadow-blue-900/5 dark:shadow-black/50 overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 dark:bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header: Live Dispatch Queue */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 dark:border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 flex items-center justify-center text-blue-700 dark:text-amber-400 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                      Batching Dispatch Desk
                    </p>
                    <p className="text-xs font-semibold text-blue-700 dark:text-amber-400">
                      Wagholi Central Terminal
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-700/60">
                  Ready
                </span>
              </div>

              {/* Live Spec Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block mb-1">
                    Next Pour Slot
                  </span>
                  <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    Available Today
                  </p>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                    Express Scheduling
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold block mb-1">
                    Batching Speed
                  </span>
                  <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    6.5 Min / 6m³
                  </p>
                  <span className="text-xs text-blue-600 dark:text-amber-400 font-semibold block mt-0.5">
                    Continuous Weighing
                  </span>
                </div>
              </div>

              {/* Quick Interactive Grade Strength Peek */}
              <div className="pt-1 pb-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-2">
                  Popular Standard Mix Grades:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { grade: 'M20', mpa: '20 MPa', label: 'Footings' },
                    { grade: 'M25', mpa: '25 MPa', label: 'RCC Slabs' },
                    { grade: 'M30', mpa: '30 MPa', label: 'Columns' },
                    { grade: 'M35', mpa: '35 MPa', label: 'High-Rise' },
                  ].map(item => (
                    <button
                      key={item.grade}
                      type="button"
                      onClick={onQuoteClick}
                      className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-white/5 dark:hover:bg-amber-500/10 border border-slate-200 hover:border-blue-300 dark:border-white/10 dark:hover:border-amber-500/30 text-center transition-all group/chip"
                    >
                      <span className="font-heading font-black text-sm text-slate-900 dark:text-white group-hover/chip:text-blue-700 dark:group-hover/chip:text-amber-400 block leading-tight">
                        {item.grade}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-0.5">
                        {item.mpa}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-white/[0.02] border border-blue-200/80 dark:border-white/5 flex items-center justify-between mt-2 gap-2">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Concrete pumps (32m & 36m) deployed on order
                </span>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700 hover:bg-blue-800 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-heading font-bold text-xs shadow-xs hover:shadow-sm active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  <span>Book Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="p-1">
          <ChevronDown className="w-5 h-5 text-slate-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
