

const CardComponent = ({texto, imagen}) => {
  return (
    <div className="group relative flex justify-center items-center text-black text-sm font-bold">

      <div className="shadow-md flex items-center group-hover:gap-2 bg-lightorange p-3 rounded-full cursor-pointer duration-300">
        <img src={imagen} alt="general" className="w-[25px]"/>
          {/* SVG path */}
        <span className="text-[0px] group-hover:text-sm duration-300">
          {texto}
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
