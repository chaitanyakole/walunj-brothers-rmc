import React from 'react';

/**
 * Walunj Brother's RMC - Official Vector Brand Emblem & Logo
 * 
 * Design Concept:
 * - Industrial Hexagonal Shield: Signifies high-strength concrete, structural foundation & durability.
 * - Monogram 'W' & 'B': Heavy geometric concrete beams forming an architectural base.
 * - Transit Mixer Drum: The universal, unmistakable symbol of Ready-Mix Concrete (RMC).
 * - Triple Aggregate Pyramids: Cement, Sand, and Aggregates unified into superior grade concrete.
 * - Dynamic Flow Blades: Continuous batching, flowability, and precision slump.
 */

export function BrandMark({ size = 44, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-md ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Exterior border gradient */}
        <linearGradient id="wbLogoBorder" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Shield background fill */}
        <linearGradient id="wbLogoBg" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e2430" />
          <stop offset="100%" stopColor="#0f131a" />
        </linearGradient>

        {/* Mixer drum gradient */}
        <linearGradient id="wbDrumGrad" x1="28" y1="28" x2="72" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a1a" />
          <stop offset="55%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        {/* Metallic beam gradient */}
        <linearGradient id="wbBeamGrad" x1="15" y1="35" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="45%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Golden aggregate highlight */}
        <linearGradient id="wbGoldAccent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="wbOrangeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexagonal Industrial Base Shield */}
      <polygon
        points="50,4 88,24 88,76 50,96 12,76 12,24"
        fill="url(#wbLogoBg)"
        stroke="url(#wbLogoBorder)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Hexagon Frame Accent */}
      <polygon
        points="50,11 82,29 82,71 50,89 18,71 18,29"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeOpacity="0.08"
        strokeLinejoin="round"
      />

      {/* Transit Mixer Drum Geometry (Central RMC Heart) */}
      {/* Tilted faceted drum silhouette */}
      <path
        d="M32 40 L45 28 L62 31 L68 45 L56 58 L38 55 Z"
        fill="url(#wbDrumGrad)"
        filter="url(#wbOrangeGlow)"
        opacity="0.95"
      />

      {/* Drum Spiral Mixing Blades (Indicating continuous uniform agitation) */}
      <path
        d="M37 36 Q49 34 58 44 Q50 52 40 48"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M48 30 Q58 35 64 42"
        fill="none"
        stroke="#fde047"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Heavy Structural 'W' Concrete Foundation Wings */}
      {/* Left Wing of 'W' */}
      <path
        d="M20 33 L29 33 L37 66 L44 48 L37 48 L32 37 L20 33 Z"
        fill="url(#wbBeamGrad)"
      />
      {/* Right Wing of 'W' */}
      <path
        d="M80 33 L71 33 L63 66 L56 48 L63 48 L68 37 L80 33 Z"
        fill="url(#wbBeamGrad)"
      />
      {/* Central Apex & Foundation V of 'W' */}
      <path
        d="M36 67 L50 83 L64 67 L57 67 L50 75 L43 67 Z"
        fill="url(#wbLogoBorder)"
      />

      {/* Top IS / Concrete Quality Chevron */}
      <path
        d="M44 19 L50 14 L56 19 L50 22 Z"
        fill="url(#wbGoldAccent)"
      />

      {/* 3 Unified Aggregate Hex-Crystals at Base (Sand, Aggregate, Cement) */}
      <circle cx="50" cy="88" r="2.5" fill="#f59e0b" />
      <circle cx="43" cy="85" r="2" fill="#94a3b8" />
      <circle cx="57" cy="85" r="2" fill="#94a3b8" />
    </svg>
  );
}

export default function BrandLogo({
  variant = 'full', // 'full' | 'icon' | 'stacked'
  size = 'md',     // 'sm' | 'md' | 'lg' | 'xl'
  showTagline = true,
  className = "",
  textClassName = "",
  onClick = null
}) {
  const iconSizes = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 72
  };

  const markSize = typeof size === 'number' ? size : iconSizes[size] || 44;

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} onClick={onClick}>
        <BrandMark size={markSize} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div
        className={`flex flex-col items-center text-center group cursor-pointer select-none ${className}`}
        onClick={onClick}
      >
        <div className="relative p-2 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 shadow-2xl mb-3 group-hover:border-orange-500/40 transition-colors">
          <BrandMark size={markSize} />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white leading-none">
            WALUNJ <span className="text-orange-500">BROTHER'S</span>
          </span>
          {showTagline && (
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-orange-400/90 mt-1.5 flex items-center gap-1.5">
              <span>READY-MIX CONCRETE</span>
              <span className="w-1 h-1 rounded-full bg-orange-500"></span>
              <span>PUNE</span>
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default 'full' horizontal lockup
  return (
    <div
      className={`flex items-center gap-3 group select-none ${className}`}
      onClick={onClick}
    >
      <div className="relative p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 shrink-0">
        <BrandMark size={markSize} />
      </div>

      <div className={`flex flex-col min-w-0 ${textClassName}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-heading font-black text-base sm:text-lg md:text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors truncate">
            WALUNJ
          </span>
          <span className="font-heading font-black text-base sm:text-lg md:text-xl tracking-tight text-orange-500 truncate">
            BROTHER'S
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider bg-orange-500/15 border border-orange-500/30 text-orange-400 leading-none">
              RMC
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold text-slate-400 truncate">
              Ready-Mix Concrete
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
