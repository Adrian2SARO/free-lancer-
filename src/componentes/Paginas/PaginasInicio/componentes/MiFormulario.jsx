import React, { useState } from 'react';

const MiFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    numero: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar los datos del formulario, como enviarlos a un servidor
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({
      nombre: '',
      email: '',
      numero: '',
      mensaje: ''
    });
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 rounded-md lg:w-[400px] w-full md:w-[400px]">
        <div className="relative ">
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border-b border-black py-1 focus:border-b-2 focus:border-lightorange transition-colors focus:outline-none peer bg-inherit"
            placeholder="Nombre"
          />
          <label
            htmlFor="nombre"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-lightorange"
          >
            Nombre
          </label>
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-black py-1 focus:border-b-2 focus:border-lightorange transition-colors focus:outline-none peer bg-inherit"
            placeholder="Correo Electrónico"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-lightorange"
          >
            Correo Electrónico
          </label>
        </div>
        <div className="relative">
          <input
            id="numero"
            name="numero"
            type="text"
            value={formData.numero}
            onChange={handleChange}
            className="w-full border-b border-black py-1 focus:border-b-2 focus:border-lightorange transition-colors focus:outline-none peer bg-inherit"
            placeholder="Número de Teléfono"
          />
          <label
            htmlFor="numero"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-lightorange"
          >
            Número de Teléfono
          </label>
        </div>
        <div className="relative">
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full border-b border-black py-1 focus:border-b-2 focus:border-lightorange transition-colors focus:outline-none peer bg-inherit max-h-[150px] min-h-[100px] "
            placeholder="Mensaje"
            rows="4"
          />
          <label
            htmlFor="mensaje"
            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-lightorange"
          >
            Mensaje
          </label>
        </div>
        <button type="submit" 
              className="cursor-pointer transition-all bg-lightorange text-white px-6 py-2 rounded-lg
              border-black border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          Enviar
        </button>
      </form>
  );
};

export default MiFormulario;
