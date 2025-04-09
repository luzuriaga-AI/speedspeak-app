const Register = () => {
    return (
      <div className="flex-1 p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Correo o teléfono" />
          <input className="w-full p-2 border rounded" type="password" placeholder="Contraseña" />
          <button className="w-full bg-green-500 text-white p-2 rounded">Registrarse</button>
        </form>
      </div>
    );
  };
  
  export default Register;