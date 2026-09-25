import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { whyChooseUs } from '../data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#181c24] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Why Choose Walunj Brother's RMC?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We prioritize operational transparency, dependable batching, and synchronized transit logistics to deliver consistent results on every pour.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-2xl bg-[#14171d] border border-white/10 hover:border-orange-500/40 shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-13 h-13 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-normal">
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
