import './boton4.css';
import React from 'react';

function Boton4() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos4';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button4">JUMPA</button>
    </div>
  );
}

export default Boton4;