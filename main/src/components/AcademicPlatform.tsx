import { GraduationCap, Users, Calendar, BarChart } from 'lucide-react';

const features = [
  {
    Icon: GraduationCap,
    title: 'Aprendizaje Personalizado',
    description: 'Rutas de aprendizaje adaptadas a tus necesidades'
  },
  {
    Icon: Users,
    title: 'Comunidad Activa',
    description: 'Conecta con estudiantes de todo el mundo'
  },
  {
    Icon: Calendar,
    title: 'Clases en Vivo',
    description: 'Sesiones interactivas con instructores expertos'
  },
  {
    Icon: BarChart,
    title: 'Seguimiento de Progreso',
    description: 'Monitorea tu avance y logros en tiempo real'
  }
];

export default function AcademicPlatform() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Plataforma Académica <span className="text-blue-600">ISDEi</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Una experiencia de aprendizaje completa diseñada para maximizar tu potencial educativo
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                      <feature.Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Academic platform"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
