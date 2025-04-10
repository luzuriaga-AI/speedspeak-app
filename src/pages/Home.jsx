import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="min-h-screen px-4 pt-36 pb-10 bg-white text-center">
        {/* Título principal */}
        <h1 className="text-5xl font-bold mb-8">Bienvenido a SpeedSpeak 🧠🚀</h1>

        {/* Botones principales */}
        <div className="flex justify-center gap-4 mb-14">
          <Link to="/auth">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-full transition">
              Iniciar Sesión
            </button>
          </Link>
          <Link to="/buy">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full transition">
              Comprar Curso
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-5 rounded-full transition">
              Ir al Dashboard
            </button>
          </Link>
        </div>

        {/* Animación de SpeedSpeak (por ahora texto) */}
        <div className="w-full max-w-3xl h-64 bg-gray-200 rounded-lg mx-auto mb-20 flex items-center justify-center">
          <p className="text-gray-500">[Aquí se mostrará la animación de SpeedSpeak 🎥]</p>
        </div>

        {/* Sección de beneficios */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">¿Por qué SpeedSpeak?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-20">
            {[
              'Aprende un idioma en solo 31 días',
              'Técnicas de memorización con historias visuales',
              'Lecciones organizadas: vocabulary, grammar y speaking',
              'Follow up personalizado, ayuda 24h y barra de progreso',
              'Certificado oficial al finalizar',
              'Únete al curso de forma presencial o 100% online',
            ].map((text, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl px-4 py-6 shadow-sm text-center font-medium text-[15px] h-[110px] flex items-center justify-center"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;