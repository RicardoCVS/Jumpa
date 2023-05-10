const imagenes = ["Imagen1", "Imagen2", "Imagen3", "Imagen4", "Imagen5", "Imagen6",];
let index = 0;
const numArray = imagenes.length;

const Amarillo = document.getElementById("Amarillo");
const Verde = document.getElementById("Verde");
const Azul = document.getElementById("Azul");
//bucle
imagenes.forEach((nombre,index) => {
    // Aquí se muestra la imagen
console.log(nombre,index);
   // Se agrega un retraso de 1 segundo por cada imagen
  const divImg = document.getElementById("imagen");
  // Crear un nuevo elemento "img"
  let miImagen = document.createElement("img");
  // Establecer el atributo "src" del elemento "img" a la ruta de la imagen que deseas agregar
  miImagen.src = "/game3/imagenes/" + nombre + ".jpg";
  miImagen.classList.add("img-" + (index + 1));
  // Agregar el elemento "img" al final del elemento "miDiv" utilizando la función "appendChild"
  divImg.appendChild(miImagen);
});

imagen.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

Amarillo.addEventListener("dragover", function(event) {
  event.preventDefault();
});
Verde.addEventListener("dragover", function(event) {
  event.preventDefault();
});
Azul.addEventListener("dragover", function(event) {
  event.preventDefault();
});
Amarillo.addEventListener("drop", function(event) {
  const Imagen = document.querySelectorAll("img");
  const Amarillo = Imagen[3].parentElement;
console.log(Amarillo);
  const esCorrecto = event.target.getAttribute("data-correct") === "true";
  if(esCorrecto && !Imagen[3].parentElement) { // Verifica si la imagen es válida y no tiene un padre antes de agregarla
    Amarillo.appendChild(Imagen[3]);
  } if (Imagen[3].parentElement === Amarillo) { // si la imagen está en el contenedor
    Amarillo.classList.add("correcto"); // Agrega una clase al contened
    Amarillo.removeChild(Imagen[3]); 
  }
 });

Verde.addEventListener("drop", function(event) {
  const Imagen = document.querySelectorAll("img");
  const Verde = Imagen[1,2].parentElement;
  const esCorrecto = event.target.getAttribute("data-correct") === "true";
  if (esCorrecto && !Imagen[1].parentElement) { // Verifica si la imagen es válida y no tiene un padre antes de agregarla
    Verde.appendChild(Imagen[1]);
    console.log(Verde);
  }if (Imagen[1].parentElement === Verde) { // si la imagen está en el contenedor
    Verde.classList.add("correcto"); // Agrega una clase al contened
    Verde.removeChild(Imagen[1]); 
  }
});
Azul.addEventListener("drop", function(event) {
  const Imagen = document.querySelectorAll("img");
  const Azul = Imagen[0].parentElement;
  const esCorrecto = event.target.getAttribute("data-correct") === "true";
  if (esCorrecto && !Imagen[0].parentElement) { // Verifica si la imagen es válida y no tiene un padre antes de agregarla
    Azul.appendChild(Imagen[0]);
    console.log(Azul);
  } if (Imagen[0].parentElement === Azul) { // si la imagen está en el contenedor
    Azul.classList.add("correcto"); // Agrega una clase al contened
    Azul.removeChild(Imagen[0]);
  }
 });
 let imagenesSoltadas = 0;
 Contenedores.addEventListener('drop', (event) => {
  event.preventDefault();
  // Incrementar el contador de imágenes soltadas
  imagenesSoltadas++;
  // Si todas las imágenes han sido soltadas en sus respectivos contenedores, lanzar confetti
  if (imagenesSoltadas === numArray) {
    confetti({
      particleCount: 300,
      spread: 70,
      origin: { y: 0.6 }
    });
    clearInterval(intervalId);
    setInterval("location.reload()",5000);
    document.getElementById("number").innerHTML = "🎉Has Ganado🎉";
  }
 });
let counter = 30;
var l = document.getElementById("number");
const intervalId = setInterval(() => {
 counter--;
 console.log(`Interval executed ${counter} times`);
 l.innerHTML = counter;
if (counter === 0) {
  clearInterval(intervalId);
   setInterval("location.reload()",5000);
   console.log("Interval stopped");
}}, 1000);

