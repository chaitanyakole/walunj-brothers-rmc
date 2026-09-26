import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, THEMES } from '../context/ThemeContext';
import ThemeChangerLogo, { BlueprintThemeMark, IndustrialThemeMark } from './ThemeChangerLogo';

export default function ThemeSwitcher({ variant = 'toggle', className = '' }) {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  // Segmented control style (Icon-only)
  if (variant === 'segmented') {
    return (
      <div className={`p-1 rounded-xl bg-slate-100 dark:bg-[#181c24] border border-slate-200 dark:border-white/10 ${className}`}>
        <div className="grid grid-cols-2 gap-1 relative">
          {/* Blueprint Option (Primary) */}
          <button
            type="button"
            onClick={() => setTheme(THEMES.BLUEPRINT)}
            title="Architectural Blueprint (Primary)"
            aria-label="Architectural Blueprint (Primary)"
            className={`relative flex items-center justify-center py-2 px-3 rounded-lg transition-all min-h-[40px] z-10 ${
              !isDark
                ? 'text-[#0f4c81] shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {!isDark && (
              <motion.div
                layoutId="theme-active-indicator"
                className="absolute inset-0 bg-white rounded-lg border border-slate-200 shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <BlueprintThemeMark size={18} className="shrink-0" />
          </button>

          {/* Industrial Option */}
          <button
            type="button"
            onClick={() => setTheme(THEMES.INDUSTRIAL)}
            title="Industrial Heavy-Duty (Dark)"
            aria-label="Industrial Heavy-Duty (Dark)"
            className={`relative flex items-center justify-center py-2 px-3 rounded-lg transition-all min-h-[40px] z-10 ${
              isDark
                ? 'text-amber-400 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isDark && (
              <motion.div
                layoutId="theme-active-indicator"
                className="absolute inset-0 bg-[#0e1117] rounded-lg border border-amber-500/30 shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <IndustrialThemeMark size={18} className="shrink-0" />
          </button>
        </div>
      </div>
    );
  }

  // Floating switcher pill (Icon only)
  if (variant === 'floating') {
    return (
      <motion.button
        type="button"
        id="floating-theme-switcher"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className={`fixed left-4 bottom-20 md:bottom-6 z-40 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-xl border backdrop-blur-md transition-all ${
          isDark
            ? 'bg-[#181c24]/95 border-amber-500/40 text-amber-400 hover:border-amber-400 shadow-black/50 hover:shadow-amber-500/10'
            : 'bg-white/95 border-blue-200/90 text-[#0f4c81] hover:border-blue-400 shadow-blue-900/10 hover:shadow-blue-500/10'
        } ${className}`}
        aria-label={`Toggle theme between Blueprint and Industrial (Active: ${isDark ? 'Industrial' : 'Blueprint'})`}
        title={`Active: ${isDark ? 'Industrial Dark' : 'Architectural Blueprint Primary'}. Click to switch theme.`}
      >
        <ThemeChangerLogo activeTheme={theme} size={24} />
      </motion.button>
    );
  }

  // Icon-only navbar button toggle
  return (
    <motion.button
      type="button"
      id="desktop-theme-switcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border transition-all ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 border-white/15 text-amber-400 hover:border-amber-400/50 shadow-xs'
          : 'bg-slate-100/90 hover:bg-blue-50 border-slate-200 hover:border-blue-300 shadow-xs'
      } ${className}`}
      aria-label={`Switch Theme (Active: ${isDark ? 'Industrial Dark' : 'Architectural Blueprint Primary'})`}
      title={`Switch to ${isDark ? 'Architectural Blueprint (Primary)' : 'Industrial Heavy-Duty (Dark)'} theme`}
    >
      <ThemeChangerLogo activeTheme={theme} size={22} className="shrink-0" />
    </motion.button>
  );
}
