//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 35;
let timepoRegresivoId = null;
timerInicial = timer;
let srcValue1 = "";
let srcValue2 = "";

//audios
let winAudio= new Audio('/game1/sounds/win.mp3');
let loseAudio= new Audio('/game1/sounds/lose.mp3');
let clickAudio= new Audio('/game1/sounds/click.wav');
let rightAudio= new Audio('/game1/sounds/right.mp3');

//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{
    return Math.random()-0.5
});

//funciones
function contarTiempo() {
    timepoRegresivoId = setInterval(()=>{
        timer --;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(timepoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    },1000);
}

function bloquearTarjetas() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = `<img src="/game1/images/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
        
    }
}


//funcion principal
function destapar(id) {
    
    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }


    tarjetasDestapadas ++;
        if(tarjetasDestapadas == 1){
        //Mostrar el primer numero
        tarjeta1=document.getElementById(id);
        primerResultado=numeros[id];
        tarjeta1.innerHTML = `<img src="/game1/images/${primerResultado}.png" alt="">`;
        clickAudio.play();
        result1=document.getElementById(id);
        var imagen1 = result1.querySelector('img');
        srcValue1 = imagen1.getAttribute("src");
        //deshabilitar primer boton
        tarjeta1.disabled = true;
        }else if(tarjetasDestapadas == 2){
            //mostrar segundo numero
            tarjeta2=document.getElementById(id);
            segundoResultado = numeros[id];
            tarjeta2.innerHTML = `<img src="/game1/images/${segundoResultado}.png" alt="">`;
            clickAudio.play();
            //deshabilitar el segundo boton
            tarjeta2.disabled=true;

            //incrementar movimientos
            movimientos++;
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

           
            
            result2=document.getElementById(id);
            var imagen2 = result2.querySelector('img');
            srcValue2 = imagen2.getAttribute("src");
           
            console.log(srcValue1);
            console.log(srcValue2);
            if(check(srcValue1, srcValue2)) {
                //Encerar el contador de tarjetas destapadas
                tarjetasDestapadas = 0;

                //Aumentar Aciertos
                aciertos++;
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                rightAudio.play();

                if (aciertos == 8) {
                    winAudio.play();
                    clearInterval(timepoRegresivoId);
                    mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😁`;
                    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😱`;
                    mostrarTiempo.innerHTML = `Fantastico!🎉 sólo has tardado ${timerInicial - timer} segundos`
                    
                }
            }else{
                    //mostrar momentaneamente valores y sino volver a tapar
                    setTimeout(()=>{
                        tarjeta1.innerHTML = ' ';
                        tarjeta2.innerHTML = ' ';
                        tarjeta1.disabled = false;
                        tarjeta2.disabled = false;
                        tarjetasDestapadas = 0;
                    },800);
                }


            }

            function check(value1, value2){
                
                if((value1 == "/game1/images/1.png" && value2 == "/game1/images/5.png") ||
                (value2 == "/game1/images/1.png" && value1 == "/game1/images/5.png")){
                    return true;
                }
                else if((value1 == "/game1/images/2.png" && value2 == "/game1/images/4.png") ||
                (value2 == "/game1/images/2.png" && value1 == "/game1/images/4.png")){
                    return true;
                }
                else if((value1 == "/game1/images/3.png" && value2 == "/game1/images/8.png") ||
                (value2 == "/game1/images/3.png" && value1 == "/game1/images/8.png")){
                    return true;
                }
                else if((value1 == "/game1/images/6.png" && value2 == "/game1/images/7.png") ||
                (value2 == "/game1/images/6.png" && value1 == "/game1/images/7.png")){
                    return true;
                }
                else{
                    return false;
                }
            }

        }
    


