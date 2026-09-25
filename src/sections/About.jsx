import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { images } from '../data/images';

export default function About({ onQuoteClick }) {
  const pillars = [
    {
      title: "Quality-focused supply",
      description: "Consistent concrete formulations batched under controlled conditions for structural reliability."
    },
    {
      title: "Reliable transportation",
      description: "Agitated transit mixer dispatch designed to preserve mix slump and workability."
    },
    {
      title: "Site delivery",
      description: "Careful coordination with project managers, pump operators, and casting crews on the ground."
    },
    {
      title: "Customer-focused service",
      description: "Direct assistance, transparent quotations, and flexible scheduling tailored to project phases."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#14171d] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: AI Photorealistic Batching Plant Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
              <img
                src={images.about}
                alt="Modern RMC Batching Plant with silos and transit mixers"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#181c24]/90 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">
                      Batching & Logistics Infrastructure
                    </h4>
                    <p className="text-xs text-slate-400">
                      Located strategically near Wagholi & Lonikand for rapid transit across Pune
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-orange-500/60 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-orange-500/60 rounded-br-xl pointer-events-none" />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Walunj Brother's RMC</span>
              </div>
              
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Building Strong Foundations with Reliable RMC
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Walunj Brother's RMC provides ready-mix concrete supply and transportation for construction requirements. Our focus is on reliable supply, convenient site delivery and professional service for construction projects.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <h3 className="font-heading font-bold text-sm text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
              >
                <span>Request Concrete Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="text-sm font-semibold text-slate-300 hover:text-orange-400 px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
