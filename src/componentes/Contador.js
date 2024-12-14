import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador({ totalPulsaciones }) {
  return (
    <div className='contador'>
      {totalPulsaciones}
    </div>
  );   
}

export default Contador;
