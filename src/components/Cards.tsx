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


interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  logoUrl?: string;
  logoPath?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, tagline, description, url, category, logoUrl, logoPath }) => {
  const logo = logoUrl || logoPath;
  return (
    <div className="flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#C9A96E]/60 hover:shadow-[0_0_40px_rgba(201,169,110,0.08)] group">
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {logo && (
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/10 p-2">
                <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C9A96E] block mb-0.5">{category}</span>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{name}</h3>
            </div>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-gray-400 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 group-hover:border-[#C9A96E]/50"
            aria-label={`Visiter ${name}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <p className="text-[#C9A96E] font-semibold text-sm mb-3 leading-snug">{tagline}</p>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

        <div className="mt-8">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/15 hover:border-[#C9A96E] hover:text-[#C9A96E] px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Visiter {name}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};


interface DivisionCardProps {
  name: string;
  description: string;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({ name, description }) => {
  return (
    <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#C9A96E]/60 hover:shadow-[0_0_30px_rgba(201,169,110,0.1)] transform hover:-translate-y-1 group">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Akollad</span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#C9A96E]" style={{ fontFamily: "'Syne', sans-serif" }}>{name}</h3>
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
