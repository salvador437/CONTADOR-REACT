import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [pulsaciones, setNumClics] = useState(0);

  const incrementarContador = () => {
    setNumClics(pulsaciones + 1);
  }

  const decrementarContador = () =>{
    setNumClics(pulsaciones - 1);
  }

  const reset = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      
      <div className='container'>
        <Contador numClics={pulsaciones} />
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
