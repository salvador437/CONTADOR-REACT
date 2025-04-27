import React from 'react';
import '../hojas-de-estilo/Header.css';


function Header({titulo, subtitulo, subtitulo2, logo}) {
  return (
      <div className='header'>
        <h1 className='titulo'>{titulo}</h1>
        <p className='subtitulo'>{subtitulo}</p>
        <p className='subtitulo2' >{subtitulo2}</p>
        <img className='logo' src={logo} alt='Logo de la app' />
      </div>
  );   
}

export default Header;
