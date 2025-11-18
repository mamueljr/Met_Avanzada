import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import logoUach from '../assets/logo-uach.png';
import logoFccf from '../assets/logo-fccf.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-uach-purple overflow-hidden pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Campus UACH" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-uach-purple via-uach-purple/90 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-20 md:mt-28">
        <div className="mb-8 flex justify-center items-center gap-6 flex-wrap opacity-90 fade-in-up" style={{ animationDelay: '0.1s' }}>
           <div className="h-24 w-24 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm p-2 halo-gold-tight">
             <img src={logoUach} alt="Logo UACH" className="w-full h-full object-contain" loading="lazy" />
           </div>
           <div className="h-24 w-24 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm p-2 halo-gold-tight">
             <img src={logoFccf} alt="Logo FCCF" className="w-full h-full object-contain" loading="lazy" />
           </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight fade-in-up" style={{ animationDelay: '0.2s' }}>
          Doctorado en <br/>
          <span className="text-uach-gold">Metodología Avanzada</span> <br/>
          para la Investigación
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light fade-in-up" style={{ animationDelay: '0.3s' }}>
          en Ciencias Sociales, Humanidades, Educación y Salud
        </p>
        
        <div className="flex flex-col gap-2 text-sm md:text-base tracking-wide uppercase opacity-80 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p>Universidad Autónoma de Chihuahua</p>
          <p>Facultad de Ciencias de la Cultura Física</p>
        </div>

        <div className="mt-12 fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#que-es" 
            className="inline-block bg-uach-gold text-uach-purple font-bold py-4 px-10 rounded-full hover:bg-white hover:text-uach-purple transition-all duration-300 shadow-lg transform hover:-translate-y-1 ring-2 ring-transparent hover:ring-uach-gold/70 focus-visible:ring-uach-gold/80"
          >
            Conocer el Programa
          </a>
        </div>
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
