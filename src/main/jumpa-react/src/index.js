import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rutaImagen = process.env.PUBLIC_URL + '/img/samuel.jpg';
root.render(
  <React.StrictMode>
     <Card titleFront="Samuel Racista" textFront="Jose Sexo" 
     imagenBack = {rutaImagen} titleBack="Samuel Eto" 
     textBack="dsad"/>
     <Card titleFront="Samuel Racista" textFront="Jose Sexo" 
     imagenBack = {rutaImagen} titleBack="Samuel Eto" 
     textBack="adsad"/>
  </React.StrictMode>
  
);

reportWebVitals();
