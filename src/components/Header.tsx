import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { hash: 'about', label: 'À propos' },
    { hash: 'produits', label: 'Produits' },
    { hash: 'divisions', label: 'Divisions' },
    { hash: 'vision', label: 'Vision' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${hash}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navLinkClass = "block md:inline-block px-3 py-2 text-gray-300 hover:text-[#C9A96E] transition-colors duration-300 relative group text-xs tracking-widest uppercase font-semibold";
  const underlineSpan = <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9A96E] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B111E]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src="/web-app-manifest-192x192.png"
              alt="Akollad Groupe"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base sm:text-lg font-bold tracking-widest uppercase text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Akollad
              <span className="text-[#C9A96E] ml-1 font-normal text-xs sm:text-sm tracking-wider normal-case" style={{ fontFamily: "'Inter', sans-serif" }}>Groupe</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link.hash}
                href={`/#${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={navLinkClass}
              >
                {link.label}
                {underlineSpan}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="ml-3 px-5 py-2 bg-[#C9A96E] text-[#0B111E] text-xs font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:bg-[#E8C98A] hover:shadow-[0_0_16px_rgba(201,169,110,0.4)]"
            >
              Contact
            </a>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0B111E]/95 backdrop-blur-md border-t border-white/5 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center py-6 gap-1">
          {navLinks.map(link => (
            <a
              key={link.hash}
              href={`/#${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className={navLinkClass}
            >
              {link.label}
              {underlineSpan}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-5 px-7 py-2.5 bg-[#C9A96E] text-[#0B111E] text-xs font-bold rounded-full uppercase tracking-widest"
          >
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
