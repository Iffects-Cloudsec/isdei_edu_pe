import { BarChart3, Users, Calendar, Settings } from 'lucide-react';

const tools = [
  {
    Icon: BarChart3,
    title: 'Panel de Control',
    description: 'Visualiza estadísticas y métricas en tiempo real'
  },
  {
    Icon: Users,
    title: 'Gestión de Usuarios',
    description: 'Administra estudiantes y permisos fácilmente'
  },
  {
    Icon: Calendar,
    title: 'Calendario Integrado',
    description: 'Organiza eventos y clases programadas'
  },
  {
    Icon: Settings,
    title: 'Configuración Avanzada',
    description: 'Personaliza la plataforma según tus necesidades'
  }
];

export default function ManagementTools() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Herramientas de <span className="text-blue-600">Gestión</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Administra tu experiencia educativa con nuestras herramientas intuitivas
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-400"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300">
                    <tool.Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">{tool.title}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Management tools"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
