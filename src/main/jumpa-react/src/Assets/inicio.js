import './inicio.css';
import Social from './social'

function Inicio() {
  const imgDani = process.env.PUBLIC_URL + '/img/avatar_dani.png'
  const imgPau = process.env.PUBLIC_URL + '/img/avatar_pau.png'
  const imgRicky = process.env.PUBLIC_URL + '/img/avatar_ricky.png'
  const imgJenny = process.env.PUBLIC_URL + '/img/avatar_jenny.png'
  
    return (
  <>
    <div className='social'> 
    <Social />
    </div>
    <div class="grid-container">
      {/* Dani */}
        <section id="messagelist1" class="message-list">
          <div class="nes-balloon from-left">
            <p>Hola! Mi nombre es Daniel Hernandez</p>
          </div>
        </section>
        <img className="imagen1" src={imgDani}/>

          {/* Pau */}

        <section id="messagelist2" class="message-list">
          <div class="nes-balloon from-right">
            <p>Hola! Mi nombre es Pau Espinas</p>
          </div>
        </section>
        <img className="imagen2" src={imgPau}/>

    {/* Ricardo */}
        <section id="messagelist3" class="message-list">
          <div class="nes-balloon from-left">
            <p>Hola! Mi nombre es Ricardo Castro</p>
          </div>
        </section>
        <img className="imagen3" src={imgRicky}/>

    {/* Jenny */}

    <section id="messagelist4" class="message-list">
          <div class="nes-balloon from-right">
            <p>Hola! Mi nombre es Jennifer Rodriguez</p>
          </div>
        </section>
        <img className="imagen4" src={imgJenny}/>

    </div>  
  </> 
    )
};
export default Inicio;