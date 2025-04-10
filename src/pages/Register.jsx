import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Correo"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Contraseña */}
      <div className="mb-4 relative">
        <input
          type={showPassword1 ? 'text' : 'password'}
          placeholder="Contraseña"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword1(!showPassword1)}
          className="absolute right-3 top-2 text-xl"
        >
          {showPassword1 ? '🙈' : '🙉'}
        </button>
      </div>

      {/* Repetir contraseña */}
      <div className="mb-6 relative">
        <input
          type={showPassword2 ? 'text' : 'password'}
          placeholder="Repetir contraseña"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword2(!showPassword2)}
          className="absolute right-3 top-2 text-xl"
        >
          {showPassword2 ? '🙈' : '🙉'}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
      >
        Registrarse
      </button>
    </form>
  );
};

export default Register;