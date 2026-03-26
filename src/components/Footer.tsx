import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon, GithubIcon } from './icons/SocialIcons';

const FooterAnchor: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">{children}</a>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">{children}</Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080D17]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/web-app-manifest-192x192.png" alt="Akollad Groupe" className="w-8 h-8 rounded-full flex-shrink-0" />
              <span className="text-base font-bold tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                Akollad <span className="text-[#C9A96E] font-normal text-sm">Groupe</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Holding technologique africaine — Labs, Studio, Cloud &amp; Ventures au service de l'innovation.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li><FooterAnchor href="/#about">À propos</FooterAnchor></li>
              <li><FooterAnchor href="/#produits">Nos produits</FooterAnchor></li>
              <li><FooterAnchor href="/#divisions">Nos divisions</FooterAnchor></li>
              <li><FooterAnchor href="/#vision">Vision &amp; Impact</FooterAnchor></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-4">Produits</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://piksend.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">PikSend</a>
              </li>
              <li>
                <a href="https://gatectr.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">GateCtr</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-4">Groupe</h4>
            <ul className="space-y-2.5">
              <li><FooterLink to="/carrieres">Carrières</FooterLink></li>
              <li><FooterLink to="/investisseurs">Investisseurs</FooterLink></li>
              <li><FooterLink to="/presse">Presse &amp; Médias</FooterLink></li>
              <li><FooterLink to="/confidentialite">Confidentialité</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} Akollad Groupe S.A.S. — Kinshasa, RDC — Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/company/akollad-group/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-[#C9A96E] transition-colors duration-300">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/AkolladGroup" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-gray-500 hover:text-[#C9A96E] transition-colors duration-300">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/AkolladGroup" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-[#C9A96E] transition-colors duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] text-center sm:text-left leading-relaxed">
            RCCM : CD/KNG/RCCM/25-A-07960 &nbsp;·&nbsp; N° Impôt : A2557944L &nbsp;·&nbsp; ID : 01-J6100-N86614P &nbsp;·&nbsp; Fondée en Novembre 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
