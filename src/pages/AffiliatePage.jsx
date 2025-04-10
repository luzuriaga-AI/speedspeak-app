import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const AffiliatePage = () => {
  const [affiliateCode, setAffiliateCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const emailEncoded = encodeURIComponent(user.email);
        setAffiliateCode(`https://speedspeak.es/afiliado?codigo=${emailEncoded}`);
      } else {
        setAffiliateCode('Inicia sesión para obtener tu link de afiliado.');
      }
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen p-6 bg-black text-white text-center">
      <h1 className="bg-purple-600 text-white text-2xl font-bold py-3 px-6 rounded-full inline-block mb-10">
        🔗 Link de Afiliado
      </h1>

      <p className="text-lg mb-4">Comparte este enlace con tus amigos y gana recompensas por cada persona que se apunte:</p>

      <div className="bg-white text-black p-4 rounded-xl shadow-md inline-block mb-4 max-w-xl w-full">
        <input
          type="text"
          value={affiliateCode}
          readOnly
          className="w-full text-center p-3 border rounded-md font-mono text-sm"
        />
        <button
          onClick={handleCopy}
          className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          {copied ? 'Copiado ✅' : 'Copiar Link'}
        </button>
      </div>
    </div>
  );
};

export default AffiliatePage;