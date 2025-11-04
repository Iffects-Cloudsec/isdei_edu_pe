import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-xl">
              ISDEi
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Inicio
            </a>
            <a href="#cursos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Cursos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Nosotros
            </a>
            <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Recursos
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
              Blog
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Regístrate
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Inicio
              </a>
              <a href="#cursos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Cursos
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Nosotros
              </a>
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Recursos
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Blog
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Regístrate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
