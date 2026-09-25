import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, items, currentIndex, onClose, onPrev, onNext }) {
  const [touchStartX, setTouchStartX] = React.useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      onNext(); // swiped left
    } else if (diff < -50) {
      onPrev(); // swiped right
    }
    setTouchStartX(null);
  };

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Backdrop close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 active:scale-95 transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button (Hidden on very narrow mobile screens in favor of touch swipe, but visible on sm+) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="hidden sm:flex absolute left-2 sm:left-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-orange-500 text-white items-center justify-center transition-all border border-white/10 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="hidden sm:flex absolute right-2 sm:right-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-orange-500 text-white items-center justify-center transition-all border border-white/10 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[85vh] w-full bg-[#161a22] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex-1 bg-black/40 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[65vh]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-contain max-h-[65vh]"
            />
          </div>

          <div className="p-3.5 sm:p-6 bg-[#161a22] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                  {currentItem.category}
                </span>
                <span className="text-xs text-slate-400">
                  {currentIndex + 1} of {items.length}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base sm:text-xl text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl line-clamp-2 sm:line-clamp-none">
                {currentItem.description}
              </p>
            </div>

            {/* Mobile Prev / Next Buttons */}
            <div className="flex sm:hidden items-center justify-between gap-2 pt-2 border-t border-white/5">
              <button
                type="button"
                onClick={onPrev}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 text-slate-200 text-xs font-semibold active:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <span className="text-[11px] text-slate-400">Swipe to browse</span>
              <button
                type="button"
                onClick={onNext}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 text-slate-200 text-xs font-semibold active:bg-white/10"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
