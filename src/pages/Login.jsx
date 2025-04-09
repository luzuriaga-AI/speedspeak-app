import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Sesión iniciada correctamente');
      } catch (error) {
        alert('Error al iniciar sesión: ' + error.message);
      }
    } else {
      alert('Completa todos los campos');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Correo o teléfono"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-200"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default Login;