import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [pulsaciones, setPulsaciones] = useState(0);
  
  const incrementarContador = () => {
    setPulsaciones(pulsaciones + 1);
  }

  const decrementarContador = () =>{
    setPulsaciones(pulsaciones - 1);
  }

  const reset = () => {
    setPulsaciones(0);
  }

  
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='titulo'>Contador de Pulsaciones</h1>
        <p className='subtitulo'>Realizado por: SLP</p>
        <p className='subtitulo2' >React + Hooks</p>
        <img className='logo' src="logo.jpg" alt='Logo de la app' />

        <Contador totalPulsaciones={pulsaciones} />
        <Boton 
          texto='Incrementar'
          selectButton={true}
          controlBotones={incrementarContador} />
        <Boton 
          texto='Reset'
          selectButton={false}
          controlBotones={reset} />
        <Boton 
          texto='Decrementar'
          selectButton={true}
          controlBotones={decrementarContador} /> 

      </div>
    </div>
  );
}

export default App;
