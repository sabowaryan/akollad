import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, TwitterIcon, GithubIcon } from './icons/SocialIcons';

const FooterLink: React.FC<{ to: string; children: React.ReactNode; external?: boolean }> = ({ to, children, external }) => (
  external
    ? <a href={to} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">{children}</a>
    : <Link to={to} className="text-gray-400 hover:text-[#C9A96E] transition-colors duration-300 text-sm">{children}</Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#080D17]">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/web-app-manifest-192x192.png" alt="Akollad Groupe" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                Akollad <span className="text-[#C9A96E] font-normal text-sm">Groupe</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Holding technologique africaine — Labs, Studio, Cloud &amp; Ventures au service de l'innovation.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><FooterLink to="#">À propos</FooterLink></li>
              <li><FooterLink to="#">Nos divisions</FooterLink></li>
              <li><FooterLink to="#">Vision & Impact</FooterLink></li>
              <li><FooterLink to="/privacy-policy">Politique de confidentialité</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-4">Rejoignez-nous</h4>
            <ul className="space-y-2">
              <li><FooterLink to="#">Carrières</FooterLink></li>
              <li><FooterLink to="#">Investisseurs</FooterLink></li>
              <li><FooterLink to="#">Presse &amp; Médias</FooterLink></li>
              <li><FooterLink to="#">Contact</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Akollad Groupe S.A.S. — Tous droits réservés.
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
      </div>
    </footer>
  );
};

export default Footer;
