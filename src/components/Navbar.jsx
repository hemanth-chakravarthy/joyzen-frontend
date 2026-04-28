import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ handleBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const joyzenLogo = '/assets/icons/joyzen-icon.svg';
  const userIcon = '/assets/icons/user-icon.svg';

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Who It\'s For', href: '#who' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div 
          className="logo absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-1 flex justify-center lg:justify-start cursor-pointer"
          onClick={scrollToTop}
        >
          <img src={joyzenLogo} alt="Joyzen Logo" className="w-24 md:w-[120px]" />
        </div>

        {/* Desktop Links */}
        <div className="nav-links hidden lg:flex">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${link.name === 'About' ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4 lg:flex-1">
          <button 
            className="btn-cta hidden lg:flex" 
            onClick={handleBookCall}
          >
            <span>Book Clarity Call</span>
            <img src={userIcon} alt="User icon" className="w-4 h-4" />
          </button>

          {/* Mobile/Tablet Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white z-[101]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <div className="flex flex-col gap-8 items-center p-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-medium text-white hover:text-white/60 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="btn-cta w-full flex justify-center mt-6 scale-110" 
                onClick={() => {
                  handleBookCall();
                  setIsOpen(false);
                }}
              >
                <span>Book Clarity Call</span>
                <img src={userIcon} alt="User icon" className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
