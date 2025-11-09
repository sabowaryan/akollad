import React from 'react';

interface CoreValueCardProps {
  title: string;
  description: string;
}

export const CoreValueCard: React.FC<CoreValueCardProps> = ({ title, description }) => (
  <div className="bg-black bg-opacity-20 p-6 rounded-lg h-full border border-transparent hover:border-[#31FF88]/50 transition-all duration-300 group">
    <h3 className="text-xl font-bold text-white group-hover:text-[#31FF88] transition-colors duration-300">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);


interface DivisionCardProps {
  name: string;
  description: string;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({ name, description }) => {
  return (
    <div className="bg-[#162650] p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:border-[#31FF88] hover:shadow-[0_0_25px_rgba(49,255,136,0.2)] transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-gray-400">Akollad</span> <span className="text-[#31FF88]">{name}</span>
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
