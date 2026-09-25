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
    <section id="service-area" className="py-20 md:py-28 bg-[#181c24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Reach & Logistics</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Serving Construction Sites Across Pune
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Strategically located along the Lonikand-Lohagaon arterial corridor in Wagholi, enabling prompt transit mixer mobilization across eastern and central Pune construction sectors.
          </p>
        </div>

        {/* 2-Column: Interactive Logistics Corridor + Physical Address Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Pune Transit Hub & Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#14171d] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-orange-500 animate-ping" />
                  <span className="font-heading font-bold text-sm uppercase tracking-wider text-slate-200">
                    Pune Logistics Corridor Check
                  </span>
                </div>
                <span className="text-xs text-orange-400 font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                  Select your area below
                </span>
              </div>

              {/* Interactive Region Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {business.serviceAreas.map((area, idx) => {
                  const isSelected = selectedAreaIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedAreaIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-orange-500 text-slate-950 font-bold border-orange-400 shadow-lg shadow-orange-500/20 scale-[1.02]'
                          : area.highlight
                          ? 'bg-orange-500/10 border-orange-500/30 text-white hover:bg-orange-500/20'
                          : 'bg-white/[0.02] border-white/5 text-slate-300 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-orange-400'}`} />
                        <span className="font-heading font-bold text-xs truncate">{area.name}</span>
                      </div>
                      <p className={`text-[10px] leading-tight line-clamp-1 ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        {area.note}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Live Transit Calculation Box for Selected Area */}
              <div className="bg-[#191d26] rounded-xl p-5 border border-orange-500/30 shadow-inner mb-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-orange-400" />
                    <h4 className="font-heading font-bold text-base text-white">
                      Transit to {currentRoute.name}
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {currentRoute.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Approx. Road Distance:</span>
                    <span className="font-bold text-white text-sm">{currentRoute.approxDistance}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Est. Transit Window:</span>
                    <span className="font-bold text-orange-400 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {currentRoute.transitTime}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block mb-0.5">Mix Protection:</span>
                    <span className="font-medium text-slate-300 text-[11px]">{currentRoute.slumpAdvice}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-1 border-t border-white/5 flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Route: {currentRoute.route}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Need RMC delivered to <strong className="text-white">{currentRoute.name}</strong>?
              </span>
              <button
                type="button"
                onClick={() => handleAreaClick(selectedAreaIndex, currentRoute.name)}
                className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
              >
                Request Delivery to {currentRoute.name}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Physical Address & Google Maps Direction Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#1a1f29] to-[#14171e] rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-2xl relative"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Plant & Dispatch Location
              </h3>
              
              <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-6">
                WALUNJ BROTHER'S RMC
              </p>

              <div className="space-y-4 mb-8 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                  <p className="text-white font-medium">{business.address.line1}</p>
                  <p>{business.address.line2}</p>
                  <p>{business.address.line3}</p>
                  <p className="text-slate-400 font-semibold">{business.address.country} — {business.address.pinCode}</p>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Direct access to Lonikand - Lohagaon Road</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Transit mixer entry & turning clearance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Computerized weighbridge and batch inspection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-heading font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
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
