import React from 'react';
import { COMPETENCIES } from '../constants';
import competenciesImg from '../assets/entrada.jpg';

const Competencies: React.FC = () => {
  return (
    <section id="competencias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
            Competencias Metodológicas que Desarrollarás
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Al concluir la maestría, habrás desarrollado dos aptitudes de investigación esenciales (Aptitudes 1 y 2), además de una tercera aptitud optativa (entre la 3 y la 7), que podrás elegir de acuerdo con tus intereses y trayectoria académica o profesional. El resto de las aptitudes de investigación se profundizarán y completarán durante el Doctorado en Metodología Avanzada para la Investigación en Ciencias Sociales, Humanidades, Educación y Salud, para quienes decidan continuar su formación investigadora en este programa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl fade-in-up h-[600px]" style={{ animationDelay: '0.1s' }}>
                <img 
                  src={competenciesImg} 
                  alt="Investigación" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
            </div>
            <div className="space-y-6">
                {COMPETENCIES.map((comp, idx) => (
                    <div 
                        key={comp.id} 
                        className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-uach-gold hover:shadow-lg transition-shadow fade-in-up hover-lift glow-border"
                        style={{ animationDelay: `${0.15 * idx + 0.2}s` }}
                    >
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-uach-purple text-white rounded-full flex items-center justify-center font-bold text-sm halo-gold">
                                {comp.id}
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{comp.title}</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {comp.items.map((item, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 pl-2 transition-transform duration-200 hover:translate-x-1">{item}</li>
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

export default Competencies;
