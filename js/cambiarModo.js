
function cambiarDeModo(){


let opcionesModo = document.querySelectorAll(".mode_li");

//Aqui se llama al root del css para poder modificarlo
let cssRoot = document.querySelector(':root');

   opcionesModo.forEach(element => {
    element.addEventListener('click', ()=>{
        //Si se le da click en el algun modo, se cambiara los estilos directamente del :root

        if (element.classList[1]==="mode__dark") {
            
        //con los metodos style.setProperty se pueden acceder a las propiedades del :root para modificarlas
            cssRoot.style.setProperty('--color-principal', 'rgb(70, 0, 0)'); 
            cssRoot.style.setProperty('--color-secundario', 'rgb(26, 0, 0)'); 
            cssRoot.style.setProperty('--color-contraste', 'rgb(36, 36, 36)'); 
            cssRoot.style.setProperty('--color-oscuro', 'rgb(8, 8, 8)'); 
            cssRoot.style.setProperty('--color-claro', 'rgb(218, 218, 218)'); 
            cssRoot.style.setProperty('--color-transparente-oscuro', 'rgba(0, 0, 0, 0.2)');         
            cssRoot.style.setProperty('--color-transparente-claro', 'rgba(161, 161, 161, 0.2)');
            cssRoot.style.setProperty('--letras-style', '"Bungee Spice", cursive');
            console.log('se activa modo dark')   
        
        }else if (element.classList[1]==="mode__elegant") { 

            cssRoot.style.setProperty('--color-principal', 'rgb(248, 0, 0)'); 
            cssRoot.style.setProperty('--color-secundario', 'rgb(255, 255, 255)'); 
            cssRoot.style.setProperty('--color-contraste', 'rgb(255, 238, 0)'); 
            cssRoot.style.setProperty('--color-oscuro', 'rgb(8, 8, 8)'); 
            cssRoot.style.setProperty('--color-claro', 'rgb(54, 54, 54)'); 
            cssRoot.style.setProperty('--color-transparente-oscuro', 'rgba(0, 0, 0, 0.514)');         
            cssRoot.style.setProperty('--color-transparente-claro', 'rgb(97, 97, 97)'); 
            cssRoot.style.setProperty('--color-letra', 'rgb(46, 13, 13)');
            cssRoot.style.setProperty('--letras-style', '"Luckiest Guy", cursive');
            console.log('se activa modo elegante');

        }
        else if (element.classList[1]==="mode__office") {
            
            cssRoot.style.setProperty('--color-principal', 'rgb(187, 163, 82)'); 
            cssRoot.style.setProperty('--color-secundario', 'rgb(119, 111, 1)'); 
            cssRoot.style.setProperty('--color-contraste', 'rgb(0, 0, 0)'); 
            cssRoot.style.setProperty('--color-oscuro', 'rgb(255, 255, 255)'); 
            cssRoot.style.setProperty('--color-claro', 'rgb(255, 0, 0)'); 
            cssRoot.style.setProperty('--color-transparente-oscuro', 'rgba(0, 0, 0, 0.514)');         
            cssRoot.style.setProperty('--color-transparente-claro', 'rgb(155, 2, 2)'); 
            cssRoot.style.setProperty('--color-letra', 'rgb(163, 158, 140)');
            cssRoot.style.setProperty('--letras-style', '"Akaya Kanadaka",cursive');
            console.log('se activa modo office'); 

        }
        else if (element.classList[1]==="mode__night") {

            cssRoot.style.setProperty('--color-principal', 'rgb(0, 0, 0)'); 
            cssRoot.style.setProperty('--color-secundario', 'rgb(0, 0, 0)'); 
            cssRoot.style.setProperty('--color-contraste', 'rgb(29, 29, 29)'); 
            cssRoot.style.setProperty('--color-oscuro', 'rgb(255, 0, 0)'); 
            cssRoot.style.setProperty('--color-claro', 'rgb(255, 0, 0)'); 
            cssRoot.style.setProperty('--color-transparente-oscuro', 'rgba(0, 0, 0, 0.514)');         
            cssRoot.style.setProperty('--color-transparente-claro', 'rgb(155, 2, 2)'); 
            cssRoot.style.setProperty('--color-letra', 'rgb(124, 124, 124)');
            cssRoot.style.setProperty('--letras-style', '"Rubik Dirt", cursive');
            console.log('se activa modo noche');

        }
        else if (element.classList[1]==="mode__rosa") {
       
            cssRoot.style.setProperty('--color-principal', 'rgb(255, 143, 236)'); 
            cssRoot.style.setProperty('--color-secundario', 'rgb(253, 251, 113)'); 
            cssRoot.style.setProperty('--color-contraste', 'rgb(255, 187, 0)'); 
            cssRoot.style.setProperty('--color-oscuro', 'rgb(255, 0, 191)'); 
            cssRoot.style.setProperty('--color-claro', 'rgb(234, 0, 255)'); 
            cssRoot.style.setProperty('--color-transparente-oscuro', 'rgba(0, 0, 0, 0.514)');         
            cssRoot.style.setProperty('--color-transparente-claro', 'rgb(155, 2, 2)'); 
            cssRoot.style.setProperty('--color-letra', 'rgb(255, 0, 212)');
            cssRoot.style.setProperty('--letras-style', '"Courgette", cursive');
            console.log('se activa modo rosa')            
        }
    })
})
}

cambiarDeModo()
