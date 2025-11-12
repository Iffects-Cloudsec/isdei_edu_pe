import { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const slides = [
  {
    title: 'Ondina la mejor',
    subtitle: 'manera y eficiente en línea',
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    icons: [
      { Icon: Users, position: 'top-10 left-10' },
      { Icon: Award, position: 'top-20 right-20' },
      { Icon: BookOpen, position: 'bottom-20 left-20' },
      { Icon: TrendingUp, position: 'bottom-10 right-10' },
    ]
  },
  {
    title: 'Aprende con los mejores',
    subtitle: 'profesionales del sector',
    gradient: 'from-cyan-400 via-cyan-500 to-blue-500',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
    icons: [
      { Icon: Award, position: 'top-10 left-10' },
      { Icon: BookOpen, position: 'top-20 right-20' },
      { Icon: TrendingUp, position: 'bottom-20 left-20' },
      { Icon: Users, position: 'bottom-10 right-10' },
    ]
  },
  {
    title: 'Certificaciones',
    subtitle: 'reconocidas internacionalmente',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    image: 'https://images.pexels.com/photos/4145375/pexels-photo-4145375.jpeg?auto=compress&cs=tinysrgb&w=600',
    icons: [
      { Icon: BookOpen, position: 'top-10 left-10' },
      { Icon: TrendingUp, position: 'top-20 right-20' },
      { Icon: Users, position: 'bottom-20 left-20' },
      { Icon: Award, position: 'bottom-10 right-10' },
    ]
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden" id="inicio">
      {/* Imagen de fondo para cada slide */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay con gradiente para mejorar legibilidad del texto */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-80 transition-all duration-1000`} />
      </div>

      {/* Iconos flotantes */}
      <div className="absolute inset-0">
        {slide.icons.map((item, idx) => (
          <div
            key={idx}
            className={`absolute ${item.position} animate-float-slow`}
            style={{ animationDelay: `${idx * 0.5}s` }}
          >
            <item.Icon className="w-12 h-12 text-white opacity-20" />
          </div>
        ))}
      </div>

      {/* Contenido del slider con z-index alto para estar sobre la imagen */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="text-white space-y-6 animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {slide.title}
            </h1>
            <h2 className="text-3xl md:text-4xl font-light">
              {slide.subtitle}
            </h2>
            <p className="text-lg opacity-90">
              Descubre nuestra plataforma de educación en línea con cursos diseñados por expertos
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Comenzar Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Ver Cursos
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-10 -right-5 bg-white p-4 rounded-lg shadow-xl animate-bounce-slow z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">+250</p>
                  <p className="text-sm text-gray-600">Certificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegación del slider con z-index alto */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
