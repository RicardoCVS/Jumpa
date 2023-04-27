import './indice.css';
import Card from './Tarjeta.js';
import Boton from './boton.js'
function lospuntos(){
  const content    = document.querySelector('.content')
  const punto     = document.querySelectorAll('.punto')
  punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        
        let operacion = posicion * -20

        content.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
  })
}
 

function Indice(){
    const rutaImagen = process.env.PUBLIC_URL + '/img/samuel.jpg';
    const rutaImagen2 = process.env.PUBLIC_URL + '/img/ball.png';
    
return (
  <>
    <div className='carrousel'>
        <div className="content">
            <div className = "card1">
                <Card
                    titleFront="¿Como surgió JUMPA?"
                    imagenBack={rutaImagen}
                    titleBack="El origen"
                    textBack="Jumpa nace apartir de un gusto en comun, los videojuegos.<br>
                    Mediante los videojuegos nos propusimos crear un videojuego que sea divertido
                    y a la vez educativo.<br> Con esta herramienta podemos hacer que los niños aprendan
                    buenas costumbres hacía el medio ambiente."
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card2">
                <Card
                    titleFront="¿Cuál es nuestro objetivo?"
                    imagenBack={rutaImagen}
                    titleBack="Concienciar"
                    textBack="Con este proyecto, queremos hacer más divertida y amena la coincienciación
                    por el medio ambiente.<br><br> 
                    ¿Como logramos esto? Mediante minijuegos en los cuales tendrás que pensar rápidamente
                    que tienes que hace para ganar más puntos.
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card3">
                <Boton />
            </div>
            <div className = "card4">
                <Card
                    titleFront="¿El futuro?"
                    imagenBack={rutaImagen}
                    titleBack="En el tintero"
                    textBack="Que ideas nos gustaría añadir en un futuro?<br><br>
                    Por supuesto más minijuegos (aquí tenemos que añadir minijuegos).<br><br>
                    Adaptar el juego para que se pueda disfrutar desde el móvil.<br><br>
                    Cambiar todo el diseño a pixelart.
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card5">
                <Card
                    titleFront="Agradecimientos"
                    imagenBack={rutaImagen}
                    titleBack="El inicio"
                    textBack="Todo esto ha sido posible gracias a la oportunidad
                    que nos ha brindado la Fundación Esplai junto al SOC.<br><br>
                    En especial a David, Lydia y Araceli, que nos han estado 
                    apoyando durante estos 3 meses de trabajo.<br><br>
                    Esperamos que esto sea el comienzo de algo grande y de lo que 
                    podamos estar orgullosos.
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
        </div>
        <ul className='puntos'onClick={lospuntos}>
          <li className='punto activo'></li>
          <li className='punto'></li>
          <li className='punto'></li>
          <li className='punto'></li>
          <li className='punto'></li>
        </ul>
    </div>
  </>
);
}

export default Indice;