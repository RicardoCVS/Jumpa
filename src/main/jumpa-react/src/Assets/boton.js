import './boton.css';
import React from 'react';

function Boton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button">JUEGO 1</button>
    </div>
  );
}

export default Boton;