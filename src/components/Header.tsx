import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-4 py-2 text-gray-300 hover:text-[#C9A96E] transition-colors duration-300 relative group text-sm tracking-wide uppercase font-medium"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#C9A96E] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#divisions', label: 'Labs' },
    { href: '#divisions', label: 'Studio' },
    { href: '#divisions', label: 'Cloud' },
    { href: '#divisions', label: 'Ventures' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B111E]/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/web-app-manifest-192x192.png"
              alt="Akollad Groupe"
              className="w-9 h-9 rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-widest uppercase text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Akollad
              <span className="text-[#C9A96E] ml-1 font-normal text-sm tracking-wider normal-case" style={{ fontFamily: "'Inter', sans-serif" }}>Groupe</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <NavLink key={link.label} href={link.href} onClick={() => {}}>{link.label}</NavLink>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-[#C9A96E] text-[#0B111E] text-sm font-semibold rounded-full uppercase tracking-wide transition-all duration-300 hover:bg-[#E8C98A] hover:shadow-[0_0_16px_rgba(201,169,110,0.4)]"
            >
              Nous contacter
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
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

      <div className={`md:hidden absolute top-20 left-0 right-0 bg-[#0B111E] border-t border-white/5 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center py-6 gap-2">
          {navLinks.map(link => (
            <NavLink key={link.label} href={link.href} onClick={closeMenu}>{link.label}</NavLink>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 px-6 py-2 bg-[#C9A96E] text-[#0B111E] text-sm font-semibold rounded-full uppercase tracking-wide"
          >
            Nous contacter
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
