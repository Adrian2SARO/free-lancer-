import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Rutas } from './router/Rutas'
import styled from 'styled-components';
import flecha from './componentes/iconos/back.png'
import { Footer } from './componentes/Paginas/Footer';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para un desplazamiento suave
    });
  };

  const ScrollBtn = styled.button `
    position: fixed;
    bottom: 0px;
    right: 5px;
    padding: 10px;
    background-color: #F3781f;
    color: white;
    font-size: 24px;
  `

  return (
    <BrowserRouter>
      <div className=''>
        <Rutas />
        <ScrollBtn onClick={scrollToTop} className="scroll-top-btn rounded-t-xl"><img src={flecha} alt="felcha arriba" className='rotate-90 w-[15px]'/></ScrollBtn>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
