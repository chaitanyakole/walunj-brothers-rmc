import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Info, Check, FileSpreadsheet } from 'lucide-react';
import { rmcGrades } from '../data/rmcGrades';
import TechnicalSpecsModal from '../components/TechnicalSpecsModal';

export default function RmcGrades({ onSelectGrade }) {
  const [specsModalOpen, setSpecsModalOpen] = useState(false);

  return (
    <section id="grades" className="py-20 md:py-28 bg-[#121418] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Mix Classification</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Concrete Grades
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Standard reference concrete mix designs batched for diverse structural strengths, from plain cement foundations to heavy-duty high-rise casting.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-slate-400 text-left">
              <Info className="w-4 h-4 text-orange-400 shrink-0" />
              <span>
                Standard grade specifications shown for reference. Availability and custom mix proportions are confirmed based on site requirements.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSpecsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-orange-400 text-xs font-bold transition-all shrink-0 active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>View Slump & Engineering Specs</span>
            </button>
          </div>
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rmcGrades.map((gradeItem, index) => {
            const isHighlighted = gradeItem.isPopular;

            return (
              <motion.div
                key={gradeItem.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#212733] to-[#171b24] border-2 border-orange-500/50 shadow-xl shadow-orange-500/10'
                    : 'bg-[#181c24] border border-white/10 hover:border-orange-500/30'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                    Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-white group-hover:text-orange-400 transition-colors">
                      {gradeItem.grade}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {gradeItem.tag}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-orange-400/90 mb-3">
                    Char. Strength: {gradeItem.characteristicStrength}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {gradeItem.application}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                      Common Applications:
                    </span>
                    {gradeItem.commonUses.map((use, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectGrade(gradeItem.grade)}
                    className={`w-full py-2.5 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isHighlighted
                        ? 'bg-orange-500 hover:bg-orange-600 text-slate-950 shadow-md shadow-orange-500/20'
                        : 'bg-white/5 hover:bg-orange-500 text-slate-200 hover:text-slate-950 border border-white/10'
                    }`}
                  >
                    <span>Request {gradeItem.grade} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Specs Banner */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setSpecsModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-orange-400 px-5 py-2.5 rounded-xl border border-white/10 hover:border-orange-500/40 bg-white/5 transition-all"
          >
            <FileSpreadsheet className="w-4 h-4 text-orange-400" />
            <span>Open IS 456 / IS 4926 Complete Mix Specifications Sheet</span>
          </button>
        </div>
      </div>

      {/* Technical Engineering Specifications Modal */}
      <TechnicalSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        onSelectGrade={onSelectGrade}
      />
    </section>
  );
}
