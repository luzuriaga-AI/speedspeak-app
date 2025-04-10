import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard');
      } catch (error) {
        setError('Correo o contraseña incorrectos.');
      }
    } else {
      setError('Completa todos los campos.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Correo"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6 relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-xl"
        >
          {showPassword ? '🙈' : '🙉'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

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