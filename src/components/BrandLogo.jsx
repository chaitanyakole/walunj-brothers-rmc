import React from 'react';

/**
 * Walunj Brother's RMC - Ultra-Modern Geometric 'WB' Architectural Monogram
 * 
 * Design Philosophy:
 * - Geometric 'WB' Interlocking Beams: Heavy structural concrete columns and cantilevers 
 *   fused together into a monolithic architectural monogram.
 * - Left Profile ('W'): Dual-slanted reinforced concrete cantilevers engineered with 3D beveled light/shadow faces.
 * - Right Profile ('B'): Twin load-bearing structural arch bays anchored directly to the central spine.
 * - Center Nexus: A diamond-cut golden aggregate crystal representing IS-certified compressive strength.
 * - Dynamic Dual-Theme Gradients: Tailored for Architectural Blueprint (Cobalt & Cyan) and Industrial Dark (Graphite & Molten Amber).
 */

export function BrandMark({ size = 44, theme = 'light', className = "" }) {
  const isLight = theme === 'light' || theme === 'blueprint';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-md select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Shield Border Gradient */}
        <linearGradient id={isLight ? "wbBorderBp" : "wbBorderInd"} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0f4c81" />
              <stop offset="100%" stopColor="#f59e0b" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#38bdf8" />
            </>
          )}
        </linearGradient>

        {/* Shield Backing Gradient */}
        <linearGradient id={isLight ? "wbBgBp" : "wbBgInd"} x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#0f4c81" />
              <stop offset="100%" stopColor="#082846" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#1a202c" />
              <stop offset="100%" stopColor="#0b0e14" />
            </>
          )}
        </linearGradient>

        {/* Monogram Primary Beam Gradient (W Left & Spine) */}
        <linearGradient id={isLight ? "wbBeamPriBp" : "wbBeamPriInd"} x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </>
          )}
        </linearGradient>

        {/* Monogram Accent Beam Gradient (B Loops & Cantilevers) */}
        <linearGradient id={isLight ? "wbAccentBp" : "wbAccentInd"} x1="40" y1="20" x2="90" y2="80" gradientUnits="userSpaceOnUse">
          {isLight ? (
            <>
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0284c7" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </>
          )}
        </linearGradient>

        {/* Diamond Core Slump Crystal Gradient */}
        <linearGradient id="wbCoreDiamond" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Subtle Depth Shadow */}
        <filter id="wbGlowFilter" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor={isLight ? "#0284c7" : "#f59e0b"} floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. Outer Architectural Hexagonal Shield Frame */}
      <polygon
        points="50,4 90,24 90,76 50,96 10,76 10,24"
        fill={`url(#${isLight ? 'wbBgBp' : 'wbBgInd'})`}
        stroke={`url(#${isLight ? 'wbBorderBp' : 'wbBorderInd'})`}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />

      {/* 2. Precision Architectural Drafting Grid Lines (Inside Shield) */}
      <g opacity={isLight ? "0.18" : "0.08"} stroke="#ffffff" strokeWidth="0.8">
        <line x1="20" y1="50" x2="80" y2="50" strokeDasharray="2 2" />
        <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="34" fill="none" strokeDasharray="3 3" />
      </g>

      {/* 3. ULTRA-MODERN GEOMETRIC 'WB' MONOGRAM */}
      <g filter="url(#wbGlowFilter)">
        
        {/* --- PART 1: THE 'W' STRUCTURAL BEAMS (Left Flank) --- */}
        
        {/* W-1: Left Outer Slanted Column */}
        <path
          d="M20 28 L28 28 L35 70 L27 70 Z"
          fill={`url(#${isLight ? 'wbBeamPriBp' : 'wbBeamPriInd'})`}
        />
        {/* W-1 Bevel Highlight Face (3D concrete chamfer) */}
        <path
          d="M20 28 L23 28 L30 70 L27 70 Z"
          fill="#ffffff"
          opacity="0.6"
        />

        {/* W-2: Inner Rising Diagonal Column */}
        <path
          d="M32 70 L40 40 L47 40 L39 70 Z"
          fill={`url(#${isLight ? 'wbBeamPriBp' : 'wbBeamPriInd'})`}
        />
        {/* W-2 Top Chamfer Edge */}
        <path
          d="M40 40 L47 40 L45 44 L38 44 Z"
          fill="#ffffff"
          opacity="0.75"
        />

        {/* --- PART 2: THE CENTRAL STRUCTURAL SPINE (Shared W & B anchor) --- */}
        <path
          d="M45 22 L53 22 L53 78 L45 78 Z"
          fill={`url(#${isLight ? 'wbBeamPriBp' : 'wbBeamPriInd'})`}
        />
        {/* Spine 3D Shadow Flank */}
        <path
          d="M51 22 L53 22 L53 78 L51 78 Z"
          fill="#000000"
          opacity="0.2"
        />

        {/* --- PART 3: THE 'B' CANTILEVER LOOPS (Right Flank) --- */}
        
        {/* B-Top: Upper Cantilever Loop */}
        <path
          d="M53 22 H71 C77.5 22 82 26.5 82 33 C82 39.5 77.5 44 71 44 H53 V22 Z 
             M61 30 V36 H70 C72.5 36 74 34.8 74 33 C74 31.2 72.5 30 70 30 H61 Z"
          fill={`url(#${isLight ? 'wbAccentBp' : 'wbAccentInd'})`}
          fillRule="evenodd"
        />

        {/* B-Bottom: Lower Cantilever Foundation Loop (Slightly bolder base for structural balance) */}
        <path
          d="M53 44 H73 C79.5 44 84 49 84 56 C84 63 79.5 68 73 68 H53 V44 Z 
             M61 52 V60 H72 C74.5 60 76 58.5 76 56 C76 53.5 74.5 52 72 52 H61 Z"
          fill={`url(#${isLight ? 'wbAccentBp' : 'wbAccentInd'})`}
          fillRule="evenodd"
        />

        {/* B Loop Highlight Top Bevel */}
        <path
          d="M53 22 H71 C77.5 22 82 26.5 82 33 L80 33 C80 27.5 76 24 71 24 H53 V22 Z"
          fill="#ffffff"
          opacity="0.5"
        />

        {/* --- PART 4: NEXUS DIAMOND CORE (Aggregate Slump Apex) --- */}
        {/* Sits at the structural center (x=49, y=44) */}
        <path
          d="M49 39 L54 44 L49 49 L44 44 Z"
          fill="url(#wbCoreDiamond)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="49" cy="44" r="1.2" fill="#ffffff" />

      </g>

      {/* 4. Base Footing Micro Ticks (Indicating precision millimeter slump) */}
      <circle cx="36" cy="85" r="1.8" fill={isLight ? "#38bdf8" : "#94a3b8"} />
      <circle cx="50" cy="88" r="2.2" fill="#f59e0b" />
      <circle cx="64" cy="85" r="1.8" fill={isLight ? "#38bdf8" : "#94a3b8"} />
    </svg>
  );
}

