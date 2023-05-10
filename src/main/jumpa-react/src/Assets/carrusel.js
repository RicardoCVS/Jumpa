import './carrusel.css';
import Card from './Tarjeta.js';
import Boton from './boton.js';
function lospuntos(){
  const content    = document.querySelector('.content')
  const punto     = document.querySelectorAll('.punto')
  const position = 100/6
  punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        
        let operacion = posicion * -position

        content.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
  })
}
 

function Carrusel(){
    const fundacio = process.env.PUBLIC_URL + '/img/fundacio.png';
    const rutaImagen2 = process.env.PUBLIC_URL + '/img/ball2.png';
    const idea = process.env.PUBLIC_URL + '/img/ideas.png';
    const tec = process.env.PUBLIC_URL + '/img/coding.png';
    const objetivo = process.env.PUBLIC_URL + '/img/objetivo.png';
    const jumpa = process.env.PUBLIC_URL + '/img/jumpa.png';
    
return (
  <>
  <div className='xico' id="diapositivas">
    <div className='carrousel'>
        <div className="content">
            <div className = "card1">
                <Card
                    titleFront="¿Como surgió JUMPA?"
                    imagenBack={jumpa}
                    titleBack="El Origen"
                    textBack="Jumpa nace a partir de un gusto en comun, los videojuegos.<br>
                    Mediante los videojuegos nos propusimos crear un videojuego que sea divertido
                    y a la vez educativo.<br><br> Con esta herramienta podemos hacer que los niños aprendan
                    buenas costumbres hacia el medio ambiente."
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card2">
                <Card
                    titleFront="¿Cuál es nuestro objetivo?"
                    imagenBack={objetivo}
                    titleBack="Concienciar"
                    textBack="Con este proyecto, queremos hacer más divertida y amena la concienciación
                    por el medio ambiente.<br><br> 
                    ¿Como logramos esto? Mediante minijuegos en los cuales tendrás que pensar rápidamente
                    que tienes que hacer para ganar más puntos.
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card3">
                <Boton />
            </div>
            <div className = "card6">
                <Card
                    titleFront="¿Con que se ha hecho?"
                    imagenBack={tec}
                    titleBack="Tecnologías"
                    textBack="Para realizar este proyecto, hemos utilizado java, spring-boot, react con su respectivo
                    html, css y javascript.<br><br> Para organizarnos hemos usado Trello, la metodología de SCRUM y CANVAN.
                    <br><br>Con todas estas herramientas hemos logrado crear esta misma diapositiva y todo lo que habéis visto
                    hasta ahora.
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card4">
                <Card
                    titleFront="¿El futuro?"
                    imagenBack={idea}
                    titleBack="En el tintero"
                    textBack="
                    <ul>
                        <li>·Por supuesto añadiremos más minijuegos</li><br>
                        <li>·Adaptar el juego para que se pueda disfrutar desde el móvil.</li><br>
                        <li>·Cambiar todo el diseño a un estilo más pixelart.</li><br>
                        <li>·Añadir jugadores, con sus respectivas puntuaciones.</li><br>
                    </ul>
                    "
                    imagenfront={rutaImagen2}
                />
            </div>
            <div className = "card5">
                <Card
                    titleFront="Agradecimientos"
                    imagenBack={fundacio}
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
          <li className='punto'></li>
        </ul>
    </div>
    </div>
  </>
);
}

export default Carrusel;