let tiempout = 0;
var l = document.getElementById("number");
const intervalId = setInterval(() => {
  tiempout++;
  console.log(`Interval executed ${tiempout} times`);
  l.innerHTML = tiempout;
  if (tiempout === 30) {
    clearInterval(intervalId);
    console.log("Interval stopped"); 
    setInterval("location.reload()",5000);
    document.getElementById("number").innerHTML = "🎉Has Ganado🎉";
    confetti({
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 }
    });
 }
}, 1000);
function encenderApagar() {
    var imagenAbierto = document.getElementById("Abierto1");
    if (imagenAbierto.src.match("/game4/Abierto1.gif")) {
      imagenAbierto.src = "/game4/Cerrado1.png";
     imagenAbierto.style.width= "120px";
     imagenAbierto.style.height= "70px";
    } else {
      imagenAbierto.src = "/game4/Abierto1.gif";
      imagenAbierto.style.width= "130px";
      imagenAbierto.style.height= "130px";
    } 
  }
function encenderApagar1() {
    var imagenAbierto = document.getElementById("Abierto2");
    if (imagenAbierto.src.match("/game4/Abierto2.gif")) {
      imagenAbierto.src = "/game4/Cerrado2.png";
      imagenAbierto.style.width= "120px";
      imagenAbierto.style.height= "70px";
    } else {
      imagenAbierto.src = "/game4/Abierto2.gif";
      imagenAbierto.style.width= "130px";
      imagenAbierto.style.height= "130px";
    }
  }
function encenderApagar2() {
    var imagenAbierto = document.getElementById("Abierto3");
    if (imagenAbierto.src.match("/game4/Abierto3.gif")) {
      imagenAbierto.src = "/game4/Cerrado3.png";
      imagenAbierto.style.width= "120px";
      imagenAbierto.style.height= "70px";
    } else {
      imagenAbierto.src = "/game4/Abierto3.gif";
      imagenAbierto.style.width= "130px";
      imagenAbierto.style.height= "130px";
    }
  }
function encenderApagar3() {
    var imagenAbierto = document.getElementById("/game4/Abierto4");
    if (imagenAbierto.src.match("/game4/Abierto4.gif")) {
      imagenAbierto.src = "Cerrado4.png";
      imagenAbierto.style.width= "120px";
      imagenAbierto.style.height= "70px";
    } else {
      imagenAbierto.src = "/game4/Abierto4.gif";
      imagenAbierto.style.width= "130px";
      imagenAbierto.style.height= "130px";
    }
  }
  function encenderApagar4() {
    var imagenAbierto = document.getElementById("Abierto5");
    if (imagenAbierto.src.match("/game4/Abierto5.gif")) {
      imagenAbierto.src = "/game4/Cerrado5.png";
      imagenAbierto.style.width= "120px";
      imagenAbierto.style.height= "70px";
    } else {
      imagenAbierto.src = "/game4/Abierto5.gif";
      imagenAbierto.style.width= "130px";
      imagenAbierto.style.height= "130px";
    }  
  } 
  const Abierto1 = document.querySelector("#Abierto1");
  const tiempoEspera3 = 1000;
  function cambiarImagen(){
    if (Abierto1.src.match("/game4/Abierto1.gif")){
      Abierto1.src = "/game4/Abierto1.gif";
      Abierto1.style.width= "130px";
      Abierto1.style.height= "130px";
    }else{
      Abierto1.src ="/game4/Abierto1.gif";
      Abierto1.style.width= "130px";
      Abierto1.style.height= "130px";
    }
  }
  setTimeout (()=>{
    Abierto1.style.display ="block";
  },tiempoEspera3);
  setInterval(cambiarImagen,4000);

  const Abierto2 = document.querySelector("#Abierto2");
  const tiempoEspera2 = 2000;
  function cambiarImagen1(){
    if (Abierto2.src.match("/game4/Abierto2.gif")){
      Abierto2.src = "/game4/Abierto2.gif";
      Abierto2.style.width= "130px";
      Abierto2.style.height= "130px";
    }else{
      Abierto2.src ="/game4/Abierto2.gif";
      Abierto2.style.width= "130px";
      Abierto2.style.height= "130px";
    }
  }
  setTimeout (()=>{
    Abierto2.style.display ="block";
  },tiempoEspera2);
  setInterval(cambiarImagen1,7000);

  const Abierto3 = document.querySelector("#Abierto3");
  const tiempoEspera1 = 3000;
  function cambiarImagen2(){
    if (Abierto3.src.match("/game4/Abierto3.gif")){
      Abierto3.src = "/game4/Abierto3.gif";
      Abierto3.style.width= "130px";
      Abierto3.style.height= "130px";
    }else{
      Abierto3.src ="/game4/Abierto3.gif";
      Abierto3.style.width= "130px";
      Abierto3.style.height= "130px";
    }
  }
  setTimeout (()=>{
    Abierto3.style.display ="block";
  },tiempoEspera1);
  setInterval(cambiarImagen2,8000);

  const Abierto4 = document.querySelector("#Abierto4");
  const tiempoEspera = 4000;
  function cambiarImagen3(){
    if (Abierto4.src.match("/game4/Abierto4.gif")){
      Abierto4.src = "/game4/Abierto4.gif";
      Abierto4.style.width= "130px";
      Abierto4.style.height= "130px";
    }else{
      Abierto4.src ="/game4/Abierto4.gif";
      Abierto4.style.width= "130px";
      Abierto4.style.height= "130px";
    }
  }
  setTimeout (()=>{
    Abierto4.style.display ="block";
  },tiempoEspera);
  setInterval(cambiarImagen3,9000);

  const Abierto5 = document.querySelector("#Abierto5");
  const tiempoEspera5 = 5000;
  function cambiarImagen4(){
    if (Abierto5.src.match("/game4/Abierto5.gif")){
      Abierto5.src = "/game4/Abierto5.gif";
      Abierto5.style.width= "130px";
      Abierto5.style.height= "130px";
    }else{
      Abierto5.src ="/game4/Abierto5.gif";
      Abierto5.style.width= "130px";
      Abierto5.style.height= "130px";
    }
  }
  setTimeout (()=>{
    Abierto5.style.display ="block";
  },tiempoEspera5);
  setInterval(cambiarImagen4,8000);