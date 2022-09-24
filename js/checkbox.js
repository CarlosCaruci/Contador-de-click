//variables
let modoSonidos = document.querySelector('.modo__sonido');
let TituloSonidos = document.querySelector('.sonido__titulo');
export let check = document.querySelector('.check');// se llama el input checkbox del html

//function para ejecutar el chekcbox
export function checkedActivate(){

//al hacer click cambia el estado del checkbox 
check.addEventListener('click', ()=>{

    if (check.checked===true)
    {
        modoSonidos.innerHTML='Desactivado'
        modoSonidos.classList.add('desactivado');
        TituloSonidos.classList.add('desactivado');
    }
     else if(check.checked===false)
    { 
        modoSonidos.innerHTML='Activado'
        modoSonidos.classList.remove('desactivado');
        TituloSonidos.classList.remove('desactivado');     
    }
})
}

checkedActivate()