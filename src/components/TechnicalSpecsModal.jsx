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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative max-w-4xl w-full bg-[#161a22] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="p-6 bg-[#181d26] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  Technical Mix Specification Sheet (IS 456 & IS 4926)
                </h3>
                <p className="text-xs text-slate-400">
                  Engineering guidelines for Ready-Mix Concrete batching & site application
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#13161c]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1b2029] text-slate-300 font-bold uppercase tracking-wider text-[11px] border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Grade</th>
                    <th className="py-3 px-3">7-Day Strength</th>
                    <th className="py-3 px-3">28-Day Strength</th>
                    <th className="py-3 px-3">Agg. Size</th>
                    <th className="py-3 px-3">Slump Range</th>
                    <th className="py-3 px-4">Primary Application</th>
                    <th className="py-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {specs.map((item) => (
                    <tr key={item.grade} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-heading font-black text-white text-sm">
                        {item.grade}
                      </td>
                      <td className="py-3.5 px-3 text-slate-400">{item.strength7d}</td>
                      <td className="py-3.5 px-3 font-semibold text-orange-400">{item.strength28d}</td>
                      <td className="py-3.5 px-3 text-slate-400">{item.aggSize}</td>
                      <td className="py-3.5 px-3 text-slate-300 font-medium">{item.slump}</td>
                      <td className="py-3.5 px-4 text-slate-400 max-w-xs">{item.primaryUse}</td>
                      <td className="py-3.5 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            if (onSelectGrade) onSelectGrade(item.grade);
                          }}
                          className="px-2.5 py-1 rounded-md bg-orange-500/10 hover:bg-orange-500 hover:text-slate-950 text-orange-400 text-[11px] font-bold transition-all"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>On-Site Slump & Discharge Advice</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Never add uncontrolled water on-site without technician authorization. Uncontrolled water reduces 28-day compressive strength and triggers shrinkage cracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Curing Protocol (IS 456)</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Begin ponding or moist hessian curing immediately after initial set (within 12-16 hours) and continue continuous curing for a minimum of 7 to 10 days.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic text-center">
              Note: Technical values conform to standard IS specifications. Custom mix proportioning with flyash/slag blends or chemical admixtures confirmed upon order.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 bg-[#181d26] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Walunj Brother's RMC • Wagholi, Pune
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Spec Sheet</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 text-xs font-bold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
