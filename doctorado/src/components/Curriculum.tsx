import React from 'react';
import { SEMESTERS } from '../constants';
import { Calendar } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import heroBg from '../assets/hero-bg.jpg';

const Curriculum: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <RevealOnScroll>
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full md:w-1/2 mx-auto hover-lift">
            <img
              src={heroBg}
              alt="Estudiantes del doctorado"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>

      <section id="cursos" className="py-20 bg-uach-purple text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <RevealOnScroll delay={0.1}>
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Secuencia Formativa
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                  Estructura curricular diseñada para el desarrollo progresivo de competencias investigadoras.
              </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical Line: left on small screens, centered on md+ */}
          <div className="absolute left-4 md:left-1/2 top-0 w-1 bg-white/20 transform md:-translate-x-1/2 rounded-full timeline-line" style={{ height: '100%' }}></div>

            <div className="space-y-12">
                {SEMESTERS.map((sem, index) => (
                  <RevealOnScroll key={sem.id} delay={index * 0.1 + 0.2}>
                    <div 
                      className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                          {/* Dot - positioned on the central line, relative to each card container */}
                          <div className="absolute left-4 md:left-1/2 top-1/2 w-8 h-8 bg-uach-gold rounded-full border-4 border-uach-purple flex items-center justify-center z-50 transform md:-translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_rgba(255,255,255,0.2)] halo-gold pointer-events-none">
                              <span className="text-uach-purple text-xs font-bold">{sem.id}</span>
                          </div>

                          {/* Spacer for opposite side */}
                          <div className="hidden md:block w-1/2"></div>

                          {/* Content Card */}
                          <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 relative z-0">
                              <div className="relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors hover-lift glow-border">
                                  <div className="flex items-center gap-3 mb-4">
                                      <Calendar className="text-uach-gold" size={20}/>
                                      <h3 className="text-xl font-bold text-white">{sem.title}</h3>
                                  </div>
                                  <ul className="space-y-2">
                                      {sem.courses.map((course, idx) => (
                                          <li key={idx} className="text-sm text-gray-200 flex items-start gap-2 transition-transform duration-200 hover:translate-x-1">
                                              <span className="w-1.5 h-1.5 bg-uach-gold rounded-full mt-1.5 flex-shrink-0"></span>
                                              {course}
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </RevealOnScroll>
                ))}
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Curriculum;
