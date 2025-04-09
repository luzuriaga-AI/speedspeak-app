import React, { useState } from 'react';
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

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const BuyCourse = () => {
  const [selectedLang, setSelectedLang] = useState(null);
  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
    localStorage.setItem('selectedLevel', level);
    navigate(`/checkout?lang=${selectedLang.code}&level=${level}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Elige el idioma que quieres aprender</h2>

      {/* Grid de idiomas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto mb-10">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLang(lang)}
            className={`relative text-black font-bold p-4 rounded-xl shadow-md overflow-hidden h-32 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
              selectedLang?.code === lang.code ? 'ring-4 ring-blue-400' : ''
            }`}
            style={{ backgroundImage: `url(${lang.flagUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1)' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <span className="relative z-10 text-xl text-center">{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Grid de niveles */}
      {selectedLang && (
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Selecciona el nivel de {selectedLang.name}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className="p-4 bg-white hover:bg-green-300 rounded-xl text-lg font-semibold shadow"
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyCourse;