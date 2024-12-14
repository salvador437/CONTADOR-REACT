import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const manejarClicmenos = () =>{
    setNumClics(numClics - 1);
  }

  const reset = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      
      <div className='container'>
        <Contador numClics={numClics} />
        <Boton 
          texto='+1'
          esBotonDeClic={true}
          controlBotones={manejarClic} />
        <Boton 
          texto='Reset'
          esBotonDeClic={false}
          controlBotones={reset} />
        <Boton 
          texto='-1'
          esBotonDeClic={true}
          controlBotones={manejarClicmenos} /> 
      </div>
    </div>
  );
}

export default App;
