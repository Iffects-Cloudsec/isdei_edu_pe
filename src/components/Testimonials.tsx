import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Patricia Hernández',
    role: 'Estudiante de Marketing Digital',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'La plataforma ISDEi ha transformado completamente mi carrera. Los cursos son de altísima calidad y los instructores son verdaderos expertos en sus campos.'
  },
  {
    name: 'Miguel Ángel Suárez',
    role: 'Desarrollador Web',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Increíble experiencia de aprendizaje. El contenido es actualizado y las herramientas interactivas hacen que el proceso sea dinámico y efectivo.'
  },
  {
    name: 'Carmen López',
    role: 'Especialista en UX/UI',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Recomiendo ISDEi a todos mis colegas. La flexibilidad de horarios y la calidad del contenido son incomparables. ¡Una inversión que vale cada centavo!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Qué dicen nuestros <span className="text-blue-600">Alumnos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de quienes ya están transformando sus carreras con ISDEi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group"
            >
              <Quote className="w-12 h-12 text-blue-200 absolute top-4 right-4 group-hover:scale-110 transition-transform duration-300" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
