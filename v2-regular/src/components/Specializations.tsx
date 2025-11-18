import React from 'react';
import { SPECIALIZATIONS } from '../constants';
import { BookOpen } from 'lucide-react';

const Specializations: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
            Áreas de Especialización
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige una de las nueve áreas de formación específica según tus intereses y trayectoria profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZATIONS.map((spec) => (
                <div key={spec.id} className="group bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-uach-purple transition-colors duration-300">
                        <BookOpen size={24} className="text-uach-purple group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 min-h-[56px] flex items-center">
                        {spec.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {spec.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
