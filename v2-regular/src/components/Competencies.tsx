import React from 'react';
import { COMPETENCIES } from '../constants';

const Competencies: React.FC = () => {
  return (
    <section id="competencias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
            7 Competencias Metodológicas
          </h2>
          <p className="text-gray-600">
            Al concluir el doctorado, dominarás estas aptitudes investigadoras fundamentales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px]">
                 <img 
                    src="https://picsum.photos/600/800" 
                    alt="Investigación" 
                    className="w-full h-full object-cover"
                 />
            </div>
            <div className="space-y-6">
                {COMPETENCIES.map((comp) => (
                    <div key={comp.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-uach-gold hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-uach-purple text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {comp.id}
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{comp.title}</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {comp.items.map((item, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 pl-2">{item}</li>
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
