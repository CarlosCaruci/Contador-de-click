
function cambiarDeModo(){


let opcionesModo = document.querySelectorAll(".mode_li");

   opcionesModo.forEach(element => {
    element.addEventListener('click', ()=>{console.log(element)})
})
}

cambiarDeModo()