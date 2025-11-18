import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../constants';

const CURRICULUM_HIGHLIGHTS = [
  { value: 4, label: 'Seminarios de Formación Específica', subtext: 'Especialización temática' },
  { value: 7, label: 'Seminarios de Tesis y Taller', subtext: 'Desarrollo del proyecto' },
  { value: 15, label: 'Cursos-Taller de Metodología', subtext: 'Competencias técnicas' },
  { value: 4, label: 'Coloquios de Investigación', subtext: 'Difusión y retroalimentación' }
];

interface CountUpNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  animate?: boolean;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({ target, suffix = '', duration = 1500, delay = 0, className, animate = true }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const safeTarget = Number.isFinite(target) ? target : 0;
    let frame: number;
    const startAnimation = () => {
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(progress * safeTarget));
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };
      frame = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, duration, delay, animate]);

  return <span className={className}>{value}{suffix}</span>;
};

const parseValue = (value: string) => {
  const match = value.trim().match(/^(\d+)(.*)$/);
  if (!match) {
    return { target: 0, suffix: '' };
  }
  return { target: Number(match[1]) || 0, suffix: match[2] ?? '' };
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateCounters(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="caracteristicas" className="py-20 bg-uach-dark text-white" ref={sectionRef}>
       <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {STATS.map((stat, idx) => {
                const { target, suffix } = parseValue(stat.value);
                return (
                  <div key={idx} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover-lift glow-border">
                      <CountUpNumber 
                        target={target} 
                        suffix={suffix}
                        delay={idx * 150}
                        animate={animateCounters}
                        className="block text-4xl md:text-5xl font-bold text-uach-gold mb-2"
                      />
                      <div className="text-xl font-medium mb-1">{stat.label}</div>
                      <div className="text-sm text-gray-400">{stat.subtext}</div>
                  </div>
                );
              })}
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10">Estructura Curricular</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CURRICULUM_HIGHLIGHTS.map((item, idx) => (
                  <div key={item.label} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center hover-lift glow-border">
                      <CountUpNumber 
                        target={item.value}
                        duration={1600}
                        delay={idx * 200}
                        animate={animateCounters}
                        className="block text-5xl font-bold text-indigo-100 mb-2"
                      />
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-2">{item.subtext}</p>
                  </div>
                ))}
            </div>
          </div>
       </div>
    </section>
  );
};

export default Features;
