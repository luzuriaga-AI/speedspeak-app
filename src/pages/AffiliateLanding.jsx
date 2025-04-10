import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const AffiliateLanding = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const referrer = decodeURIComponent(searchParams.get('ref') || 'su amigo');

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">¡{referrer} te ha invitado a SpeedSpeak! 🎉</h1>

      <p className="text-lg mb-6 max-w-2xl">
        Aprende un idioma en solo 31 días con el método más rápido y eficaz del mundo. Incluye seguimiento diario, 
        certificado oficial y acceso a lecciones visuales, prácticas y divertidas.
      </p>

      <div className="w-full max-w-3xl h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
        {/* Aquí irá la animación o vídeo de SpeedSpeak cuando esté disponible */}
        <p className="text-gray-500">[Aquí se mostrará la animación de SpeedSpeak 🎥]</p>
      </div>

      <button
        onClick={() => navigate('/buy')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition text-xl"
      >
        ¡Quiero aprender ahora!
      </button>

      <p className="mt-10 text-sm text-gray-500 max-w-md">
        Si te apuntas ahora usando este enlace, tu amigo recibirá una recompensa de 50 € como agradecimiento 🎁
      </p>
    </div>
  );
};

export default AffiliateLanding;