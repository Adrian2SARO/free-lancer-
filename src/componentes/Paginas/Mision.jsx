import { NavBarGenerico } from "../Navegador/NavBarGenerico"
import styled from "styled-components"
import retraro from '../fotos-vet/group-portrait-adorable-puppies.jpg';
import manitas from '../fotos-vet/6888957-removebg-preview.png';

export const Mision = () => {


  const ArticuloPersonalizado = styled.article`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px
  `;

  const SpanPersonalizado = styled.span `
    font-size: 18px;
    font-weight: bold;
  `

  const SpanPersonalizado2 = styled.span `
    font-size: 16px;
    font-weight: bold;
  `



  return (
    <div className=" bg-lightgray w-full h-[900px] pl-8 pr-8">
      <NavBarGenerico texto="Mision" path="/" />
      <div className= "content-mayor bg-white w-full h-[800px] rounded-md mt-9 flex flex-wrap flex-col ">

        {/* Titulo */}
        <div className=" flex justify-center h-[15%] items-center w-full">
          <h2 className="text-[35px]">Nuestra mision en <span className="text-lightorange font-bold">Animal's</span> <span className="font-bold">Veterinaria</span></h2>
        </div>

        {/* Recuadros */}
        <div className="  flex h-[75%] flex-wrap">

          {/* izquierda */}
          <div className=" w-[40%] flex justify-center items-center">

              <article className='bg-blue-200 flex justify-center w-[480px] h-[460px] flex-col'>
                  
                  <div className="h-1/2 w-full flex items-center p-5 bg-lightblue ">
                    
                    <h3 >
                      <SpanPersonalizado>Compromiso con la salud y el bienestar animal: </SpanPersonalizado> En Clinica 
                      <SpanPersonalizado> Veterinaria <span className='text-lightorange'>Animal's</span></SpanPersonalizado>, nuestro
                      compromiso es garantizar la salud y el bienestar de tus mascotas. Nuesto equipo profesional ofrece atencion medica
                      de calidad y cuidado amoroso a cada animal que llega a nuestras instalaciones.
                    </h3>

                  </div>

                  <div className="h-1/2 w-full flex">

                    <img src={retraro} alt="retraro aniamles" />

                  </div>

              </article>

          </div>

          {/* derecha */}
          <div className=" flex gap-4 flex-wrap w-[60%] pr-3 justify-center md:overflow-hidden ">

            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-pink-400">
              <p className="text-[14px]"><SpanPersonalizado2>Excelencia en el cuidado veterinario: </SpanPersonalizado2>
              Nos destacamos por nuestra excelencia en el cuidado veterinario. Contamos con un equipo altamente
              capacitado, tecnologia moderna y practicas medicas actualizadas para brindar el mejor tratamiento a tus mascotas.
              </p>
            </ArticuloPersonalizado>
            
            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-red-500">
            <p className="text-[14px]">
              <SpanPersonalizado2>Valores eticos y de responsabilidad: </SpanPersonalizado2>
              En <span className="font-bold">Animal's</span> Veterinaria estamos regidos por valores eticos y de responsabilidad.
              Respetamos la vida animal, cuidamos el medio ambiente y apoyamos activamente la proteccion y el bienestar de todos los animales.
              </p>
            </ArticuloPersonalizado>
            
            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-yellow-400">
            <p className="text-[14px]">
              <SpanPersonalizado2>
                Vocacion por el servicio: 
              </SpanPersonalizado2> En nuestra clinica <span className="font-bold">Animal's</span> Veterinaria, tenemos una verdadera vocacion por el servicio. 
              Nos apasiona ayudar a los animales y sus familias, creando un ambiente calido y comprensivo en cada visita.
            </p>
            </ArticuloPersonalizado>
            
            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-lightorange">
            <p className="text-[14px]">
              <SpanPersonalizado2>
                Educacion y prevencion: 
              </SpanPersonalizado2> Promovemos la educacion y la prevencion de enfermedades. Nuestro objetivo es informarte sobre la importancia
              de los chequeos regulares y la atencion preventiva para mantener a tus mascotas sanas y felices durante toda su vida.
            </p>
            </ArticuloPersonalizado>

            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-lightgreen">
            <p className="text-[14px]">
              <SpanPersonalizado2>
                Contribucion a la comunidad: 
              </SpanPersonalizado2> En Clinica Veterinaria <span className="font-bold">Animal's</span>, 
              nos comprometemos con la comunidad. Participamos en programas de ayuda a animales necesitados y apoyamos iniciativas locales
              para mejorar el bienestar general de los animales y la comunidad.
              </p>
            </ArticuloPersonalizado>

            <ArticuloPersonalizado className=" w-[260px] h-[260px] bg-green-400">
            <p className="text-[14px]">
              <SpanPersonalizado2>
                Enfoque en la medicina preventiva: 
              </SpanPersonalizado2> En Cliniva Veterinaria <span className="font-bold">Animal's</span>, tenemos
              fuerte enfoque en la medicina preventiva. Nuestro programas de vacunacion, desparasitacion y chequeos regulares ayudan a prevenir
              enfermedades y mantener a tus mascotas en optimas condiciones de salud.
            </p>
            </ArticuloPersonalizado>

          </div>

        </div>

        {/* Footer de la carta */}
        <div className="h-[10%] flex w-full" style={{ backgroundImage: `url(${manitas})`, backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundPosition: 'center', overflow: 'hidden'}}>
          {/* Contenido dentro del div */}
        </div>


      </div>

    </div>
  )
}
