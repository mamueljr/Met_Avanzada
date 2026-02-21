import React from 'react';
import { PILLARS } from '../constants';
import { CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useTiltEffect } from './useTiltEffect';

const PillarCard: React.FC<{ pillar: typeof PILLARS[0] }> = ({ pillar }) => {
  const tiltRef = useTiltEffect(8);

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 bg-uach-purple/5 transform rotate-6 rounded-3xl"></div>
      <div
        ref={tiltRef}
        className="relative bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center h-full text-center min-h-[250px] w-full hover-lift glow-border transition-transform duration-200"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="text-8xl font-bold text-uach-gold/20 absolute top-4 left-6">0{pillar.id}</span>
        <h3 className="text-2xl font-bold text-uach-purple relative z-10">{pillar.title}</h3>
      </div>
    </div>
  );
};

const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
              Los 4 Pilares Formativos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro modelo educativo se sustenta en cuatro ejes fundamentales que operan de forma integrada para garantizar tu formación integral.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-12">
          {PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.id} delay={index * 0.15}>
              <div
                className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual / Number */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                  <PillarCard pillar={pillar} />
                </div>

                {/* Content */}
                <div className="relative flex-1 bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 glow-border hover-lift">
                  {/*<h4 className="text-lg font-bold text-indigo-600 mb-3 uppercase tracking-wider text-sm">¿Qué es?</h4>*/}
                  <h4 className="text-lg font-bold text-indigo-600 mb-3 uppercase tracking-wider text-sm">
                    {pillar.id === 3 ? '¿Qué es?' : '¿Qué son?'}
                  </h4>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {pillar.whatIsIt}
                  </p>

                  <h4 className="text-lg font-bold text-indigo-600 mb-4 uppercase tracking-wider text-sm">Beneficios Concretos</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pillar.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
