import React, { useState } from 'react';
import Modal from 'react-modal';
import "./MainButton.css";

function MainButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="main-button" onClick={openModal}>
        Jugar
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Juego integrado aquí</h2>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default MainButton;
