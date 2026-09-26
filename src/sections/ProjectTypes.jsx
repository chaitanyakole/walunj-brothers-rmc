import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectTypes } from '../data/projectTypes';

export default function ProjectTypes({ onQuoteClick }) {
  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 bg-white dark:bg-[#0e1117] relative overflow-hidden border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-800 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Applications & Sectors</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight mb-4 sm:mb-5">
            Built for Every Construction Requirement
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            We deliver tailored concrete solutions engineered specifically for the structural and load characteristics of each construction sector.
          </p>
        </div>

        {/* 4 Large Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {projectTypes.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[420px] flex flex-col justify-end p-5 sm:p-8 border border-slate-200 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-blue-500 dark:hover:border-amber-500"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/65 to-transparent" />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-300" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10">
                <span className="inline-block text-[10px] sm:text-[11px] font-bold text-amber-900 bg-amber-100/95 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md mb-2.5 shadow-xs">
                  {project.subtitle}
                </span>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-white bg-slate-900/70 border border-white/20 px-2.5 py-1 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                <button
                  onClick={onQuoteClick}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-between sm:justify-start gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 bg-black/40 sm:bg-transparent px-3 py-2 sm:p-0 rounded-lg transition-colors"
                >
                  <span>Request Concrete For This Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
