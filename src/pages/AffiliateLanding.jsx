import React from 'react';
import { useNavigate } from 'react-router-dom';

const AffiliateLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Tu amigo te ha invitado a SpeedSpeak tras cumplir su objetivo de hablar una lengua en solo 31 días
      </h1>

      <div className="w-full max-w-3xl h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
        <p className="text-gray-500">[Aquí se mostrará la animación de SpeedSpeak 🎥]</p>
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