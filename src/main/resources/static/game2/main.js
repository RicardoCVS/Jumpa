const imagen = document.getElementById("objeto");
const imagenB = document.getElementById("basura")
const basura = ["/game2/img/bolsa.png","/game2/img/cigarro.png","/game2/img/pila2.png"];
const elemento = document.getElementById('papelera');
const lago = document.getElementById('lago');
let segundo = "4";
let num = 0;
let verdad = false;
let result = 0;
var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
function objeto() {
    
    imagenB.src = basura[num];
    if (num == 2) {
      imagen.style.width = '15%'
      imagen.style.marginBottom = '24%'
    }
    else{
      imagen.style.width = '20%'
      imagen.style.marginBottom = '20%'
    }
    num++;
    if(num > 2){
        num = 0;
    }
  }

function check(){
    comprobarAlineacion();
     
}

function comprobarAlineacion() {

    const objetoCoords = imagen.getBoundingClientRect();
    const fondoCoords = elemento.getBoundingClientRect();

    const objetoCentro = {
        x: objetoCoords.left + objetoCoords.width / 2,
        y: objetoCoords.top + objetoCoords.height / 2
      };
    const papeleraCentro = {
        x: fondoCoords.left + fondoCoords.width / 2,
        y: fondoCoords.top + fondoCoords.height / 2
    };
    const distancia = Math.sqrt(
        (objetoCentro.x - papeleraCentro.x) ** 2 +
        (objetoCentro.y - papeleraCentro.y) ** 2
    );
        console.log(distancia);
    if (distancia < 110) { 
        imagenB.style.visibility = "hidden";    
        imagen.style.transform = 'none'
        verdad = true;
        result += 10;
        resultado.textContent ="Puntos: "+ result;
        
    } else {
        imagen.style.transform = 'none'
        verdad = false;
        result -= 10;
        resultado.textContent = "Puntos: "+result;
        
    }
  }
  function movimiento(){
    const objetoCoords = imagen.getBoundingClientRect();
    const destinoRect = lago.getBoundingClientRect();
    const distancia = destinoRect.x - objetoCoords.x;
    
    imagen.style.setProperty('--lago', distancia+100 + "px");
  }
  imagen.addEventListener('animationiteration', () => {
        imagenB.style.visibility = 'visible';
        objeto();
        if(verdad == false){
          result -= 2;
          resultado.textContent = "Puntos: "+result;
        }
  });
  movimiento();

function animationEndHandler() {
    const destinoRect = lago.getBoundingClientRect();
    const fondoCoords = elemento.getBoundingClientRect();
    const distancia = destinoRect.x - fondoCoords.x;
    const min = 400;
    const aleatorio = Math.max(min, Math.floor(Math.random() * (distancia-80))) + "px";
    papelera.style.setProperty('--aleatorio', aleatorio);
    papelera.style.animation = 'none';
    papelera.offsetHeight;
    papelera.style.animation = 'mover 2s ease-in-out';
  }
  
  papelera.addEventListener('animationend', animationEndHandler);

boton.addEventListener("click",check);