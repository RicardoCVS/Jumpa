import "./title.css";
const imgMenu = process.env.PUBLIC_URL + "/img/bx-menu.svg";
function Title() {
    return (
<header class="header" id="ini">
<img src={imgMenu} alt="" class="menu"/>
<nav class="menu-navegacion">
  <a href="#ini">Inicio</a>
  <a href="#servicio">Servicio</a>
  <a href="#hola">Hola</a>
  <a href="#adios">Adios</a>
  <a href="#aaao">aaao</a>
</nav>
<div class="contenedor-head">
  <h1 class="titulo">JUMPA</h1>
  <p class="copy">Aprende Jugando</p>
</div>
</header>

    )
};
export default Title;
