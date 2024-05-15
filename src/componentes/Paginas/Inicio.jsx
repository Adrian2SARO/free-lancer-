import { useEffect, useState } from "react";
import styled from "styled-components";
import imagenVeterinaria from "../fotos-vet/closeup-shot-one-ginger-cat-licking-other-isolated-white-removebg-preview.png";
import perroVeterinaria from '../fotos-vet/pug-dog-isolated-white-background-removebg-preview.png';
import { IncioServicios } from "./PaginasInicio/IncioServicios";
import { InicioNosotros } from "./PaginasInicio/InicioNosotros";
import { InicioProductos } from "./PaginasInicio/InicioProductos";
import { InicioContacto } from "./PaginasInicio/InicioContacto";
import { NavBar } from "../Navegador/NavBar";

export const Inicio = () => {
  const H1p = styled.h1`
    color: #F3781f;
  `;

  const opciones = ['para tu perro...', 'para tu gato...', 'para tu mascota...'];
  const [index, setIndex] = useState(0);
  const [textoVisible, setTextoVisible] = useState('');
  const [mostrarTexto, setMostrarTexto] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMostrarTexto(false); // Iniciar la animación de eliminación de texto
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % opciones.length);
        setMostrarTexto(true); // Iniciar la animación de escritura de la nueva opción
      }, 2000); // Delay para dar tiempo a la eliminación completa antes de mostrar la nueva opción
    }, 4000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  useEffect(() => {
    if (mostrarTexto) {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= opciones[index].length) {
          setTextoVisible(opciones[index].substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    } else {
      let currentIndex = opciones[index].length;
      const intervalId = setInterval(() => {
        if (currentIndex >= 0) {
          setTextoVisible(opciones[index].substring(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(intervalId);
        }
      }, 100);

      return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }
  }, [index, mostrarTexto]);

  return (
    <>
    <NavBar />
    <div className='bg-lightgray w-full h-[700px] md:h-[650px] lg:h-[650px] mt-5 flex flex-col items-center lg:flex-wrap lg:flex-row md:flex-wrap md:flex-row'>

      <div className="lg:w-1/2 md:w-1/2  h-[500px] flex flex-wrap flex-col items-center justify-center gap-3 absolute lg:relative md:relative bottom-0">
        
        <H1p className="font-bold bg-black rounded-md text-[30px] w-[350px] text-center">
          Animal's <span className="text-white font-light">Veterinaria</span>
        </H1p>

        <div className="flex gap-2">

        <p className="text-[15px] text-center">Tu veterinaria de confianza</p>
        <p className="text-[15px] text-center font-bold">{textoVisible}</p>

        </div>

      </div>

      <div className="lg:w-1/2 md:w-1/2 h-[550px] flex items-center justify-center " style={{ mixBlendMode: 'multiply' }}>

        <img src={perroVeterinaria} alt="Imagen de veterinaria" className="w-[500px] md:w-[400px] lg:w-[400px]"/>

      </div>

    </div>



    <div className='bg-lightgray w-full lg:h-auto md:h-auto h-auto mt-5 '>
      <IncioServicios />
    </div>
    
    <div className="bg-[#FAF9FA] text-white h-auto md:h-auto lg:h-auto">
      <InicioNosotros />
    </div>

    <div className="bg-black lg:h-auto md:h-auto h-auto">
      <InicioProductos />
    </div>

    <div className="bg-white h-auto">
      <InicioContacto />
    </div>

    </>

  )
}
