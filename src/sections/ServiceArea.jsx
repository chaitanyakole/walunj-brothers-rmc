import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowUpRight, CheckCircle2, Clock, Truck, ShieldAlert } from 'lucide-react';
import { business } from '../config/business';

export default function ServiceArea({ onSelectArea }) {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);

  const routeDetails = [
    {
      name: "Wagholi",
      approxDistance: "3 - 6 km",
      transitTime: "15 - 25 mins",
      route: "Via Lonikand - Lohagaon Rd & Nagar Highway",
      status: "Immediate Rapid Dispatch",
      slumpAdvice: "Standard pump mix slump 120-140mm"
    },
    {
      name: "Lonikand",
      approxDistance: "2 - 5 km",
      transitTime: "10 - 20 mins",
      route: "Direct Lonikand arterial corridor",
      status: "Primary Plant Zone",
      slumpAdvice: "Optimal fresh hydration window"
    },
    {
      name: "Bhawadi",
      approxDistance: "1 - 3 km",
      transitTime: "5 - 15 mins",
      route: "Immediate plant vicinity",
      status: "Priority Local Radius",
      slumpAdvice: "Fastest turnaround time"
    },
    {
      name: "Kharadi",
      approxDistance: "9 - 14 km",
      transitTime: "25 - 40 mins",
      route: "Via Pune-Ahmednagar Highway & EON IT Free Zone",
      status: "High Commercial Pour Zone",
      slumpAdvice: "Retarders dosed for peak traffic windows"
    },
    {
      name: "Pune City",
      approxDistance: "16 - 22 km",
      transitTime: "40 - 55 mins",
      route: "Via Nagar Rd / Yerawada corridor",
      status: "Synchronized Convoy Dispatch",
      slumpAdvice: "Extended slump retention admixtures applied"
    },
    {
      name: "Haveli",
      approxDistance: "12 - 18 km",
      transitTime: "30 - 45 mins",
      route: "Via Kesnand / regional bypass networks",
      status: "Standard Regional Route",
      slumpAdvice: "Strict transit drum agitation"
    },
    {
      name: "Viman Nagar & Nagar Road",
      approxDistance: "12 - 16 km",
      transitTime: "30 - 45 mins",
      route: "Via Pune-Ahmednagar highway expressway",
      status: "Commercial & Mall Corridor",
      slumpAdvice: "Boom pump timing coordinated"
    },
    {
      name: "Bakori & Perne",
      approxDistance: "6 - 10 km",
      transitTime: "15 - 30 mins",
      route: "Via Bakori link road",
      status: "Residential Development Belt",
      slumpAdvice: "Continuous pour scheduling available"
    }
  ];

  const currentRoute = routeDetails[selectedAreaIndex] || routeDetails[0];

  const handleAreaClick = (idx, areaName) => {
    setSelectedAreaIndex(idx);
    if (onSelectArea) {
      onSelectArea(areaName);
    }
  };

  return (
    <section id="service-area" className="py-14 sm:py-20 md:py-28 bg-[#f8fafc] dark:bg-[#0e1117] relative overflow-hidden border-b border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-800 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Reach & Logistics</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight mb-4 sm:mb-5">
            Serving Construction Sites Across Pune
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Strategically located along the Lonikand-Lohagaon arterial corridor in Wagholi, enabling prompt transit mixer mobilization across eastern and central Pune construction sectors.
          </p>
        </div>

        {/* 2-Column: Interactive Logistics Corridor + Physical Address Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Pune Transit Hub & Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#181c24] rounded-2xl p-5 sm:p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-amber-500 animate-ping" />
                  <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-900 dark:text-white">
                    Pune Logistics Corridor Check
                  </span>
                </div>
                <span className="text-[11px] text-blue-800 dark:text-amber-400 font-semibold bg-blue-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-amber-500/20">
                  Tap area below
                </span>
              </div>

              {/* Interactive Region Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {business.serviceAreas.map((area, idx) => {
                  const isSelected = selectedAreaIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedAreaIndex(idx)}
                      className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all min-h-[72px] flex flex-col justify-between active:scale-95 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-700 dark:bg-amber-500 text-white dark:text-slate-950 font-bold border-blue-800 dark:border-amber-600 shadow-md shadow-blue-900/10 dark:shadow-amber-500/20'
                          : area.highlight
                          ? 'bg-blue-50 dark:bg-white/[0.06] border-blue-200 dark:border-white/15 text-slate-800 dark:text-slate-200 hover:bg-blue-100/60 dark:hover:bg-white/10'
                          : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white dark:text-slate-950' : 'text-blue-700 dark:text-amber-400'}`} />
                        <span className="font-heading font-bold text-xs sm:text-sm leading-tight">{area.name}</span>
                      </div>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-blue-100 dark:text-slate-900 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                        {area.note}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Live Transit Calculation Box for Selected Area */}
              <div className="bg-slate-50 dark:bg-[#13161c] rounded-xl p-4 sm:p-5 border border-blue-200 dark:border-white/10 shadow-xs mb-5 sm:mb-6 space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 dark:text-amber-400" />
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      Transit to {currentRoute.name}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                    {currentRoute.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block mb-0.5 font-medium">Approx. Distance:</span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{currentRoute.approxDistance}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block mb-0.5 font-medium">Transit Window:</span>
                    <span className="font-bold text-blue-700 dark:text-amber-400 text-xs sm:text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {currentRoute.transitTime}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-slate-500 dark:text-slate-400 block mb-0.5 font-medium">Mix Protection:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 text-[11px]">{currentRoute.slumpAdvice}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 shrink-0" />
                  <span className="truncate">Route: {currentRoute.route}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-3.5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Delivery to <strong className="text-slate-950 dark:text-white">{currentRoute.name}</strong>
              </span>
              <button
                type="button"
                onClick={() => handleAreaClick(selectedAreaIndex, currentRoute.name)}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-3 min-h-[44px] rounded-lg shadow-sm transition-all active:scale-95 text-center"
              >
                Request Quote for {currentRoute.name}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Physical Address & Google Maps Direction Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-white to-blue-50/40 dark:from-[#181c24] dark:to-[#13161c] rounded-2xl p-5 sm:p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between shadow-sm relative"
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-700 dark:text-amber-400 flex items-center justify-center mb-4 sm:mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mb-1.5">
                Plant & Dispatch Location
              </h3>
              
              <p className="text-xs font-bold text-blue-700 dark:text-amber-400 tracking-wider mb-5 sm:mb-6">
                Walunj Brother's RMC
              </p>

              <div className="space-y-4 mb-6 sm:mb-8 text-sm text-slate-700 dark:text-slate-300">
                <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#14171d] border border-slate-200 dark:border-white/10 shadow-xs space-y-1">
                  <p className="text-slate-900 dark:text-white font-semibold">{business.address.line1}</p>
                  <p>{business.address.line2}</p>
                  <p>{business.address.line3}</p>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs sm:text-sm">{business.address.country} — {business.address.pinCode}</p>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Direct access to Lonikand - Lohagaon Road</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Transit mixer entry & turning clearance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 dark:text-amber-400 shrink-0" />
                    <span>Computerized weighbridge and batch inspection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 dark:bg-amber-500 hover:bg-blue-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-heading font-extrabold text-sm min-h-[48px] py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-900/15 dark:shadow-amber-500/20 active:scale-95 transition-all text-center"
              >
                <Navigation className="w-4 h-4 fill-white dark:fill-slate-950" />
                <span>Get Directions on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
