import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectTypes } from '../data/projectTypes';

export default function ProjectTypes({ onQuoteClick }) {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#181c24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Applications & Sectors</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Built for Every Construction Requirement
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We deliver tailored concrete solutions engineered specifically for the structural and load characteristics of each construction sector.
          </p>
        </div>

        {/* 4 Large Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectTypes.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 shadow-2xl transition-all duration-300 hover:border-orange-500/40"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101317] via-[#101317]/80 to-transparent" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold text-orange-400 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md mb-3">
                  {project.subtitle}
                </span>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 max-w-xl">
                  {project.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-200 bg-black/40 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                <button
                  onClick={onQuoteClick}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-orange-400"
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
