import {Routes, Route} from 'react-router-dom';
import { Perros } from '../componentes/Paginas/SubPaginas/Perros';
import { Gatos } from '../componentes/Paginas/SubPaginas/Gatos';
import { OtrasMascotas } from '../componentes/Paginas/SubPaginas/OtrasMascotas';

export const c = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/mascotas/perro'  element={<Perros />}/>
        <Route path='/mascotas/gato'  element={<Gatos />}/>
        <Route path='/mascotas/otros'  element={<OtrasMascotas />}/>

      </Routes>
    </div>
  )
}
