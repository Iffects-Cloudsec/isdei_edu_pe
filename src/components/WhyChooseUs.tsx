import { Monitor, Globe, Clock, Headphones } from 'lucide-react';

const benefits = [
  {
    Icon: Monitor,
    title: 'Plataforma Interactiva',
    description: 'Accede a contenido multimedia y herramientas de aprendizaje avanzadas'
  },
  {
    Icon: Globe,
    title: 'Acceso Global',
    description: 'Estudia desde cualquier lugar del mundo, en cualquier momento'
  },
  {
    Icon: Clock,
    title: 'Horarios Flexibles',
    description: 'Aprende a tu propio ritmo con contenido disponible 24/7'
  },
  {
    Icon: Headphones,
    title: 'Soporte Continuo',
    description: 'Recibe ayuda de nuestro equipo de expertos cuando lo necesites'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          ¿Por qué elegir <span className="text-blue-600">ISDEi</span>?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Nuestra plataforma ofrece la mejor experiencia de aprendizaje en línea
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-400 cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <benefit.Icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
