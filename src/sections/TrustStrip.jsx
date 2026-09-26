import React from 'react';
import { ShieldCheck, Clock, Truck, Headphones } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      icon: ShieldCheck,
      badge: "IS 456 Certified",
      title: "QUALITY CONCRETE",
      desc: "Computerized aggregate weigh-batching & slump control"
    },
    {
      icon: Clock,
      badge: "< 45m Transit Corridor",
      title: "TIMELY DELIVERY",
      desc: "Scheduled delivery to preserve hydration & pumpability"
    },
    {
      icon: Truck,
      badge: "Agitated Fleet",
      title: "RELIABLE TRANSPORT",
      desc: "Continuous agitation transit mixers with pump line access"
    },
    {
      icon: Headphones,
      badge: "Direct Contact",
      title: "SITE COORDINATION",
      desc: "Direct coordination with batching desk & site engineers"
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-[#11141b]/90 backdrop-blur-md border-y border-slate-200/90 dark:border-white/10 relative z-20 py-6 sm:py-8 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] hover:bg-blue-50/70 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/5 hover:border-blue-300 dark:hover:border-amber-500/30 transition-all duration-300 group shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 group-hover:bg-[#0f4c81] dark:group-hover:bg-amber-500 group-hover:border-[#0f4c81] dark:group-hover:border-amber-500 flex items-center justify-center text-[#0f4c81] dark:text-amber-400 group-hover:text-white dark:group-hover:text-slate-950 shrink-0 transition-colors duration-200 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#0f4c81] dark:text-amber-400 bg-blue-100/70 dark:bg-amber-500/15 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-slate-900 dark:text-white tracking-wide uppercase group-hover:text-[#0f4c81] dark:group-hover:text-amber-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
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
