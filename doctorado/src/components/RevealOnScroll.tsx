import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  threshold?: number; // 0 to 1, how much of the element must be visible
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // We combine the user's class with our animation logic
  // If visible, we add 'animate-in'. If not, 'opacity-0 translate-y-8' (initial state)
  // Note: We'll define 'animate-in' in index.css or use Tailwind utilities
  
  const baseClasses = "transition-all duration-1000 ease-out transform";
  const visibleClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  
  return (
    <div 
      ref={ref} 
      className={`${baseClasses} ${visibleClasses} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
