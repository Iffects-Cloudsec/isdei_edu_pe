import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    title: 'Desarrollo Web Frontend',
    instructor: 'María González',
    duration: '12 semanas',
    students: 1250,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Desarrollo'
  },
  {
    title: 'Marketing Digital Avanzado',
    instructor: 'Carlos Ruiz',
    duration: '8 semanas',
    students: 980,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Marketing'
  },
  {
    title: 'Data Science con Python',
    instructor: 'Ana Martínez',
    duration: '16 semanas',
    students: 1450,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tecnología'
  },
  {
    title: 'Diseño UX/UI Profesional',
    instructor: 'Laura Torres',
    duration: '10 semanas',
    students: 890,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Diseño'
  },
  {
    title: 'Gestión de Proyectos Ágiles',
    instructor: 'Roberto Silva',
    duration: '6 semanas',
    students: 1100,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Negocios'
  },
  {
    title: 'Inteligencia Artificial',
    instructor: 'Diego Morales',
    duration: '14 semanas',
    students: 1320,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Tecnología'
  }
];

function CourseCard({ course }: { course: typeof courses[0] }) {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="font-bold text-gray-800">{course.rating}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold">
            Ver Curso
          </button>
        </div>
      </div>
    </div>
  );
}

function CarouselRow({ title, courses }: { title: string; courses: typeof courses }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
        <div className="h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function CourseCarousel() {
  return (
    <section className="py-20 bg-gray-50" id="cursos">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explora Nuestros <span className="text-blue-600">Cursos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre una amplia variedad de cursos diseñados por expertos para impulsar tu carrera
          </p>
        </div>

        <CarouselRow title="Más Populares" courses={courses} />
        <CarouselRow title="Nuevos Cursos" courses={[...courses].reverse()} />
        <CarouselRow title="Recomendados para Ti" courses={[...courses].sort(() => Math.random() - 0.5)} />
      </div>
    </section>
  );
}
