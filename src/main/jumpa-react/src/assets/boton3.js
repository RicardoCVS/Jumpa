import './boton3.css';
import React from 'react';

function Boton3() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos3';
  };

  return (
    <div class="wrap" onClick={handleClick}>
      <button class="button">JUMPA</button>
    </div>
  );
}

export default Boton3;