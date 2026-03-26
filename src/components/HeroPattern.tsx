import React from 'react';

export const HeroPattern: React.FC = () => (
  <div className="absolute inset-0 z-0">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A96E" strokeWidth="0.4" />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(11,17,30,0)" />
          <stop offset="100%" stopColor="rgba(11,17,30,1)" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="40%">
          <stop offset="0%" stopColor="rgba(201,169,110,0.08)" />
          <stop offset="100%" stopColor="rgba(201,169,110,0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.12" />
      <rect width="100%" height="100%" fill="url(#glow)" />
      <rect width="100%" height="100%" fill="url(#fade)" />
    </svg>
  </div>
);
