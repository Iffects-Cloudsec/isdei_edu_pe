import { FileCheck, Target, TrendingUp, Award } from 'lucide-react';

const evaluationTypes = [
  {
    Icon: FileCheck,
    title: 'Evaluaciones Continuas',
    description: 'Sistema de evaluación constante para medir tu progreso'
  },
  {
    Icon: Target,
    title: 'Objetivos Claros',
    description: 'Metas definidas para cada módulo de aprendizaje'
  },
  {
    Icon: TrendingUp,
    title: 'Mejora Continua',
    description: 'Retroalimentación personalizada para optimizar resultados'
  },
  {
    Icon: Award,
    title: 'Certificación Final',
    description: 'Reconocimiento oficial al completar tu formación'
  }
];

export default function Evaluations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Evaluations"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Sistema de <span className="text-blue-600">Evaluación</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Metodología integral para garantizar tu éxito académico
            </p>

            <div className="space-y-4 mt-8">
              {evaluationTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <item.Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
