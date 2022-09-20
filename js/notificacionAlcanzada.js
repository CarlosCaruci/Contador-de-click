
//Function para notificar que a llegado al limite puesto y guardar en el local storage
export function notificarYGuardar(cantidadParaAlcanzar){

let checboxNotificacion = document.querySelector('#checboxNotificacion');

if (!checboxNotificacion.checked) {
    
    let inputAlcanzado = document.querySelector('.inputAlcanzada');
    localStorage.setItem('notificacionAlcanzada', inputAlcanzado.value);
    
    if (Number(cantidadParaAlcanzar) >= Number(inputAlcanzado.value)){alert(`Haz alcanzado el limite de ${inputAlcanzado.value}`);}
} 
}

//Function para activar y desactivar esteticamente las notificaciones 
export function checkActivo(){

let checboxNotificacion = document.querySelector('#checboxNotificacion');
checboxNotificacion.addEventListener('click', ()=>{
    if (checboxNotificacion.checked) {
        document.querySelector('.notificacionAlcanzada__title').classList.add('notificacionAlcanzada__titleActivada');
        document.querySelector('.inputAlcanzada').classList.add('inputAlcanzadaActivada');        
    } else if (!checboxNotificacion.checked) {

        document.querySelector('.notificacionAlcanzada__title').classList.remove('notificacionAlcanzada__titleActivada');
        document.querySelector('.inputAlcanzada').classList.remove('inputAlcanzadaActivada');        
}
})
}

//function de las variables que se usas(no me funciono)
export function notificacionVariables(){
    let checboxNotificacion = document.querySelector('#checboxNotificacion');
    let notificacionTitulo = document.querySelector('.notificacionAlcanzada__title');
    let inputAlcanzado = document.querySelector('.inputAlcanzada');
}

notificacionVariables()