import React from 'react';

export const HeroPattern: React.FC = () => (
  <div className="absolute inset-0 z-0 opacity-10">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#31FF88" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor: 'rgba(22, 38, 80, 0)'}} />
            <stop offset="100%" style={{stopColor: 'rgba(22, 38, 80, 1)'}} />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  </div>
);
