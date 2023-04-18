import './Tarjeta.css';
import Card from './Tarjeta.js';

function App() {
    const rutaImagen = process.env.PUBLIC_URL + '/img/samuel.jpg';
    const rutaImagen2 = process.env.PUBLIC_URL + '/img/ball.png';
  return (
    <>
    <Card 
      titleFront="Viva el betis"imagenBack={rutaImagen}
      titleBack="asd" textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa" imagenfront={rutaImagen2}
    />
    <Card 
      titleFront="Viva el betis" imagenBack={rutaImagen}
      titleBack="asd" textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa Pipsa Pipsa Pipsa PipsaPipsaPipsaPipsaPipsaPipsa" 
    />
    <Card />
    <Card />
    <Card />
    <Card />
    
  </>
  );
}

export default App;
