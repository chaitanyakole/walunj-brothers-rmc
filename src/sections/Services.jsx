import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { services } from '../data/services';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-28 bg-[#181c24] relative overflow-hidden">
      {/* Texture grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scope of Supply & Logistics</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 sm:mb-5">
            Our RMC & Construction Supply Services
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            From batching custom concrete formulations to coordinated site pumping and delivery across Pune, we support projects of all scales with reliable ready-mix supply.
          </p>
        </div>

        {/* Services Grid (7 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // 7th item on large screens can span or sit nicely
            const isLast = index === services.length - 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl bg-[#14171d] border border-white/10 hover:border-orange-500/40 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Service Card Image Header */}
                <div className="relative h-48 overflow-hidden bg-black/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-[#14171d]/60 to-transparent" />
                  
                  {/* Number & Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-heading font-extrabold text-lg text-white/90 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10">
                      {service.id}
                    </span>
                    <span className="text-[11px] font-bold text-orange-400 bg-orange-500/20 border border-orange-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 mb-2.5 font-medium">
                      {service.shortDesc}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {service.detailedDesc}
                    </p>
                  </div>

                  {/* Request Quote Link */}
                  <div className="pt-3 border-t border-white/5">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full min-h-[44px] inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-orange-400 group-hover:text-orange-300 hover:underline py-2 active:bg-white/5 rounded-lg px-2 -mx-2"
                    >
                      <span className="truncate pr-2">Request Quote for {service.title}</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
