import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
        </h2>

        {isRegistering ? <Register /> : <Login />}

        <p className="mt-4 text-center text-sm text-gray-600">
          {isRegistering ? (
            <>
              ¿Ya tienes una cuenta?{' '}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-600 hover:underline"
              >
                Inicia sesión
              </button>
            </>
          ) : (
            <>
              ¿No tienes una cuenta?{' '}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-600 hover:underline"
              >
                Regístrate aquí
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;