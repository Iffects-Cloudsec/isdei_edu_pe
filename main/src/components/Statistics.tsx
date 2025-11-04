import { useState, useEffect, useRef } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
}

function AnimatedStat({ end, label, suffix = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center transform hover:scale-110 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        +{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          NUESTRAS ESTADÍSTICAS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <AnimatedStat end={250} label="Cursos Disponibles" />
          <AnimatedStat end={85} label="Tasa de Éxito" suffix="%" />
          <AnimatedStat end={35} label="Profesores Expertos" />
          <AnimatedStat end={26} label="Países" />
          <AnimatedStat end={6} label="Años de Experiencia" />
        </div>
      </div>
    </section>
  );
}
