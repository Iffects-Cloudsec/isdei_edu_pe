import { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Video preview"
              className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Descubre Nuestra <span className="text-blue-600">Plataforma</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mira cómo nuestra plataforma educativa puede transformar tu experiencia de aprendizaje
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
