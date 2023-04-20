import './indice.css';
import Card from './Tarjeta.js';

function Indice(){
    const rutaImagen = process.env.PUBLIC_URL + '/img/samuel.jpg';
    const rutaImagen2 = process.env.PUBLIC_URL + '/img/ball.png';
return (
  <>
    <div className="wrapper">
      <div className="container">
      <div className="sidebar">
          <ul>
            <li>
              <a href="#Card1">Sección 1</a>
            </li>
            <li>
              <a href="#Card2">Sección 2</a>
            </li>
            <li>
              <a href="#Card3">Sección 3</a>
            </li>
            <li>
              <a href="#Card4">Sección 4</a>
            </li>
            <li>
              <a href="#Card5">Sección 5</a>
            </li>
            <li>
              <a href="#Card6">Sección 6</a>
            </li>
          </ul>
        </div>
        <div className="content">
            <div id = "Card1">
                <Card
                    titleFront="Viva el betis"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            </div>
            <div id = "Card2"></div>
                <Card
                    titleFront="Viva el betis"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card3"></div>
                <Card
                    titleFront="Viva el betis"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card4"></div>
                <Card
                    titleFront="Viva el betis"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            <div/>
            <div id = "Card5"></div>
                <Card
                    titleFront="Viva el betis"
                    imagenBack={rutaImagen}
                    titleBack="asd"
                    textBack="Pipsa,Pipsa,Pipsa,Pipsa,Pipsa"
                    imagenfront={rutaImagen2}
                />
            <div/>
        </div>
      </div>
    </div>
  </>
);
}

export default Indice;