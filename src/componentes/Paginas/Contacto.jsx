import { NavBarGenerico } from "../Navegador/NavBarGenerico";
import MiFormulario from "./PaginasInicio/componentes/MiFormulario";
import gatito from '../fotos-vet/retrato-primer-plano-hermoso-gato-tailandes-ojos-azules-aislados-blanco.png';
import mail from '../iconos/email_542689.png';
import maps from '../iconos/maps-flags_447031.png';
import phone from '../iconos/phone-call_597177.png';
import clock from '../iconos/clock_3936550.png';
import CardComponent from "./PaginasInicio/componentes/CardComponente";

export const Contacto = () => {
  return (
    <>
      <NavBarGenerico texto="Contacto" path="/" />
      <div className="bg-lightgray w-full min-h-[800px] p-8 relative">
        <img src={gatito} alt="gato" className="w-[220px] mt-[-86px] lg:w-[280px] absolute lg:mt-[-120px] flex right-0" />
        <div className="bg-white w-full  lg:h-[700px] mt-9 flex flex-wrap">
          {/* Parte izquierda */}
          <div className="w-full lg:w-1/2 flex ">
            <div className="w-full lg:w-[80%] flex flex-col justify-center items-center">
              <div className="h-[20%] flex items-center lg:pl-4">
                <h2 className="text-[6vw] lg:text-[4vh] md:text-[5vh]"><span className="font-bold">Contacto</span> Veterinaria <span className="font-bold text-lightorange">Animal's</span></h2>
              </div>
              <div className="h-[10%] flex items-center  w-[300px] md:w-[400px] lg:w-[400px] lg:pl-9 md:mb-9 md:justify-center md:text-[2.5vh]">
                <h3 className="">Siéntete libre de contactarnos desde cualquier medio</h3>
              </div>
              <div className="h-[70%] flex items-center lg:justify-center w-full lg:pl-10 md:mb-8 lg:mb-2 mt-5">
                <MiFormulario />
              </div>
            </div>
          </div>
          {/* Parte derecha */}
          <div className="w-full lg:w-1/2 flex flex-wrap">
            <div className="w-full lg:w-[80%] flex flex-col flex-wrap justify-center items-center">
              <div className="flex flex-wrap justify-center items-center bg-lightgray h-auto lg:h-[600px] lg:gap-10 gap-5 lg:w-[500px] p-3 lg:absolute">
                <h2 className="text-[22px] font-bold">Información de Veterinaria <span className="text-lightorange">Animal's</span></h2>
                <div className="h-[40%] flex-col justify-evenly items-center w-full lg:w-[80%] lg:gap-5 flex">
                  <CardComponent texto="animals@hotmail.com" imagen={mail} />
                  <CardComponent texto="+81 8358 6175" imagen={phone} />
                  <CardComponent texto="Blvd. Primavera 2908, La Primavera, 64830 Monterrey, N.L." imagen={maps} />
                </div>
                <div className="h-[10%] w-full lg:w-[80%] flex justify-center items-center">
                  <h2 className="text-[22px] font-bold">Horario</h2>
                </div>
                <div className="h-[40%] w-full lg:w-[80%] flex-col justify-evenly">
                  <article className="flex justify-between">
                    <img src={clock} alt="reloj" className="w-[30px] object-contain" />
                    <p className="text-[15px] font-bold w-[200px]">Lunes a Viernes: 9:00 am - 1:30 pm, 3:00 pm - 7:00 pm</p>
                  </article>
                  <article className="flex justify-between">
                    <img src={clock} alt="reloj" className="w-[30px] object-contain" />
                    <p className="text-[15px] font-bold">Sabado: 9:00 am - 4:00 pm</p>
                  </article>
                  <article className="flex justify-between">
                    <img src={clock} alt="reloj" className="w-[30px] object-contain" />
                    <p className="font-bold text-[15px]">Domingo: Cerrado</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-[20%] bg-black "></div>
          </div>
        </div>
      </div>
    </>
  );
};
