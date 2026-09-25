import React from 'react';
import { ShieldCheck, Clock, Truck, Headphones } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      icon: ShieldCheck,
      title: "QUALITY CONCRETE",
      desc: "Uniform batching & raw material control"
    },
    {
      icon: Clock,
      title: "TIMELY DELIVERY",
      desc: "Synchronized transit to preserve mix freshness"
    },
    {
      icon: Truck,
      title: "RELIABLE TRANSPORT",
      desc: "Dedicated agitated transit mixer fleet"
    },
    {
      icon: Headphones,
      title: "SITE SUPPORT",
      desc: "Direct communication with batching team"
    }
  ];

  return (
    <div className="bg-[#181c24] border-y border-white/10 relative z-20 py-6 sm:py-8 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all duration-200 group"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500 group-hover:border-orange-400 flex items-center justify-center text-orange-400 group-hover:text-slate-950 shrink-0 transition-colors duration-200">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-extrabold text-[11px] sm:text-xs md:text-sm text-white tracking-wide uppercase group-hover:text-orange-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-2 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
