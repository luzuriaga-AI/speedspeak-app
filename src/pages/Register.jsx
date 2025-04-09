import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Cuenta creada correctamente');
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Correo o teléfono"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
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