import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cinematic-900/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group z-50 relative">
          <div className="flex flex-col flex-shrink-0 transition-transform duration-300 group-hover:scale-105 leading-none">
            <span className="font-display text-3xl md:text-4xl font-bold text-cream-100 tracking-widest uppercase">
              Córdova
            </span>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-serif text-xs md:text-sm font-bold text-gold-500 tracking-[0.3em] uppercase">
                Abogados
              </span>
              <span className="text-[9px] text-cream-100/50 uppercase tracking-widest border-l border-white/20 pl-3 hidden sm:inline-block">
                Desde 1967
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs lg:text-sm uppercase tracking-[0.15em] text-cream-100/80 hover:text-gold-500 transition-colors duration-300 font-medium text-center leading-tight"
            >
              {item.label.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </a>
          ))}
          <a 
            href="tel:+59398425809"
            className="px-6 py-3 border border-gold-500/30 bg-gold-500/5 text-gold-500 text-xs lg:text-sm uppercase tracking-[0.15em] hover:bg-gold-500 hover:text-cinematic-900 transition-all duration-300 text-center leading-tight"
          >
            Consulta<br/>Inmediata
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cream-100 hover:text-gold-500 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-cinematic-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="font-serif text-3xl text-cream-100 hover:text-gold-500 transition-colors duration-300 transform hover:translate-x-2"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.label}
          </a>
        ))}
         <a 
            href="tel:+59398425809"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 bg-gold-500 text-cinematic-900 font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Consulta Inmediata
          </a>
      </div>
    </nav>
  );
};

export default Navbar;