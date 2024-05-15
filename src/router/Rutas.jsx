import { Route, Routes } from 'react-router-dom';
import { Inicio } from '../componentes/Paginas/Inicio';
import { Servicios } from '../componentes/Paginas/Servicios';
import { Mision } from '../componentes/Paginas/Mision';
import { Contacto } from '../componentes/Paginas/Contacto';
import { Mascotas } from '../componentes/Paginas/Mascotas';

export const Rutas = () => {
  

  return (
    <div className='pt-5'> 

      <Routes>
        
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/mascotas' element={<Mascotas />}/>
        <Route path='/mision' element={<Mision />} />
        <Route path='/contacto' element={<Contacto />} />

      </Routes>

    </div>
  );
};
