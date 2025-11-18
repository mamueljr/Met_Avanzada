import React from 'react';
import { PILLARS } from '../constants';
import { CheckCircle } from 'lucide-react';

const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
              Los 5 Pilares Formativos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestro modelo educativo se sustenta en cinco ejes fundamentales que operan de forma integrada para garantizar tu formación integral.
            </p>
        </div>

        <div className="grid gap-12">
            {PILLARS.map((pillar, index) => (
                <div key={pillar.id} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Visual / Number */}
                    <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                        <div className="relative">
                             <div className="absolute inset-0 bg-uach-purple/5 transform rotate-6 rounded-3xl"></div>
                             <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center h-full text-center min-h-[250px] w-full">
                                <span className="text-8xl font-bold text-uach-gold/20 absolute top-4 left-6">0{pillar.id}</span>
                                <h3 className="text-2xl font-bold text-uach-purple relative z-10">{pillar.title}</h3>
                             </div>
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h4 className="text-lg font-bold text-indigo-600 mb-3 uppercase tracking-wider text-sm">¿Qué son?</h4>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                            {pillar.whatIsIt}
                        </p>
                        
                        <h4 className="text-lg font-bold text-indigo-600 mb-4 uppercase tracking-wider text-sm">Beneficios Concretos</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pillar.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-600 text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
