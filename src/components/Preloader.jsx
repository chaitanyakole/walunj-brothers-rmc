import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMark } from './BrandLogo';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const phases = [
    { text: "Initializing Batching Systems...", range: [0, 25] },
    { text: "Calibrating Mix Proportions & IS Slump...", range: [25, 55] },
    { text: "Verifying Cementitious Materials & Aggregates...", range: [55, 80] },
    { text: "Ready-Mix Fleet Dispatch Ready...", range: [80, 99] },
    { text: "Walunj Brother's RMC • Ready", range: [100, 100] }
  ];

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth non-linear progress increment
        const increment = prev < 40 ? 6 : prev < 75 ? 8 : prev < 90 ? 5 : 7;
        const next = Math.min(100, prev + increment);
        return next;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  const phaseIndex =
    progress <= 25 ? 0 :
    progress <= 55 ? 1 :
    progress <= 80 ? 2 :
    progress < 100 ? 3 : 4;

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsVisible(false);
    document.body.style.overflow = '';
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="walunj-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0f14] text-white select-none px-4"
          aria-label="Walunj Brother's RMC Loading"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute w-96 h-96 rounded-full bg-orange-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute w-64 h-64 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Skip Intro
          </button>

          {/* Central Logo & Mixer Agitation Spinner */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Rotating Transit Mixer Drum Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-orange-500/30"
            />

            {/* Inner Counter-Rotating Pulse Accent */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-orange-500/15"
            />

            {/* Glowing Brand Mark Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 p-3 sm:p-4 rounded-2xl bg-[#141822]/90 border border-white/15 shadow-2xl shadow-orange-500/20"
            >
              <BrandMark size={56} className="sm:w-16 sm:h-16" />
            </motion.div>
          </div>

          {/* Brand Typography */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-white"
            >
              WALUNJ <span className="text-orange-500">BROTHER'S</span>
            </motion.div>
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs uppercase tracking-[0.25em] text-orange-400 font-bold mt-1"
            >
              Ready-Mix Concrete Plant • Pune
            </motion.div>
          </div>

          {/* Progress Bar & Phase Status */}
          <div className="w-full max-w-xs sm:max-w-sm space-y-3">
            {/* Progress Percentage & Status */}
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400 tracking-wider truncate mr-2">
                {phases[phaseIndex].text}
              </span>
              <span className="text-orange-400 font-mono font-extrabold shrink-0">
                {progress}%
              </span>
            </div>

            {/* Bar Track */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative p-0.5 border border-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 shadow-md shadow-orange-500/50"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Bottom IS Standard Micro-Label */}
            <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <span>IS 456 : 2000</span>
              <span>•</span>
              <span>IS 10262 : 2019</span>
              <span>•</span>
              <span>IS 4926 : 2003</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
