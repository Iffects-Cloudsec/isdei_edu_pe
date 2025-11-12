import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Las mejores prácticas en educación virtual para 2024',
    excerpt: 'Descubre las tendencias y metodologías más efectivas en el aprendizaje en línea',
    date: '15 Marzo 2024',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Educación'
  },
  {
    title: 'Cómo mantener la motivación durante un curso online',
    excerpt: 'Consejos prácticos para aprovechar al máximo tu experiencia de aprendizaje virtual',
    date: '10 Marzo 2024',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Tips'
  },
  {
    title: 'Herramientas digitales esenciales para estudiantes',
    excerpt: 'Las aplicaciones y plataformas que todo estudiante moderno debe conocer',
    date: '5 Marzo 2024',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Tecnología'
  },
  {
    title: 'El futuro del trabajo remoto y la educación continua',
    excerpt: 'Análisis sobre cómo la educación online está transformando el mercado laboral',
    date: '1 Marzo 2024',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Tendencias'
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Últimas <span className="text-blue-600">Noticias</span> y Recursos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado con los últimos artículos sobre educación y desarrollo profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300">
                  Leer más
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
