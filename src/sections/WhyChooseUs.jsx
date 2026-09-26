import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { whyChooseUs } from '../data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#f8fafc] dark:bg-[#0e1117] relative overflow-hidden border-b border-slate-200 dark:border-white/10">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-800 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight mb-4 sm:mb-5">
            Why Choose Walunj Brother's RMC?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            We prioritize operational transparency, dependable batching, and synchronized transit logistics to deliver consistent results on every pour.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#181c24] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-amber-500/40 shadow-xs hover:shadow-xl dark:shadow-black/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-700 dark:text-amber-400 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-blue-700 dark:group-hover:bg-amber-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors duration-200">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-700 dark:group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
