import React from 'react';
import { useNavigate } from 'react-router-dom';
import basqueFlag from './assets/basque-flag.png';

const languages = [
  { code: 'es', name: 'Español', flagUrl: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png' },
  { code: 'en', name: 'English', flagUrl: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png' },
  { code: 'de', name: 'Deutsch', flagUrl: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png' },
  { code: 'fr', name: 'Français', flagUrl: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png' },
  { code: 'it', name: 'Italiano', flagUrl: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png' },
  { code: 'ar', name: 'العربية', flagUrl: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png' },
  { code: 'eu', name: 'Euskara', flagUrl: basqueFlag },
];

const AffiliateLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Tu amigo te ha invitado a SpeedSpeak tras cumplir su objetivo de hablar una lengua en solo 31 días
      </h1>

      {/* Banderas en una fila */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center items-center gap-4 mb-6">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="w-20 h-14 rounded overflow-hidden shadow-md"
          >
            <img
              src={lang.flagUrl}
              alt={lang.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/buy')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition text-xl"
      >
        ¡Quiero aprender ahora!
      </button>

      <p className="mt-10 text-sm text-gray-500 max-w-md">
        Si te apuntas ahora usando este enlace, recibirás un descuento del 10% en tu objetivo 🎁
      </p>
    </div>
  );
};

export default AffiliateLanding;
