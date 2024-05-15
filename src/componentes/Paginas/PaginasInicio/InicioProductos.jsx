import { NavLink } from 'react-router-dom';
import { MyButton } from './componentes/Mybutton';
import perro from './assets/8602029.png';
import styled from 'styled-components';
import azulR from './assets/104874.jpg-1200ftw.jpeg';
import amarilloR from './assets/104900.jpg-1200ftw.jpeg';
import moradoR from './assets/104901.jpg-1200ftw.jpeg';
import rojoR from './assets/RoyalCaninArtboard1copy10_73be1dd3-5551-4bc2-b1ff-cc0d73366555_800x.jpg.jpeg';



export const InicioProductos = () => {

    const ImagenConFiltro = styled.div`
    background-color: black;
    filter: brightness(90%) saturate(85%) hue-rotate(10deg); 
    overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
    `;

    const TextoVertical = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px; /* Altura del div */
    justify-content: space-between; /* Espacio entre las letras */
    `;

    const TextoVerticalItem = styled.span`
    writing-mode: vertical-lr; /* Texto vertical de izquierda a derecha */
    text-orientation: upright; /* Orientación del texto vertical */
    `;



  return (

    <div>
        <div className="hidden lg:flex lg:flex-row">

        {/* Div de la izquierda */}
        <div className='flex flex-col w-[80%]'>

            <div className='h-[20%]'>
                <h2 className='text-white w-full text-[20vh] font-black text-center'>Productos</h2>
            </div>

            <div className='h-[80%] flex flex-row overflow-hidden'>

                <div className='text-white flex flex-col w-[50%] items-center justify-center'>
                    <h2 className='p-10 text-[4vh]'>Manten bien  <span className='font-bold'>
                            alimentados
                    </span> y <span className='font-bold'>
                            felices
                    </span> a tus mascotas con nuestra amplia gama de alimentos que ofrecemos en Veterinaria <span className='fotn-bold text-lightorange'>Animal's</span>
                    </h2>

                            
                    <NavLink excat to="/mascotas" className='flex justify-center gap-8'>
                        <MyButton />
                    </NavLink>
                </div>

                <div className='w-[50%]'>
                    <ImagenConFiltro>
                        <img src={perro} alt="perro" className='w-[500px]' />
                    </ImagenConFiltro>
                </div>

            </div>


        </div>

        {/* Div de la derecha */}
        <div className='flex flex-col w-[20%] bg-white justify-center items-center'>

            <h2 className='h-[10%] text-[2.5vh] font-bold p-10'>Productos Destacados</h2>

            <div className='h-[90%] flex flex-col overflow-hidden justify-around'>

                <article className='p-2'>
                    
                    <div className='flex flex-row'>
                        <img src={rojoR} alt='rojoRoyal'className='w-[150px]' />
                        <div className='flex flex-col'>
                            <p className='font-bold text-[15px]'>Royal Canin</p>
                            <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                        </div>
                    </div>


                </article>

                <article className='p-2'>
                    
                    <div className='flex flex-row'>
                        <img src={azulR} alt='azulRoyal' className='w-[150px]'/>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[15px]'>Royal Canin</p>
                            <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                        </div>
                    </div>

                </article>

                <article className='p-2'>

                    <div className='flex flex-row'>
                        <img src={amarilloR} alt='amarilloRoyal' className='w-[150px]'/>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[15px]'>Royal Canin</p>
                            <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                        </div>
                    </div>
                    
                </article>

                <article className='p-2'>

                    <div className='flex flex-row'>
                        <img src={moradoR} alt='moradoRoyal' className='w-[150px]'/>
                        <div className='flex flex-col'>
                            <p className='font-bold text-[15px]'>Royal Canin</p>
                            <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                        </div>
                    </div>
                    
                </article>

            </div>

        </div>



        </div>

        {/* view para celulares */}
        <div className='flex flex-row lg:hidden md:hidden'>
            
            {/* Columna del titulo */}
            <div className='flex w-[20%] h-[1150px]'>
                    <TextoVertical className=''>
                        <TextoVerticalItem className='text-white text-[10vh] font-black'>Productos</TextoVerticalItem>
                    </TextoVertical>
            </div>

            {/* Columna de los articulos y parrafos */}
            <div className='flex w-[80%] flex-col ml-10'>

                {/* Textos */}
                <div className='flex h-[40%] flex-wrap justify-center'>
                    <h2 className='p-[60px] text-[2vh] text-white'>Manten bien  <span className='font-bold'>
                            alimentados
                    </span> y <span className='font-bold'>
                            felices
                    </span> a tus mascotas con nuestra amplia gama de alimentos que ofrecemos en Veterinaria <span className='fotn-bold text-lightorange'>Animal's</span>
                    </h2>

                    <NavLink excat to="/mascotas" className='flex justify-center gap-8'>
                        <MyButton />
                    </NavLink>
                </div>
                
                {/* Articulos */}
                <div className='flex h-[60%] bg-white flex-col gap-2'>
                    <h2 className='w-full text-center p-2 font-bold text-[2vh]'>Productos Destacados</h2>

                    <div className='flex flex-col'>
                        <article className='p-2'>
                            
                            <div className='flex flex-row'>
                                <img src={rojoR} alt='rojoRoyal'className='w-[150px]' />
                                <div className='flex flex-col'>
                                    <p className='font-bold text-[15px]'>Royal Canin</p>
                                    <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                                </div>
                            </div>
                        </article>
                        <article className='p-2'>
                            
                            <div className='flex flex-row'>
                                <img src={azulR} alt='azulRoyal'className='w-[150px]' />
                                <div className='flex flex-col'>
                                    <p className='font-bold text-[15px]'>Royal Canin</p>
                                    <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                                </div>
                            </div>
                        </article>
                        <article className='p-2'>
                            
                            <div className='flex flex-row'>
                                <img src={amarilloR} alt='amarilloRoyal'className='w-[150px]' />
                                <div className='flex flex-col'>
                                    <p className='font-bold text-[15px]'>Royal Canin</p>
                                    <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                                </div>
                            </div>
                        </article>
                        <article className='p-2'>
                            
                            <div className='flex flex-row'>
                                <img src={moradoR} alt='moradoRoyal'className='w-[150px]' />
                                <div className='flex flex-col'>
                                    <p className='font-bold text-[15px]'>Royal Canin</p>
                                    <p className='text-[12px]'>Mejor vendido en Veterinaria Animal's </p>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>

            </div>

        </div>
    </div>
    
  )
}

/* grid grid-cols-1 sm:grid-cols-2 gap-4 text-white mt-6 justify-center */
/* flex gap-4 text-white mt-6 justify-center */