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
    <section className="py-20 bg-[#14171d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strict Quality Control Protocol</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Quality Assurance from Batching to Placement
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            How we maintain uniform strength, workability, and durability on every cubic meter delivered across Pune construction sites.
          </p>
        </div>

        {/* 2-Column Quality Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Step Selection Cards */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-[#1a202c] border-orange-500/50 shadow-xl shadow-orange-500/10'
                      : 'bg-[#161a22] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-orange-500 text-slate-950 font-bold'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                          {step.title}
                        </h4>
                        <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full">
                          {step.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Step Details & Real Laboratory Visual */}
          <div className="lg:col-span-6 bg-[#181c24] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative h-56 rounded-xl overflow-hidden mb-6 border border-white/10">
              <img
                src={images.qualityTest}
                alt="Concrete slump and cube testing on site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Site Quality Testing in Pune
                </span>
                <span className="text-[11px] text-orange-400 font-semibold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                  Slump Cone & Mould Test
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                  Step 0{steps[activeStep].id}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400 font-semibold">
                  Standard {steps[activeStep].code}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
                {steps[activeStep].title} — {steps[activeStep].subtitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                {steps[activeStep].points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
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
