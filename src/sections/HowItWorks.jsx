import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowRight } from 'lucide-react';
import { steps } from '../data/howItWorks';

export default function HowItWorks({ onQuoteClick }) {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white dark:bg-[#0e1117] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-orange-500/10 border border-blue-200 dark:border-orange-500/20 text-blue-800 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Seamless Process</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight mb-4 sm:mb-5">
            How It Works
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            From initial enquiry to transit mixer dispatch and on-site pouring, our 5-step process makes ordering ready-mix concrete simple and predictable.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-200 via-blue-500/30 to-blue-200 dark:from-orange-500/10 dark:via-orange-500/40 dark:to-orange-500/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-5 sm:p-6 bg-slate-50 dark:bg-[#181c24] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/40 shadow-xs hover:shadow-xl dark:shadow-black/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <span className="font-heading font-black text-xl sm:text-2xl text-blue-700 dark:text-orange-400 bg-blue-100/70 dark:bg-orange-500/10 px-3 py-1 rounded-xl border border-blue-200 dark:border-orange-500/20 shadow-xs">
                        {item.step}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:bg-blue-700 dark:group-hover:bg-orange-500 group-hover:text-white dark:group-hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors shadow-xs">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white mb-2 tracking-wide uppercase group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                      Step {item.step}
                    </span>
                    <span className="text-[11px] font-bold text-amber-700 dark:text-orange-400">
                      {item.badge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-heading font-extrabold text-sm min-h-[48px] px-7 py-3.5 rounded-xl shadow-md shadow-amber-500/20 active:scale-98 transition-all"
          >
            <span>Start Step 01 — Request Your Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
