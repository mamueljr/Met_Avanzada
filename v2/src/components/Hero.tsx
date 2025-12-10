import React from 'react';
import { HERO_CONTENT } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { useTypingEffect } from './useTypingEffect';
import heroBg from '../assets/hero-bg.jpg';
import logoUach from '../assets/logo-uach.png';
import logoFccf from '../assets/logo-fccf.png';
import { useThrottledScroll } from './useThrottledScroll';

const Hero: React.FC = () => {
  const scrollY = useThrottledScroll(10);
  const { displayedText, isComplete } = useTypingEffect({ 
    text: HERO_CONTENT.title.highlight, 
    speed: 80,
    startDelay: 800 
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-uach-purple overflow-hidden pb-32">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src={heroBg} 
          alt="Campus UACH" 
          className="w-full h-full object-cover opacity-30 mix-blend-soft-light scale-110" // Aumentamos opacidad y suavizamos el blend mode
        />
        <div className="absolute inset-0 bg-gradient-to-br from-uach-purple/80 via-uach-purple/70 to-black/70" />
      </div>

      {/* Decorative Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-uach-gold/10 rounded-full blur-3xl float-slow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl float-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-20 md:mt-28">
        <RevealOnScroll delay={0.1}>
          <div className="mb-8 flex justify-center items-center gap-6 flex-wrap opacity-90">
             <div className="h-24 w-24 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm p-2 halo-gold-tight">
               <img src={logoUach} alt="Logo UACH" className="w-full h-full object-contain" loading="lazy" />
             </div>
             <div className="h-24 w-24 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm p-2 halo-gold-tight">
               <img src={logoFccf} alt="Logo FCCF" className="w-full h-full object-contain" loading="lazy" />
             </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            {HERO_CONTENT.title.prefix} <br/>
            <span className="text-uach-gold">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span> <br/>
            {HERO_CONTENT.title.suffix}
          </h1>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
            {HERO_CONTENT.subtitle}
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col gap-2 text-sm md:text-base tracking-wide uppercase opacity-80">
            <p>{HERO_CONTENT.university}</p>
            <p>{HERO_CONTENT.faculty}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div className="mt-12">
            <a 
              href="#que-es" 
              className="inline-block bg-uach-gold text-uach-purple font-bold py-4 px-10 rounded-full hover:bg-white hover:text-uach-purple transition-all duration-300 shadow-lg transform hover:-translate-y-1 ring-2 ring-transparent hover:ring-uach-gold/70 focus-visible:ring-uach-gold/80 btn-shine"
            >
              {HERO_CONTENT.cta}
            </a>
          </div>
        </RevealOnScroll>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 float-slow">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
