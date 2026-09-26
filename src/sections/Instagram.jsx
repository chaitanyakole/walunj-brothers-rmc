import { ArrowUpRight } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { business } from '../config/business';
import { images } from '../data/images';

export default function InstagramSection() {
  const instagramUrl = business.instagram || "https://instagram.com";

  // Visual preview cards representing construction site reels / operations
  const feedSnapshots = [
    {
      id: 1,
      image: images.pouring,
      caption: "High-slump slab casting at Wagholi residential site #WalunjBrothersRMC #PuneConstruction"
    },
    {
      id: 2,
      image: images.transport,
      caption: "Transit mixer moving fresh mix along Lonikand highway corridor #ReadyMixConcrete"
    },
    {
      id: 3,
      image: images.qualityTest,
      caption: "Strict slump cone verification and cube specimen testing for quality assurance #QualityConcrete"
    },
    {
      id: 4,
      image: images.commercial,
      caption: "Commercial tower basement raft pour in progress #ConstructionPune #RMCSuppliers"
    }
  ];

  return (
    <section id="instagram" className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#0E1117] border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800/60 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-widest mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Social Updates</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white">
              Follow Walunj Brother's RMC
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Stay connected with daily site deliveries, batching operations, and construction highlights around Pune.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-pink-500/20 hover:opacity-95 hover:shadow-lg active:scale-95 transition-all w-full sm:w-auto shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Visit Instagram Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Visual Feed Preview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {feedSnapshots.map((item) => (
            <a
              key={item.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-pink-500/50 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt="Walunj Brother's RMC Instagram post"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                <div className="flex items-center gap-1.5 text-pink-300 mb-1.5">
                  <InstagramIcon className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Walunj RMC</span>
                </div>
                <p className="text-xs text-white line-clamp-2 leading-snug">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
