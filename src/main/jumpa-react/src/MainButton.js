import React, { useState } from 'react';
import Modal from 'react-modal';
import Juego from './Juego';

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
        <Juego />
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
}

export default MainButton;
