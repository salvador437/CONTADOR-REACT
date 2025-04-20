import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Header from './componentes/Header';
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
        <Header 
          titulo='Contador de Pulsaciones'
          subtitulo='Realizado por: SLP'
          subtitulo2='React + Hooks'
          logo='./imgenes/logo.png'
        />
        
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
