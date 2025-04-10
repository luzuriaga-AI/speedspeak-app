import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AffiliatePage = () => {
  const [affiliateCode, setAffiliateCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = encodeURIComponent(user.email);
        const baseUrl = window.location.hostname.includes('localhost')
          ? 'http://localhost:3000/afiliado'
          : 'https://speedspeak.es/afiliado';

        setAffiliateCode(`${baseUrl}?ref=${email}`);
      }
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-center flex flex-col items-center">
      {/* Botón superior morado */}
      <div className="bg-purple-600 text-white text-2xl font-bold py-3 px-6 rounded-full inline-block mb-10">
        🔗 Link de Afiliado
      </div>

      {/* Bloque negro con contenido */}
      <div className="bg-black text-white p-6 rounded-xl shadow-md max-w-xl w-full">
        <p className="text-base font-bold mb-4">
          Comparte este link con tus amigos y obtén 50$ al instante por cada amigo que se apunte a SpeedSpeak gracias a ti:
        </p>

        <a
          href={affiliateCode}
          className="block font-bold text-blue-500 underline break-all mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {affiliateCode}
        </a>

        <button
          onClick={handleCopy}
          className="bg-white text-black font-semibold py-2 px-5 rounded-full transition hover:bg-gray-200"
        >
          {copied ? 'Copiado ✅' : 'Copiar Link'}
        </button>
      </div>
    </div>
  );
};

export default AffiliatePage;