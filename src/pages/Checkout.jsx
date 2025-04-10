import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang');
  const level = searchParams.get('level');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+34');
  const [phone, setPhone] = useState('');

  const languageNames = {
    es: 'Español',
    en: 'Inglés',
    de: 'Alemán',
    fr: 'Francés',
    it: 'Italiano',
    ar: 'Árabe',
    eu: 'Euskara',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password && phone) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            localStorage.setItem('userId', userCredential.user.uid);
            console.log("Inicio de sesión exitoso");
          })
          .catch(async () => {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;
            localStorage.setItem('userId', userId);

            await setDoc(doc(db, 'alumnos', userId), {
              nombre: name,
              email,
              telefono: `${phonePrefix}${phone}`,
              idioma: languageNames[lang],
              nivel: level,
            });

            console.log("Cuenta creada exitosamente");
          });

        window.location.href = 'https://checkout.revolut.com/pay/46b12a36-b014-46f8-a151-60f6aaa5cbec';
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  const countryPrefixes = [
    { code: '+34', label: '🇪🇸 España' },
    { code: '+1', label: '🇺🇸 EE.UU / 🇨🇦 Canadá' },
    { code: '+44', label: '🇬🇧 Reino Unido' },
    { code: '+49', label: '🇩🇪 Alemania' },
    { code: '+33', label: '🇫🇷 Francia' },
    { code: '+39', label: '🇮🇹 Italia' },
    { code: '+351', label: '🇵🇹 Portugal' },
    { code: '+81', label: '🇯🇵 Japón' },
    { code: '+82', label: '🇰🇷 Corea del Sur' },
    { code: '+86', label: '🇨🇳 China' },
    { code: '+7', label: '🇷🇺 Rusia' },
    { code: '+91', label: '🇮🇳 India' },
    { code: '+90', label: '🇹🇷 Turquía' },
    { code: '+61', label: '🇦🇺 Australia' },
    { code: '+64', label: '🇳🇿 Nueva Zelanda' },
    { code: '+55', label: '🇧🇷 Brasil' },
    { code: '+54', label: '🇦🇷 Argentina' },
    { code: '+56', label: '🇨🇱 Chile' },
    { code: '+57', label: '🇨🇴 Colombia' },
    { code: '+58', label: '🇻🇪 Venezuela' },
    { code: '+52', label: '🇲🇽 México' },
    { code: '+507', label: '🇵🇦 Panamá' },
    { code: '+506', label: '🇨🇷 Costa Rica' },
    { code: '+593', label: '🇪🇨 Ecuador' },
    { code: '+51', label: '🇵🇪 Perú' },
    { code: '+212', label: '🇲🇦 Marruecos' },
    { code: '+213', label: '🇩🇿 Argelia' },
    { code: '+216', label: '🇹🇳 Túnez' },
    { code: '+20', label: '🇪🇬 Egipto' },
    { code: '+971', label: '🇦🇪 Emiratos Árabes' },
    { code: '+966', label: '🇸🇦 Arabia Saudí' },
    { code: '+92', label: '🇵🇰 Pakistán' },
    { code: '+880', label: '🇧🇩 Bangladés' },
    { code: '+84', label: '🇻🇳 Vietnam' },
    { code: '+62', label: '🇮🇩 Indonesia' },
    { code: '+63', label: '🇵🇭 Filipinas' },
    { code: '+60', label: '🇲🇾 Malasia' },
    { code: '+27', label: '🇿🇦 Sudáfrica' },
    { code: '+254', label: '🇰🇪 Kenia' },
    { code: '+234', label: '🇳🇬 Nigeria' },
    { code: '+223', label: '🇲🇱 Mali' },
    { code: '+228', label: '🇹🇬 Togo' },
    { code: '+358', label: '🇫🇮 Finlandia' },
    { code: '+46', label: '🇸🇪 Suecia' },
    { code: '+45', label: '🇩🇰 Dinamarca' },
    { code: '+43', label: '🇦🇹 Austria' },
    { code: '+420', label: '🇨🇿 Chequia' },
    { code: '+48', label: '🇵🇱 Polonia' },
    { code: '+40', label: '🇷🇴 Rumanía' },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl max-w-xl w-full p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Resumen del Curso</h2>

        <p className="text-lg mb-2">
          <strong>Idioma:</strong> {languageNames[lang]}
        </p>
        <p className="text-lg mb-2">
          <strong>Nivel:</strong> {level}
        </p>
        <p className="text-lg mb-2">
          <strong>Duración:</strong> 62 horas
        </p>
        <p className="text-xl font-semibold mb-2">Precio: 500 €</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="w-full px-4 py-2 border rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="bg-black text-white text-sm px-4 py-2 rounded-md text-center">
            Ya tienes cuenta? Usa tu correo y contraseña. Si no, se creará una automáticamente para ti con el correo y la contraseña que introduzcas.
          </div>

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex gap-2">
            <select
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
              className="w-1/3 px-4 py-2 border rounded-md"
              required
            >
              {countryPrefixes.map((prefix) => (
                <option key={prefix.code} value={prefix.code}>
                  {prefix.label} ({prefix.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Número de Teléfono"
              className="w-2/3 px-4 py-2 border rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Confirmar y Comprar Curso
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;