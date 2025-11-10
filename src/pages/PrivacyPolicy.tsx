import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import policyContent from './PrivacyPolicyContent.md?raw';

const PrivacyPolicy: React.FC = () => {
  // Fonction simple pour convertir le Markdown en JSX
  const renderMarkdown = (markdown: string) => {
    const sections = markdown.split(/(?=##\s\d+\.)/g).filter(s => s.trim() !== '');

    return sections.map((section, index) => {
      const lines = section.trim().split('\n');
      const titleLine = lines.shift() || '';

      if (titleLine.startsWith('# ')) {
        // Titre principal
        const title = titleLine.replace('# ', '').trim();
        const lastUpdated = lines.find(l => l.startsWith('**Dernière mise à jour :**'));
        const intro = lines.filter(l => !l.startsWith('**') && l.trim() !== '').join('\n');

        return (
          <React.Fragment key={index}>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">{title}</h1>
            {lastUpdated && <p className="text-sm text-gray-400 mb-8">{lastUpdated.replace(/\*\*/g, '')}</p>}
            <p className="text-lg text-gray-300 mb-4">{intro}</p>
          </React.Fragment>
        );
      }

      if (titleLine.startsWith('## ')) {
        const title = titleLine.replace(/## \d+\. /, '').trim();
        const content = lines.join('\n');
        const paragraphs = content.split(/\n(?=###|\*|\w)/).filter(p => p.trim() !== '');

        return (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-[#31FF88]">{title}</h2>
            {paragraphs.map((p, pIndex) => {
              if (p.startsWith('### ')) {
                return <h3 key={pIndex} className="text-xl font-bold mt-6 mb-3 text-white">{p.replace('### ', '')}</h3>;
              }
              if (p.startsWith('* ')) {
                const items = p.split('\n* ').map(item => item.replace(/^\*\s?/, ''));
                return (
                  <ul key={pIndex} className="list-disc list-inside space-y-2 mb-4 text-gray-300">
                    {items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#31FF88] hover:underline">$1</a>') }} />)}
                  </ul>
                );
              }
              return <p key={pIndex} className="text-lg text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: p.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#31FF88] hover:underline">$1</a>') }} />;
            })}
          </div>
        );
      }

      return null;
    });
  };

  return (
    <AnimatedSection className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <Link to="/" className="text-3xl font-bold tracking-wider">
            <span className="text-[#31FF88] font-mono">{'{\'}</span>
            <span className="mx-1 text-white">Akollad</span>
            <span className="text-[#31FF88] font-mono">{'}\'}</span>
          </Link>
        </div>
        
        <div className="bg-black bg-opacity-20 p-8 md:p-12 rounded-xl shadow-2xl">
          {renderMarkdown(policyContent)}
        </div>
        
        <div className="mt-12 text-center border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Akollad Group. Tous droits réservés.</p>
          <Link to="/" className="text-[#31FF88] hover:underline text-sm mt-2 inline-block">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PrivacyPolicy;