export default function BrandLogo({
  variant = 'full', // 'full' | 'icon' | 'stacked'
  size = 'md',     // 'sm' | 'md' | 'lg' | 'xl'
  showTagline = true,
  theme = 'light', // 'light' | 'dark'
  className = "",
  textClassName = "",
  onClick = null
}) {
  const iconSizes = {
    sm: 34,
    md: 42,
    lg: 54,
    xl: 70
  };

  const markSize = typeof size === 'number' ? size : iconSizes[size] || 42;
  const isLight = theme === 'light' || theme === 'blueprint';

  // Variant 1: Pure Icon Only
  if (variant === 'icon') {
    return (
      <div 
        className={`inline-flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`} 
        onClick={onClick}
      >
        <BrandMark size={markSize} theme={theme} />
      </div>
    );
  }

  // Variant 2: Stacked (Used in Preloader, High-Impact Centers, or Large Footers)
  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center text-center group cursor-pointer select-none ${className}`}
        onClick={onClick}
      >
        <div className={`relative p-2.5 rounded-2xl transition-all duration-300 ${
          isLight
            ? 'bg-blue-50/80 border border-blue-200/90 shadow-md group-hover:border-blue-400 group-hover:shadow-lg'
            : 'bg-white/5 border border-white/10 shadow-2xl group-hover:border-amber-500/40 group-hover:bg-amber-500/5'
        } mb-3`}>
          <BrandMark size={markSize} theme={theme} />
        </div>

        <div className="flex flex-col items-center">
          <span className={`font-heading font-black text-xl sm:text-2xl tracking-tight leading-none ${
            isLight ? 'text-slate-900 group-hover:text-blue-900' : 'text-white group-hover:text-amber-400'
          }`}>
            WALUNJ <span className={isLight ? 'text-blue-700' : 'text-amber-500'}>BROTHER'S</span>
          </span>

          {showTagline && (
            <div className="flex items-center gap-2 mt-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                isLight 
                  ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                RMC
              </span>
              <span className={`text-[11px] uppercase tracking-[0.2em] font-bold ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}>
                Ready-Mix Concrete • Pune
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Variant 3 (Default): Full Horizontal Lockup (Navbar, Headers, Standard Footer)
  return (
    <div
      className={`flex items-center gap-3 group select-none cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Icon Housing with Subtle Modern Rim */}
      <div className={`relative p-1.5 rounded-2xl transition-all duration-300 shrink-0 ${
        isLight
          ? 'bg-blue-50/70 border border-blue-200/80 shadow-xs group-hover:border-blue-400 group-hover:bg-blue-100/60 group-hover:scale-105'
          : 'bg-white/5 border border-white/10 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 group-hover:scale-105'
      }`}>
        <BrandMark size={markSize} theme={theme} />
      </div>

      {/* Typography Lockup */}
      <div className={`flex flex-col min-w-0 ${textClassName}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-black text-base sm:text-lg md:text-xl tracking-tight truncate transition-colors ${
            isLight ? 'text-slate-900 group-hover:text-blue-700' : 'text-white group-hover:text-amber-400'
          }`}>
            WALUNJ
          </span>
          <span className={`font-heading font-black text-base sm:text-lg md:text-xl tracking-tight truncate ${
            isLight ? 'text-blue-700' : 'text-amber-500'
          }`}>
            BROTHER'S
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-black tracking-wider leading-none shrink-0 ${
              isLight
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400'
                : 'bg-amber-500/20 border border-amber-500/40 text-amber-400'
            }`}>
              RMC
            </span>
            <span className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-bold truncate ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              Ready-Mix Concrete • Pune
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
