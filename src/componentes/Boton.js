import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, selectButton, controlBotones }) {
  return (
    <button
      className={selectButton ? 'boton-incrementar' : 'boton-reiniciar'}
      onClick={controlBotones}>
      {texto}
    </button>
  );
}

export default Boton;