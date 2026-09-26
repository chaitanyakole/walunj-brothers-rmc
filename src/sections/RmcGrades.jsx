import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Info, Check, FileSpreadsheet } from 'lucide-react';
import { rmcGrades } from '../data/rmcGrades';
import TechnicalSpecsModal from '../components/TechnicalSpecsModal';

export default function RmcGrades({ onSelectGrade }) {
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Grades', count: rmcGrades.length },
    { id: 'pcc', label: 'PCC & Foundations', filter: g => ['M10', 'M15', 'M20'].includes(g.grade) },
    { id: 'structural', label: 'RCC Slabs & Beams', filter: g => ['M20', 'M25', 'M30'].includes(g.grade) },
    { id: 'heavy', label: 'High-Strength Structural', filter: g => ['M35', 'M40'].includes(g.grade) }
  ];

  const filteredGrades = rmcGrades.filter(g => {
    if (activeFilter === 'all') return true;
    const tab = filterTabs.find(t => t.id === activeFilter);
    return tab && tab.filter ? tab.filter(g) : true;
  });

  // Calculate MPA number from grade string (e.g. "M25" -> 25)
  const getMpaValue = (gradeStr) => {
    const num = parseInt(gradeStr.replace(/\D/g, ''), 10);
    return isNaN(num) ? 20 : num;
  };

  return (
    <section id="grades" className="py-14 sm:py-20 md:py-28 bg-white dark:bg-[#0e1117] relative overflow-hidden border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-[#0f4c81] dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Mix Classification & Engineering</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight mb-4 sm:mb-5">
            Concrete Grades & Strength Specs
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Standard reference concrete mix designs batched for diverse structural strengths, from plain cement foundations to heavy-duty high-rise casting.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 text-left">
              <Info className="w-4 h-4 text-[#0f4c81] dark:text-amber-400 shrink-0" />
              <span>
                All mixes formulated per <strong>IS 456 : 2000</strong> & <strong>IS 10262 : 2019</strong>. Custom mix designs available on demand.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSpecsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[42px] rounded-xl bg-blue-50 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-white/10 border border-blue-200 dark:border-white/10 text-[#0f4c81] dark:text-amber-400 text-xs font-bold transition-all shrink-0 active:scale-95 shadow-xs"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>View Engineering Spec Sheet</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map(tab => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[40px] flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0f4c81] dark:bg-amber-500 text-white dark:text-slate-950 shadow-md shadow-blue-900/10'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/5'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGrades.map((gradeItem, index) => {
            const isHighlighted = gradeItem.isPopular;
            const mpa = getMpaValue(gradeItem.grade);
            const mpaPercent = Math.min(100, Math.round((mpa / 40) * 100));

            return (
              <motion.div
                key={gradeItem.grade}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-blue-50/70 to-white dark:from-[#1d232f] dark:to-[#14171f] border-2 border-blue-600 dark:border-amber-500/80 shadow-xl shadow-blue-900/10 dark:shadow-black/60'
                    : 'bg-white dark:bg-[#14171f] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-amber-500/50 shadow-sm hover:shadow-xl dark:shadow-black/50'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
                    ★ Most Requested
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white group-hover:text-[#0f4c81] dark:group-hover:text-amber-400 transition-colors">
                      {gradeItem.grade}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10">
                      {gradeItem.tag}
                    </span>
                  </div>

                  {/* Compressive Strength Visual Meter Gauge */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 mb-4">
                    <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                      <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs">
                        28-Day Strength
                      </span>
                      <span className="text-blue-700 dark:text-amber-400 font-mono font-black">
                        {gradeItem.characteristicStrength}
                      </span>
                    </div>

                    {/* Progress Bar Gauge */}
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${mpaPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-amber-500 dark:from-amber-500 dark:via-orange-500 dark:to-yellow-400"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-1">
                      <span>10 MPa</span>
                      <span>25 MPa</span>
                      <span>40 MPa</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 min-h-[36px]">
                    {gradeItem.application}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      Recommended Applications:
                    </span>
                    {gradeItem.commonUses.map((use, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 shrink-0" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                  <button
                    onClick={() => onSelectGrade(gradeItem.grade)}
                    className={`w-full py-2.5 px-4 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95'
                        : 'bg-blue-50 dark:bg-white/5 hover:bg-[#0f4c81] dark:hover:bg-amber-500 text-[#0f4c81] dark:text-slate-200 hover:text-white dark:hover:text-slate-950 border border-blue-200 dark:border-white/10 active:scale-95'
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-[#0f4c81] dark:hover:text-white px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-blue-400 dark:hover:border-amber-500/40 bg-white dark:bg-white/5 hover:bg-blue-50/50 dark:hover:bg-white/10 shadow-xs transition-all"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#0f4c81] dark:text-amber-400" />
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
