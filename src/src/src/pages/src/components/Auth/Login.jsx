const Login = () => {
    return (
      <div className="flex-1 p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Correo o teléfono" />
          <input className="w-full p-2 border rounded" type="password" placeholder="Contraseña" />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>
        </form>
      </div>
    );
  };
  
  export default Login;