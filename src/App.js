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
        <Contador totalPulsaciones={pulsaciones} />
        <Boton 
          texto='+1'
          selectButton={true}
          controlBotones={incrementarContador} />
        <Boton 
          texto='Reset'
          selectButton={false}
          controlBotones={reset} />
        <Boton 
          texto='-1'
          selectButton={true}
          controlBotones={decrementarContador} /> 
      </div>
    </div>
  );
}

export default App;
