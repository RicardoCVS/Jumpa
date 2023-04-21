import React, { useEffect } from 'react';
import axios from 'axios';

function Juego() {
    useEffect(() => {
        const container = document.getElementById('juego-container');

        // Hacer la petición GET al controlador de Spring Boot
        axios.get('/api/juegos/1')
        .then(response => {
            // Mostrar el mensaje recibido en el contenedor
            container.innerHTML = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return null;
}

export default Juego;
