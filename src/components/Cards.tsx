import React from 'react';

interface CoreValueCardProps {
  title: string;
  description: string;
}

export const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, description }) => (
  <div className="bg-white/5 p-6 rounded-xl h-full border border-white/10 hover:border-[#C9A96E]/50 transition-all duration-300 group">
    <div className="w-8 h-1 bg-[#C9A96E] rounded mb-4 transition-all duration-300 group-hover:w-12"></div>
    <h3 className="text-lg font-bold text-white group-hover:text-[#C9A96E] transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
    <p className="mt-2 text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);


interface DivisionCardProps {
  name: string;
  description: string;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#C9A96E]/60 hover:shadow-[0_0_30px_rgba(201,169,110,0.1)] transform hover:-translate-y-1 group">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Akollad</span>
        <h3 className="text-2xl font-bold text-[#C9A96E]" style={{ fontFamily: "'Syne', sans-serif" }}>{name}</h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      <div className="mt-6">
        <span className="inline-flex items-center gap-2 text-[#C9A96E] text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          En savoir plus
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};
