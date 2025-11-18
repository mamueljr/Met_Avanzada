import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-uach-purple overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Background Campus" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-uach-purple via-uach-purple/90 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-8 flex justify-center items-center gap-6 flex-wrap opacity-90">
           {/* Simulating logos with placeholders - in a real app, replace with actual <img> tags */}
           <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
             <span className="text-xs font-bold">UACH</span>
           </div>
           <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
             <span className="text-xs font-bold">FCCF</span>
           </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Doctorado en <br/>
          <span className="text-uach-gold">Metodología Avanzada</span> <br/>
          para la Investigación
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
          en Ciencias Sociales, Humanidades, Educación y Salud
        </p>
        
        <div className="flex flex-col gap-2 text-sm md:text-base tracking-wide uppercase opacity-80">
          <p>Universidad Autónoma de Chihuahua</p>
          <p>Facultad de Ciencias de la Cultura Física</p>
        </div>

        <div className="mt-12">
          <a 
            href="#que-es" 
            className="inline-block bg-uach-gold text-uach-purple font-bold py-4 px-10 rounded-full hover:bg-white hover:text-uach-purple transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Conocer el Programa
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
