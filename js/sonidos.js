let modoSonido = document.querySelector('.modo__sonido');
let sonido;


export function accionarSonido(colocarSonido){

    if (modoSonido.innerHTML=='Activado') //si esta activado se acciona un sonido
    {
        sonido = new Audio(colocarSonido);//se llama a el constructor de audio con el sonido
        sonido.play();//se reproduce
        
        }                                                   

}
