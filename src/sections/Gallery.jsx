import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/images';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Plant & Facility', 'Logistics', 'Site Operations', 'Commercial', 'Residential', 'Infrastructure'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    // Find index in overall galleryItems
    const selectedItem = filteredItems[index];
    const overallIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    setCurrentImageIndex(overallIndex !== -1 ? overallIndex : 0);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-28 bg-[#121418] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Overview</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 sm:mb-5">
            Operations & Site Gallery
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
            A visual glimpse into our batching facilities, transit mixer logistics, precision pump pouring, and construction deliveries across Pune.
          </p>
        </div>

        {/* Filter Bar (Scrollable chips on mobile) */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 sm:pb-0 sm:flex-wrap mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 min-h-[38px] rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 active:scale-95 ${
                activeCategory === cat
                  ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#181c24] border border-white/10 hover:border-orange-500/40 cursor-pointer shadow-xl aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 sm:opacity-70 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
              </div>

              {/* Content Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-500/20 border border-orange-500/30 px-2 py-0.5 rounded-full mb-1.5 inline-block">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-white text-sm sm:text-lg group-hover:text-orange-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Trigger / Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <button
            onClick={() => handleOpenLightbox(0)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all active:scale-95"
          >
            <Maximize2 className="w-4 h-4 text-orange-400" />
            <span>Open Fullscreen Gallery Viewer</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        items={galleryItems}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
