import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_ITEMS.map(item => item.href.substring(1)); // Remove '#'
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <div className={`p-2 rounded-full ${scrolled ? 'bg-uach-purple text-white' : 'bg-white text-uach-purple'}`}>
               <GraduationCap size={24} />
             </div>
             <div className="flex flex-col">
                <span className={`font-bold leading-tight ${scrolled ? 'text-uach-purple' : 'text-white'}`}>Doctorado FCCF</span>
                <span className={`text-xs tracking-wider ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>UACH</span>
             </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-uach-gold ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  } ${activeSection === item.href ? 'text-uach-gold' : ''}`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-uach-gold rounded-full animate-in slide-in-from-left duration-300" />
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-uach-purple">Menú</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-2">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 transform hover:translate-x-2 ${
                    activeSection === item.href 
                      ? 'text-uach-purple bg-uach-purple/10 font-bold' 
                      : 'text-gray-700 hover:text-uach-purple hover:bg-uach-purple/5'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
               <p className="text-xs text-center text-gray-400">
                 © 2025 Facultad de Ciencias de la Cultura Física
               </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
