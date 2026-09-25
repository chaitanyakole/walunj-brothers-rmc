import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Phone, ShieldCheck, Clock, Truck, HardHat, ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import { images } from '../data/images';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero({ onQuoteClick }) {
  const whatsappUrl = getWhatsAppUrl(
    "Hello Walunj Brother's RMC, I am interested in getting a quotation for Ready-Mix Concrete supply."
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with layered overlays for optimal text contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Walunj Brother's RMC transit mixer delivering concrete to construction site in Pune"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Layered gradients: dark top for navbar, dark bottom for smooth transition, radial center for focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-[#121418]/85 to-[#0e1014]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121418]/95 via-[#121418]/70 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Small Category Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>READY-MIX CONCRETE SUPPLIER</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.14] mb-4 sm:mb-6"
          >
            Quality Ready-Mix Concrete, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              Delivered to Your Site.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-7 sm:mb-8 max-w-2xl"
          >
            Reliable RMC supply and transportation for residential, commercial and infrastructure construction projects across Pune and surrounding areas.
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
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-extrabold text-sm sm:text-base min-h-[48px] px-7 py-3.5 rounded-xl shadow-xl shadow-orange-500/25 active:scale-98 transition-all duration-200"
            >
              <FileText className="w-5 h-5 text-slate-950" />
              <span>Get a Quote</span>
            </button>

            <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs sm:text-sm min-h-[48px] px-3.5 sm:px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/25 active:scale-98 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              {business.phone ? (
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-heading font-semibold text-xs sm:text-sm min-h-[48px] px-3.5 sm:px-6 py-3 rounded-xl backdrop-blur-sm active:scale-98 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" />
                  <span>Call Now</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-heading font-semibold text-xs sm:text-sm min-h-[48px] px-3.5 sm:px-6 py-3 rounded-xl backdrop-blur-sm active:scale-98 transition-all duration-200"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 shrink-0" />
                  <span>Contact Site</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Trust Indicators Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { icon: ShieldCheck, text: "Quality Focused" },
              { icon: Clock, text: "Timely Delivery" },
              { icon: Truck, text: "Reliable Transport" },
              { icon: HardHat, text: "Site Delivery" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-sm font-semibold tracking-wide text-slate-200 truncate">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="p-1">
          <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
