//Areas de variables----------------------------------
let botones = document.querySelectorAll(".btn");
let cantidad = document.querySelector('.conatiner__cantidad');
let contador = localStorage.getItem('valorContador');
let btnlimpiar = document.querySelector('.limpiar');
let btnCambiarResult = document.querySelector('.cambiarResult__btn');
let btnIncrementoContador = document.querySelector('.incrementarContador__btn');
let inputCambiarResult = document.querySelector('.input__cambiarResult');
let inputIncrementarContador = document.querySelector('.incrementarContador__input');
let notificacionAlcanzada = document.querySelector('.inputAlcanzada');

//importar elementos-------------------------------------
import { accionarSonido } from "./sonidos.js";
import { notificarYGuardar, checkActivo, notificacionVariables} from "./notificacionAlcanzada.js";

//cambiar cantidad del contador----------------------------
btnCambiarResult.addEventListener('click', ()=>{
    localStorage.removeItem('valorContador');
    contador = inputCambiarResult.value;
    cantidad.innerHTML = contador;
    localStorage.setItem('valorContador', contador);
})

//Accionar los botones de aumento y decremento-------------------------------------- 
botones.forEach(element => {
    element.addEventListener('click' , ()=>{
    if (element.innerHTML === 'Disminuir -')
    {
        contador = Number(cantidad.innerHTML) - Number(inputIncrementarContador.value);
        localStorage.setItem('valorContador', contador);
        cantidad.innerHTML = localStorage.getItem('valorContador');
        accionarSonido(`./sonidos/tambores_5.mp3`);
    }
    else if (element.innerHTML === 'Aumentar +')
    {
        accionarSonido(`./sonidos/acusticos_10.mp3`);
        contador = Number(inputIncrementarContador.value) + Number(cantidad.innerHTML); 
        localStorage.setItem('valorContador', contador); 
        cantidad.innerHTML = localStorage.getItem('valorContador'); 
       ///////////////////
       
       notificarYGuardar(cantidad.innerHTML);

    }
})
});

//limpiar todo-----------------------------------------------
btnlimpiar.addEventListener('click', ()=>{
    localStorage.removeItem('valorContador');    
    cantidad.innerHTML = 0;
    contador = 0;
})


cantidad.innerHTML = localStorage.getItem('valorContador', contador);
document.querySelector('.inputAlcanzada').value=localStorage.getItem('notificacionAlcanzada');

checkActivo()
