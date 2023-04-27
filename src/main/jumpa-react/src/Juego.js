import React from 'react';
import axios from 'axios';

function Juego() {

    const handleClick = () => {
        const container = document.getElementById('juego-container');

        // Hacer la petición GET al controlador de Spring Boot
        axios.get('/api/juegos/1')
            .then(response => {
                // Mostrar el mensaje recibido en el contenedor
                container.innerHTML = response.data.texto;
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={handleClick}>Jugar</button>
            <div id="juego-container"></div>
        </div>
    );
}

export default Juego;
