import React from 'react';

function MainButton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8080/api/juegos';
  };

  return (
    <div>
      <button onClick={handleClick}>Jugar</button>
    </div>
  );
}

export default MainButton;
