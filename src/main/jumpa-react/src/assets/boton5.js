import './boton5.css';
import React from 'react';

function Boton5() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos5';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button5">JUMPA</button>
    </div>
  );
}

export default Boton5;