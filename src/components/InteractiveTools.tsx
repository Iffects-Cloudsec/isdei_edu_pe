import { MessageSquare, Video, FileText, Share2 } from 'lucide-react';

const tools = [
  {
    Icon: MessageSquare,
    title: 'Chat en Vivo',
    description: 'Comunícate instantáneamente con instructores y compañeros'
  },
  {
    Icon: Video,
    title: 'Videoconferencias',
    description: 'Participa en clases virtuales de alta calidad'
  },
  {
    Icon: FileText,
    title: 'Material Descargable',
    description: 'Accede a recursos y documentos complementarios'
  },
  {
    Icon: Share2,
    title: 'Colaboración',
    description: 'Trabaja en equipo con herramientas colaborativas'
  }
];

export default function InteractiveTools() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interactive tools"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Herramientas <span className="text-blue-600">Interactivas</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Tecnología de vanguardia para potenciar tu aprendizaje
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <tool.Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
