import React, { useState } from 'react';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'Inglés' },
  { code: 'de', name: 'Alemán' },
  { code: 'fr', name: 'Francés' },
  { code: 'it', name: 'Italiano' },
  { code: 'ar', name: 'Árabe' },
];

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const BuyCourse = () => {
  const [selectedLang, setSelectedLang] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Selecciona el idioma</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLang(lang.code)}
            className="p-4 bg-white shadow rounded-xl"
          >
            {lang.name}
          </button>
        ))}
      </div>

      {selectedLang && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Selecciona el nivel</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {levels.map((level) => (
              <button
                key={level}
                className="p-4 bg-blue-100 rounded-xl hover:bg-blue-300"
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