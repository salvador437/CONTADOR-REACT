import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, controlBotones }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={controlBotones}>
      {texto}
    </button>
  );
}

export default Boton;