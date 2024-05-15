import GatoNaranjas from '../fotos-vet/closeup-shot-one-ginger-cat-licking-other-isolated-white-removebg-preview.png';
import BotonLogout from './PaginasInicio/componentes/BotonLogout';

import hombrePerro from '../iconos/animal-care.png';
import animales from '../iconos/bff_4840852.png';
import comida from '../iconos/canned-food_8023123.png';
import gato from '../iconos/cat.png';
import cama from '../iconos/pet-bed_7711380.png';
import friendly from '../iconos/pet-friendly_2439769.png';
import { NavLink } from 'react-router-dom';

export const Servicios = () => {
  return (
    <div className="bg-lightgray w-full md:h-auto lg:h-auto h-auto flex flex-col">

      <h2 className='font-black text-center text-[9vh] lg:text-[25vh] lg:mt-[-50px]' style={{ opacity: '0.2' }}>Servicios</h2>
      <img src={GatoNaranjas} alt='Gato-naranja' className='mt-[-200px] lg:hidden h-auto w-auto md:hidden' style={{mixBlendMode: 'multiply'}}/>
      
      {/* ViewPort para Celulares */}
      <div className='flex lg:hidden md:hidden flex-col'>
        <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={hombrePerro} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Médico en <span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>Nuestro equipo en Animal's se compromete con el diagnóstico 
            preciso y tratamiento efectivo de enfermedades y lesiones en mascotas, 
            garantizando su bienestar a largo plazo con atención integral y seguimiento continuo.
            </p>

          </div>

          </article>

          <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={friendly} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Vacunación en<span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>
            En nuestra clínica veterinaria Animal's, entendemos la importancia de la prevención para 
            la salud de tu mascota. Nuestro servicio de vacunación está diseñado para proteger a tu 
            compañero peludo contra enfermedades comunes, proporcionándole una vida larga y saludable.
            </p>

          </div>

          </article>

          <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={animales} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Cirugias en <span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>Nuestro equipo quirúrgico en Animal's realiza diversos 
            procedimientos, desde esterilizaciones hasta cirugías complejas, con alta capacitación
            y equipamiento. Garantizamos la seguridad y cuidado de tu mascota en todas las etapas 
            de la cirugía.
            </p>

          </div>

          </article>
          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={comida} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Alimentacion en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              En Animal's, brindamos asesoramiento personalizado sobre dietas equilibradas y 
              opciones de alimentación para satisfacer las necesidades específicas de tu mascota, 
              desde cachorros hasta mascotas mayores, asegurando su salud y bienestar con una 
              nutrición adecuada.
              </p>

            </div>

          </article>

          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={cama} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Estetica en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              Para mantener a tu mascota con un aspecto saludable y feliz, nuestro servicio de estética en 
              Animal's incluye baños, cortes de pelo, limpieza dental y otros tratamientos estéticos. 
              Nos preocupamos por su apariencia y comodidad mientras los consentimos con cuidados 
              especiales.
              </p>

            </div>

          </article>

          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={gato} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Hospitalizacion en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              Cuando tu mascota necesita atención médica continua y supervisión, 
              nuestro servicio de hospitalización en Animal's ofrece instalaciones cómodas y 
              un equipo dedicado las 24 horas. Nos aseguramos de que tu amigo peludo reciba el 
              cuidado necesario para su pronta recuperación.
              </p>

            </div>

          </article>
      </div>

      {/* ViewPort Para Tablets y Laptops */}
      <div className=' hidden items-center lg:flex md:flex flex-col lg:flex-row md:flex-row'>
        {/* Parte izquierda */}
        <div className='flex flex-col w-[30%] order-last lg:order-first  md:order-first '>

          <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={hombrePerro} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Médico en <span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>Nuestro equipo en Animal's se compromete con el diagnóstico 
            preciso y tratamiento efectivo de enfermedades y lesiones en mascotas, 
            garantizando su bienestar a largo plazo con atención integral y seguimiento continuo.
            </p>

          </div>

          </article>

          <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={friendly} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Vacunación en<span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>
            En nuestra clínica veterinaria Animal's, entendemos la importancia de la prevención para 
            la salud de tu mascota. Nuestro servicio de vacunación está diseñado para proteger a tu 
            compañero peludo contra enfermedades comunes, proporcionándole una vida larga y saludable.
            </p>

          </div>

          </article>

          <article className='flex p-5'>

          <div className='w-[20%]'>
            <img src={animales} alt='hombreconPerro' className='w-[60px]'/>
          </div>
          <div className='w-[80%] flex flex-col gap-2'>
            <h2 className='font-bold text-[2.5vh]'>Cirugias en <span className='text-lightorange'>Animal's</span></h2>
            <p className='text-[1.6vh]'>Nuestro equipo quirúrgico en Animal's realiza diversos 
            procedimientos, desde esterilizaciones hasta cirugías complejas, con alta capacitación
            y equipamiento. Garantizamos la seguridad y cuidado de tu mascota en todas las etapas 
            de la cirugía.
            </p>

          </div>

          </article>

        </div>

        {/* Parte central */}
        <div className='lg:flex md:flex hidden w-[40%] order-first lg:order-last'>
          <img src={GatoNaranjas} alt='Gato-naranja' className='mt-[-200px] lg:mt-[-300px] h-auto w-auto lg:w-[500px]' style={{mixBlendMode: 'multiply'}}/>
        </div>

        {/* Parte derecha */}
        <div className='mb-5 flex w-[30%] flex-col lg:order-last '>

          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={comida} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Alimentacion en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              En Animal's, brindamos asesoramiento personalizado sobre dietas equilibradas y 
              opciones de alimentación para satisfacer las necesidades específicas de tu mascota, 
              desde cachorros hasta mascotas mayores, asegurando su salud y bienestar con una 
              nutrición adecuada.
              </p>

            </div>

          </article>

          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={cama} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Estetica en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              Para mantener a tu mascota con un aspecto saludable y feliz, nuestro servicio de estética en 
              Animal's incluye baños, cortes de pelo, limpieza dental y otros tratamientos estéticos. 
              Nos preocupamos por su apariencia y comodidad mientras los consentimos con cuidados 
              especiales.
              </p>

            </div>

          </article>

          <article className='flex p-5'>

            <div className='w-[20%]'>
              <img src={gato} alt='hombreconPerro' className='w-[60px]'/>
            </div>
            <div className='w-[80%] flex flex-col gap-2'>
              <h2 className='font-bold text-[2.5vh]'>Hospitalizacion en <span className='text-lightorange'>Animal's</span></h2>
              <p className='text-[1.6vh]'>
              Cuando tu mascota necesita atención médica continua y supervisión, 
              nuestro servicio de hospitalización en Animal's ofrece instalaciones cómodas y 
              un equipo dedicado las 24 horas. Nos aseguramos de que tu amigo peludo reciba el 
              cuidado necesario para su pronta recuperación.
              </p>

            </div>

          </article>

        </div>

      </div>

      <div className='mb-5 flex justify-center lg:justify-start lg:ml-5'>
        <NavLink exact to='/'>
          <BotonLogout />
        </NavLink>
        </div>

    </div>
  )
}
