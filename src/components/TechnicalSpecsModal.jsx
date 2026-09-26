import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, Printer } from 'lucide-react';

export default function TechnicalSpecsModal({ isOpen, onClose, onSelectGrade }) {
  if (!isOpen) return null;

  const specs = [
    { grade: 'M10', strength7d: '7 N/mm²', strength28d: '10 N/mm²', aggSize: '20mm / 40mm', slump: '75 - 100 mm', primaryUse: 'Levelling course, PCC bedding, mass foundation fill' },
    { grade: 'M15', strength7d: '10 N/mm²', strength28d: '15 N/mm²', aggSize: '20mm', slump: '75 - 100 mm', primaryUse: 'Plain cement concrete, compound wall footings, pathways' },
    { grade: 'M20', strength7d: '13.5 N/mm²', strength28d: '20 N/mm²', aggSize: '20mm down', slump: '100 - 130 mm', primaryUse: 'Residential RCC slabs, beams, standard columns' },
    { grade: 'M25', strength7d: '17 N/mm²', strength28d: '25 N/mm²', aggSize: '20mm down', slump: '110 - 140 mm', primaryUse: 'Heavy RCC structural members, commercial foundations' },
    { grade: 'M30', strength7d: '20 N/mm²', strength28d: '30 N/mm²', aggSize: '20mm down', slump: '120 - 150 mm', primaryUse: 'Commercial towers, water retaining basements, industrial floors' },
    { grade: 'M35', strength7d: '23.5 N/mm²', strength28d: '35 N/mm²', aggSize: '20mm down', slump: '120 - 150 mm', primaryUse: 'High-rise structural columns, prestressed members, heavy slabs' },
    { grade: 'M40+', strength7d: '27+ N/mm²', strength28d: '40+ N/mm²', aggSize: '20mm down', slump: '130 - 160 mm', primaryUse: 'Bridge viaducts, flyover piers, high-performance pavements' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/80 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative max-w-4xl w-full bg-white dark:bg-[#161a22] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh] z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#13161c] border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 flex items-center justify-center text-blue-700 dark:text-amber-400 shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-extrabold text-base sm:text-xl text-slate-900 dark:text-white truncate">
                    Technical Mix Specifications (IS 456 / IS 4926)
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 truncate">
                    Engineering guidelines for Ready-Mix Concrete batching & site application
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors flex items-center justify-center shrink-0 active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5 bg-white dark:bg-[#161a22]">
              
              {/* Mobile swipe hint */}
              <div className="flex items-center justify-between text-[11px] text-blue-800 dark:text-amber-400 font-medium sm:hidden bg-blue-50 dark:bg-amber-500/10 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-amber-500/20">
                <span>← Swipe table horizontally for all values →</span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#14171d]">
                <table className="w-full min-w-[620px] text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-[#181c24] text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-white/10">
                    <tr>
                      <th className="py-3 px-3.5">Grade</th>
                      <th className="py-3 px-3">7-Day Strength</th>
                      <th className="py-3 px-3">28-Day Strength</th>
                      <th className="py-3 px-3">Agg. Size</th>
                      <th className="py-3 px-3">Slump Range</th>
                      <th className="py-3 px-4">Primary Application</th>
                      <th className="py-3 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    {specs.map((item) => (
                      <tr key={item.grade} className="hover:bg-blue-50/40 dark:hover:bg-white/[0.04] transition-colors">
                        <td className="py-3.5 px-3.5 font-heading font-black text-slate-900 dark:text-white text-sm">
                          {item.grade}
                        </td>
                        <td className="py-3.5 px-3 text-slate-600 dark:text-slate-400">{item.strength7d}</td>
                        <td className="py-3.5 px-3 font-bold text-blue-700 dark:text-amber-400">{item.strength28d}</td>
                        <td className="py-3.5 px-3 text-slate-600 dark:text-slate-400">{item.aggSize}</td>
                        <td className="py-3.5 px-3 text-slate-800 dark:text-slate-200 font-medium">{item.slump}</td>
                        <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 max-w-xs">{item.primaryUse}</td>
                        <td className="py-3.5 px-3 text-right">
                          <button
                            type="button"
                            onClick={() => {
                              onClose();
                              if (onSelectGrade) onSelectGrade(item.grade);
                            }}
                            className="px-2.5 py-1.5 min-h-[36px] rounded-lg bg-blue-50 dark:bg-white/5 hover:bg-blue-700 dark:hover:bg-amber-500 hover:text-white dark:hover:text-slate-950 text-blue-800 dark:text-slate-200 text-[11px] font-bold transition-all active:scale-95 border border-blue-200 dark:border-white/10"
                          >
                            Quote
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Essential Site Placement Guidelines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#13161c] border border-slate-200 dark:border-white/10 space-y-1.5">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>On-Site Slump & Discharge Advice</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Never add uncontrolled water on-site without technician authorization. Uncontrolled water reduces 28-day compressive strength and triggers shrinkage cracking.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-[#13161c] border border-slate-200 dark:border-white/10 space-y-1.5">
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Curing Protocol (IS 456)</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Begin ponding or moist hessian curing immediately after initial set (within 12-16 hours) and continue continuous curing for a minimum of 7 to 10 days.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic text-center">
                Note: Technical values conform to standard IS specifications. Custom mix proportioning with flyash/slag blends or chemical admixtures confirmed upon order.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 sm:p-5 bg-slate-50 dark:bg-[#13161c] border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Walunj Brother's RMC • Wagholi, Pune
              </span>

              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-300 dark:border-white/10 transition-colors shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Spec Sheet</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 min-h-[40px] rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-bold transition-all active:scale-95 text-center shadow-xs"
                >
                  Close Spec Sheet
                </button>
              </div>
            </div>
          </motion.div>
      </div>
    </AnimatePresence>
  );
}
