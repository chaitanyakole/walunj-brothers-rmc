import React, { useState } from 'react';
import { ShieldCheck, TestTube, CheckCircle2, FileCheck, Layers, Scale } from 'lucide-react';
import { images } from '../data/images';

export default function QualityTestingGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Raw Material Inspection",
      subtitle: "Aggregates, Sand & Cement Quality",
      code: "IS 383 & IS 2386",
      desc: "Every truckload of crushed stone (10mm, 20mm) and sand undergoes rigorous silt content, flakiness, and moisture evaluation before batching into storage bins.",
      icon: Scale,
      points: [
        "Aggregate flakiness & elongation limits verified",
        "Sand silt content kept strictly below permissible limits",
        "Fresh OPC / PPC cement storage in sealed, moisture-proof silos"
      ]
    },
    {
      id: 2,
      title: "Computerized Batching",
      subtitle: "Automated Precision Weigh-batching",
      code: "IS 4926 (RMC Standard)",
      desc: "Computer-controlled batching system automatically adjusts for aggregate surface moisture to guarantee accurate water-cement ratio and slump consistency.",
      icon: Layers,
      points: [
        "Calibrated load cells for precise binder and aggregate dosing",
        "Real-time moisture sensors and automated water compensation",
        "Computer-generated batch ticket with mix proportion details"
      ]
    },
    {
      id: 3,
      title: "Slump Cone Workability",
      subtitle: "On-Site Slump Verification",
      code: "IS 1199 (Slump Test)",
      desc: "Fresh concrete from each transit mixer is tested with an official slump cone at the site to verify flowability and pumpability before discharge into the pump hopper.",
      icon: TestTube,
      points: [
        "Standard slump measurement (typically 120-150mm for pump mix)",
        "Zero uncontrolled on-site water dilution",
        "Retains optimum workability during entire pouring window"
      ]
    },
    {
      id: 4,
      title: "Cube Compression Testing",
      subtitle: "7-Day & 28-Day Strength Assurance",
      code: "IS 516 (Strength of Concrete)",
      desc: "150mm cube specimens are cast on site or at our testing desk, cured in water tanks, and tested under calibrated compressive testing machines (CTM).",
      icon: FileCheck,
      points: [
        "3 cubes tested at 7 days (achieving ~65-70% characteristic strength)",
        "3 cubes tested at 28 days for full design strength compliance",
        "Formal test documentation available upon request"
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#f8fafc] dark:bg-[#0e1117] border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-800 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Quality Control Protocol</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight mb-3 sm:mb-4">
            Quality Assurance from Batching to Placement
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            How we maintain uniform strength, workability, and durability on every cubic meter delivered across Pune construction sites.
          </p>
        </div>

        {/* Mobile Step Switcher Bar (visible on small screens) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 lg:hidden">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap border shrink-0 transition-all flex items-center gap-1.5 active:scale-95 ${
                  isActive
                    ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 border-blue-800 dark:border-amber-600 shadow-md'
                    : 'bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <span>Step 0{step.id}</span>
                <span className="opacity-70">•</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Quality Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left: Step Selection Cards */}
          <div className="hidden lg:block lg:col-span-6 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-50/70 dark:bg-[#202735] border-blue-500 dark:border-amber-500/60 shadow-md shadow-blue-900/5 dark:shadow-black/40'
                      : 'bg-white dark:bg-[#181c24] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 font-bold'
                          : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <span className="text-xs font-bold text-blue-800 dark:text-amber-400 bg-blue-100 dark:bg-amber-500/15 border border-blue-200 dark:border-amber-500/30 px-2.5 py-0.5 rounded-full">
                          {step.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Step Details & Real Laboratory Visual */}
          <div className="col-span-1 lg:col-span-6 bg-white dark:bg-[#181c24] rounded-2xl p-5 sm:p-8 border border-slate-200 dark:border-white/10 shadow-lg relative overflow-hidden">
            <div className="relative h-44 sm:h-56 rounded-xl overflow-hidden mb-5 sm:mb-6 border border-slate-200 dark:border-white/10">
              <img
                src={images.qualityTest}
                alt="Concrete slump and cube testing on site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Site Quality Testing in Pune
                </span>
                <span className="text-[11px] text-amber-900 dark:text-amber-300 font-bold bg-amber-100/90 dark:bg-amber-500/20 px-2.5 py-1 rounded-lg backdrop-blur-md border border-amber-300 dark:border-amber-500/30">
                  Slump Cone & Mould Test
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-amber-400">
                  Step 0{steps[activeStep].id}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  Standard {steps[activeStep].code}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
                {steps[activeStep].title} — {steps[activeStep].subtitle}
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {steps[activeStep].points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
