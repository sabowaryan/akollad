import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#31FF88] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#31FF88] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4 transform group-hover:opacity-50 blur-sm"></span>
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#162650]/80 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold tracking-wider">
            <span className="text-[#31FF88] font-mono">{'{'}</span>
            <span className="mx-1">Akollad</span>
            <span className="text-[#31FF88] font-mono">{'}'}</span>
          </a>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <NavLink key={link.label} href={link.href} onClick={() => {}}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-[#162650] transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center py-4">
          {navLinks.map(link => (
            <NavLink key={link.label} href={link.href} onClick={closeMenu}>{link.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;