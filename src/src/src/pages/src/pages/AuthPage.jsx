import React from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Login />
      <Register />
    </div>
  );
};

export default AuthPage;