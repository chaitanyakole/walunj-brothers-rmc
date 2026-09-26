import React from 'react';
import { motion } from 'framer-motion';

/**
 * ThemeChangerLogo
 * 
 * Official Vector Emblem for the Walunj Brother's RMC Theme Switcher.
 * Represents the architectural duality:
 * - Half 1 (Blueprint): Precision cobalt drafting grid, compass, and millimeter caliper (#0F4C81, #38BDF8).
 * - Half 2 (Industrial): Heavy-duty obsidian, transit mixer drum, and molten amber flame (#F59E0B, #EA580C).
 * - Center Orbit: Bi-directional theme transition indicator showing continuous agile batching.
 */
export default function ThemeChangerLogo({
  activeTheme = 'blueprint',
  size = 28,
  animated = true,
  className = ""
}) {
  const isDark = activeTheme === 'industrial';

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      whileHover={animated ? { rotate: 180 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <defs>
        {/* Blueprint gradient */}
        <linearGradient id="themeBpGrad" x1="0" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#0f4c81" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>

        {/* Industrial gradient */}
        <linearGradient id="themeIndGrad" x1="24" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#181c24" />
        </linearGradient>

        {/* Outer Ring Dual Gradient */}
        <linearGradient id="themeRingGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0f4c81" />
          <stop offset="55%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Active Theme Glow Filter */}
        <filter id="themeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Rotating Dual-Toned Caliber Ring */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="url(#themeRingGrad)"
        strokeWidth="2.5"
        strokeDasharray="4 2"
        className="opacity-90"
      />

      {/* Left Hemisphere: Architectural Blueprint (Light/Drafting) */}
      <path
        d="M24 3 A21 21 0 0 0 24 45 Z"
        fill="url(#themeBpGrad)"
      />

      {/* Blueprint Grid Lines & Crosshairs inside Left Hemisphere */}
      <g opacity="0.35" stroke="#ffffff" strokeWidth="0.8">
        <line x1="8" y1="16" x2="24" y2="16" />
        <line x1="5" y1="24" x2="24" y2="24" />
        <line x1="8" y1="32" x2="24" y2="32" />
        <line x1="12" y1="7" x2="12" y2="41" strokeDasharray="1.5 1.5" />
        <line x1="18" y1="4" x2="18" y2="44" strokeDasharray="1.5 1.5" />
      </g>

      {/* Blueprint Compass / Caliper Icon on Left */}
      <g stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity={!isDark ? "1" : "0.75"}>
        {/* Drafting needle & pivot */}
        <circle cx="15" cy="19" r="1.5" fill="#38bdf8" />
        <path d="M15 20.5 L11 29" />
        <path d="M15 20.5 L19 29" />
        {/* Caliper arc */}
        <path d="M12.5 25.5 Q15 26.5 17.5 25.5" strokeWidth="1.2" stroke="#38bdf8" />
      </g>

      {/* Right Hemisphere: Industrial Heavy-Duty (Dark/Batching) */}
      <path
        d="M24 3 A21 21 0 0 1 24 45 Z"
        fill="url(#themeIndGrad)"
      />

      {/* Industrial Mixer Agitation Ribs & Spark on Right */}
      <g opacity={isDark ? "1" : "0.75"}>
        {/* Transit Mixer Drum Facet */}
        <path
          d="M27 18 L36 15 L40 22 L37 31 L29 33 Z"
          fill="#ea580c"
          opacity="0.6"
        />
        {/* Molten Spiral Blade */}
        <path
          d="M28 20 Q35 21 38 27"
          stroke="#fde047"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M27 26 Q32 28 35 32"
          stroke="#fb923c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Spark/Flame Star */}
        <circle cx="33" cy="18" r="1.2" fill="#fff" />
        <circle cx="37" cy="22" r="1" fill="#fde047" />
      </g>

      {/* Central Division S-Curve / Yin-Yang Flow */}
      <path
        d="M24 3 C28 14 20 20 24 24 C28 28 20 34 24 45"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Center Orbit Core Node (Lights up with active theme) */}
      <circle
        cx="24"
        cy="24"
        r="4.5"
        fill={isDark ? "#ea580c" : "#0284c7"}
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <circle
        cx="24"
        cy="24"
        r="2"
        fill={isDark ? "#fde047" : "#e0f2fe"}
      />
    </motion.svg>
  );
}

/**
 * Dedicated Blueprint Theme Badge Logo
 */
export function BlueprintThemeMark({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#0f4c81" />
      {/* Millimeter grid */}
      <line x1="4" y1="8" x2="20" y2="8" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="4" y1="16" x2="20" y2="16" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="8" y1="4" x2="8" y2="20" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.5" />
      <line x1="16" y1="4" x2="16" y2="20" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.5" />
      {/* Compass Caliper */}
      <circle cx="12" cy="7" r="1.5" fill="#f59e0b" />
      <path d="M12 8.5 L7 19" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8.5 L17 19" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 15 Q12 16.5 15 15" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Dedicated Industrial Heavy-Duty Theme Badge Logo
 */
export function IndustrialThemeMark({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="24" height="24" rx="6" fill="#181c24" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
      {/* Transit Mixer Drum & Flame */}
      <path d="M6 14 L10 7 L17 9 L19 16 L14 19 L8 18 Z" fill="#ea580c" opacity="0.85" />
      <path d="M8 12 Q13 11 16 16" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
      {/* Molten Core */}
      <circle cx="15" cy="11" r="1.5" fill="#ffffff" />
    </svg>
  );
}
