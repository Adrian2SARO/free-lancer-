import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import flecha from '../iconos/back.png';

export const NavBarGenerico = ({texto, path}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    const estiloFlecha = {
      width: '20px',
      height: '20px',
      filter: 'invert(1)'
    };
  
    return (
      <nav className='bg-black text-white text-[15px] p-4 w-[160px] h-[30px] flex flex-wrap mx-auto rounded-md' style={{ flexDirection: 'column', justifyContent: 'center' }}>
        <ul className='flex mx-auto gap-6'>
          <li className={`hover:text-lightorange ${activeIndex === 0 ? 'text-lightorange' : ''}`} onClick={() => handleClick(0)}>
            <NavLink exact to={path}><img src={flecha} alt="flecha atras" style={estiloFlecha} /></NavLink>
          </li>
          <li className='text-[15px]'>
            {texto}
          </li>
        </ul>
      </nav>
    );
}
