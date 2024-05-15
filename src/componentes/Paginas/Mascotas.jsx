import { NavLink } from "react-router-dom";
import { MyButtonGenerico } from "./PaginasInicio/componentes/MyButtonGenerico";
import BotonLogout from "./PaginasInicio/componentes/BotonLogout";
import BotonExpandible from "./PaginasInicio/componentes/BotonExpandible";
import fotoAnimales from '../fotos-vet/group-portrait-adorable-puppies.jpg';

export const Mascotas = () => {
  return (
    <div className="flex flex-wrap bg-lightgray p-6 mt-[-18px]">
      <div className="bg-black text-white w-full h-[750px] flex flex-col lg:flex-col lg:h-[800px]">

        {/* EL titulo */}
        <div className="text-white flex justify-center items-center h-[20%] lg:h-[20%] md:h-[20%]  ">
          <h2 className="md:text-[5vh] text-[3vh] p-3 lg:text-[6vh]"><span className="font-bold">Productos</span> especializados para tu mascota</h2>
        </div>

        {/* Para la parte de en medio (2 secciones) */}
        <div className="flex lg:h-[70%] md:h-[70%] h-[70%]">

          {/* Seccion de la izquierda */}
          <div className="flex flex-col justify-center w-full lg:w-1/2">

            {/* Parrafo */}
            <div className="p-5 text-center w-full">
              <h2 className="text-[2vh] md:text-[4vh] lg:text-[5vh] font-light"><span className="font-bold">Proveemos</span> una amplia variedad de productos para que tu mascota se siente <span className="font-bold">feliz</span> y <span className="font-bold">saludable</span> </h2>
            </div>

            {/* Botones que llevan a las paginas */}
            <div className="flex justify-center gap-4 lg:gap-0 md:gap-0 lg:justify-around md:justify-around w-full lg:flex-row md:flex-row">
              <NavLink exact to="/mascotas/perros">
                <MyButtonGenerico texto={"Perro"} />
              </NavLink>
              <NavLink exact to="/mascotas/gatos">
                <MyButtonGenerico texto={"Gato"} />
              </NavLink>
              <NavLink exact to="/mascotas/otros">
                <MyButtonGenerico texto={"Otros"} />
              </NavLink>
            </div>

          </div>

          {/* Seccion de la derecha */}
          <div className="w-full lg:w-1/2 lg:flex md:flex items-center justify-center hidden">
            <img src={fotoAnimales} alt="FotoAnimales" className="rounded-full h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover lg:h-[400px] lg:w-[400px]" />
          </div>

        </div>

        {/* Botones de la parte inferior */}
        <div className="flex justify-between items-center w-full pl-6 pr-6 h-[10%] lg:h-[10%] md:h-[10%]">
          <NavLink exact to='/'>
            <BotonLogout />
          </NavLink>
          <BotonExpandible />
        </div>

      </div>
    </div>
  )
}
