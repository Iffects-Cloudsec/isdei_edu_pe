import { BookOpen, Users, Award } from 'lucide-react';

const courses = [
  {
    Icon: BookOpen,
    title: 'Capacitaciones',
    subtitle: 'Especializadas',
    description: 'Cursos diseñados por expertos de la industria para desarrollar habilidades específicas',
    color: 'blue'
  },
  {
    Icon: Users,
    title: 'Metodología Práctica',
    subtitle: 'Virtual e Interactiva',
    description: 'Aprende haciendo con proyectos reales y ejercicios interactivos',
    color: 'cyan'
  },
  {
    Icon: Award,
    title: 'Certificados',
    subtitle: 'Reconocidos',
    description: 'Obtén certificaciones válidas y reconocidas internacionalmente',
    color: 'blue'
  }
];

export default function SpecializedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Cursos <span className="text-blue-600">Especializados</span> ISDEi
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Descubre nuestra amplia gama de programas educativos diseñados para impulsar tu carrera profesional
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-cyan-400 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-${course.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <course.Icon className={`w-8 h-8 text-${course.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {course.title}
              </h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-4">
                {course.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
