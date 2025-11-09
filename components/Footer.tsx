import React from 'react';
import { LinkedInIcon, TwitterIcon, GithubIcon } from './icons/SocialIcons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-[#31FF88] transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-20 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Akollad Group. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_#31FF88]">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_#31FF88]">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_#31FF88]">
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
