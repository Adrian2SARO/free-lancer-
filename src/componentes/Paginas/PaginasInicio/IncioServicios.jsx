import GatoGris from '../PaginasInicio/assets/8623056.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { MyButton } from './componentes/Mybutton';


export const IncioServicios = () => {

    const SpanO = styled.span `
        color: #F3781F;
        font-weight: bold;
    `

  return (

    <div className='bg-black h-auto md:h-[500px] flex flex-col md:flex-row'>

                <div className='lg:flex md:flex lg:w-1/2 md:w-1/2 hidden'>

                    <img src={GatoGris} alt='gato gris' className='md:h-full lg:h-full h-full' />

                </div>

                <div className='lg:w-1/2 flex flex-col md:w-1/2'>

                    

                    <div className='h-[70%] md:h-full flex flex-col lg:justify-around lg:h-[60%] p-10'>
                       
                            <h1 className='text-white font-light text-center lg:text-[5vh] text-[3.5vh]'>Nuestros <span className='font-bold'>servicios</span> en <SpanO>Animal's</SpanO> Veterinaria</h1>
                            <p className='text-white text-[20px] font-light mt-5 lg:mt-0 md:mt-0'>"En nuestra <span className='font-bold'>veterinaria</span> <SpanO>Animal's</SpanO>, ofrecemos una amplia gama de servicios para cuidar la salud y bienestar de tus mascotas. Desde consultas médicas y vacunaciones hasta cirugías y cuidados especializados, estamos comprometidos en brindar la mejor atención para tus amigos peludos."</p>

                    </div>



                    <div className='h-[30%] lg:h-[40%] flex justify-center items-center'>
                        <NavLink exact to='/servicios'>
                        <MyButton />
                        </NavLink>
                    </div>
                </div>
     </div>

  )
}
