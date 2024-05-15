import BusinessTimeCounters from "./componentes/BusinessTimeCounters";


export const InicioContacto = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
      <iframe
        title="Mapa"
        width="100%"
        className="md:h-[500px] lg:h-[500px] h-[380px]"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-100.28406679630281%2C25.650622708464255%2C-100.27854144573213%2C25.653185632064922&amp;layer=mapnik&amp;marker=25.651904177146545%2C-100.28130412101746"
        style={{ border: '1px solid black' }}
        ></iframe>

      </div>

      <div className="bg-black text-white md:w-[600px] md:h-[550px] lg:w-[600px] lg:h-[550px] p-8 md:p-12 lg:p-12 md:absolute md:mt-[300px] lg:absolute ld:mt-[300px]">
        <article className="text-center flex flex-col items-center">
            <h2 className="font-bold text-[30px]">Horarios de apertura y cierre</h2>
            <p>veterinaria <span className="font-bold text-lightorange">Animal's</span></p>
            <br />
            <p>Lunes a Viernes: <span className="font-bold">9:00 am - 1:30 pm, 3:00 pm - 7:00 pm</span></p>
            <br />
            <p>Sabado: <span className="font-bold">9:00 am - 4:00 pm</span></p>
            <br />
            <p>Domingo: <span className="font-bold">Cerrado</span></p>
            <br />
            <BusinessTimeCounters />
        </article>
        
      </div>

     
      
    </div>
  );
};


