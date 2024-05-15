import styled from "styled-components"
import doctor from './assets/handsome-male-doctor-veterinarian-holding-syringe-standing-near-cute-black-pug-vaccinating-dog-white-background.jpg';
import { MyButtonGenericoNaranja } from "./componentes/MyButtonGenericoNaranja";
import { NavLink } from "react-router-dom";

export const InicioNosotros = () => {

    const SpanV = styled.span `
        color: #F3781F;
        font-weight: bold;
    `


  return (
    <div className="flex flex-wrap">

            <div className="flex flex-col lg:flex-col lg:w-1/2 md:w-1/2 lg:justify-between order-last lg:order-first md:order-first">

                <h2 className="lg:text-[5vh] text-[3.5vh] p-5 lg:p-10 text-black text-center">Porque escoger <SpanV>Animal's</SpanV> <span className="font-bold">Veterinaria</span></h2>


                <p className="lg:text-[15px] text-[20px] lg:pl-10 p-5 text-black">En veterinaria <SpanV>Animal's</SpanV>, creemoa que la atencion de calidad y la comuncacion abierta
                    debe ser la norma, no la excepcion. Estamos aqui para redefinir su experiencia veterinaria con un enfoque
                    divertido y atractivo que lo convierta en participante activo en el cuidado de su mascota.</p>
                <br/>
                <ul className="lg:text-[15px] pl-5 lg:pl-10 text-black font-bold list-disc">
                    <li className="ml-4"> Cuidado de bienestar</li>
                    <li className="ml-4"> Cirugia</li>
                    <li className="ml-4"> Odontologia</li>
                    <li className="ml-4"> Diagnostico</li>
                    <li className="ml-4"> Acupuntura</li>
                    <li className="ml-4"> Rehabilitacion fisica</li>
                </ul>

                <NavLink exact to='/mision'>
                    <MyButtonGenericoNaranja texto="Conoce nuestra Mision" />
                </NavLink>


            </div>

            <div className="flex lg:w-1/2 md:w-1/2">
                <img src={doctor} alt="DoctorAnimals" />
            </div>


    </div>
  )
}
