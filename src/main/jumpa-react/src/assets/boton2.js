import './boton2.css';
import React from 'react';

function Boton2() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos2';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button2">JUMPA</button>
    </div>
  );
}

export default Boton2;