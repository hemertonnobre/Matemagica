
function typewriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 90 * i);
    });
}

const titulo = document.querySelector('.msg1')
    typewriter(titulo);
