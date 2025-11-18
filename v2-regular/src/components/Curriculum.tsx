import React from 'react';
import { SEMESTERS } from '../constants';
import { Calendar } from 'lucide-react';

const Curriculum: React.FC = () => {
  return (
    <section id="cursos" className="py-20 bg-uach-purple text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Secuencia Formativa
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
                Estructura curricular diseñada para el desarrollo progresivo de competencias investigadoras.
            </p>
        </div>

        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 transform md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-12">
                {SEMESTERS.map((sem, index) => (
                    <div key={sem.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Spacer for opposite side */}
                        <div className="hidden md:block w-1/2"></div>
                        
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-uach-gold rounded-full border-4 border-uach-purple flex items-center justify-center z-10 transform -translate-x-1/2 md:translate-x-[-50%] shadow-[0_0_0_4px_rgba(255,255,255,0.2)]">
                            <span className="text-uach-purple text-xs font-bold">{sem.id}</span>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Calendar className="text-uach-gold" size={20}/>
                                    <h3 className="text-xl font-bold text-white">{sem.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {sem.courses.map((course, idx) => (
                                        <li key={idx} className="text-sm text-gray-200 flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-uach-gold rounded-full mt-1.5 flex-shrink-0"></span>
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
