
let menssagens = ['pense em um Número','Some a esse Número:','Multiplique o resultado por:','Agora some:','Divida tudo por:','Subtraia o número que voçê pensou','O resultado é:']
const botao = document.querySelector('.button');
//let iniciar = document.querySelector('.button');
//iniciar.addEventListener('click',typewriter(menssagens[0]))
function iniciar(){

    typewriter(menssagens[0]);
    
    botao.innerHTML = 'ok'
    botao.setAttribute("onclick","passo1();");
}
function passo1(){
    let soma1 = numero();
    typewriter(menssagens[1]+soma1);
    console.log(soma1);
    botao.setAttribute("onclick","passo2("+soma1+");");
}
function passo2(soma1) {
    typewriter(menssagens[2]+'2');
    let mult = soma1*2;
    botao.setAttribute("onclick","passo3("+mult+");");

}
function passo3(mult) {
    console.log(mult);
    let soma2 = numero();
    typewriter(menssagens[3]+soma2);
    let multsoma = mult + soma2; 
    botao.setAttribute("onclick","passo4("+multsoma+");");
}
function passo4(multsoma) {
    console.log(multsoma);
    typewriter(menssagens[4]+'2');
    let divide = multsoma/2;
    botao.setAttribute("onclick","passo5("+divide+");");

}
function passo5(divide){
    typewriter(menssagens[5]);
    botao.setAttribute("onclick","passo6("+divide+");");
}
function passo6(resultado){
    console.log(resultado);
    typewriter(menssagens[6]+resultado);
    botao.setAttribute("onclick","passo1();");
    botao.innerHTML = 'retornar'
}
function typewriter(menssagen){
    const texto = document.querySelector('.msg1');
    texto.innerHTML = '';
     for (let i = 0; i < menssagen.length; i++) {

        setTimeout(function() {
            texto.innerHTML += menssagen[i];
        }, 90 * i);
        
     }

     
}
function numero(){
    return Math.floor(Math.random()*10)+ 1;
}


/*function typewriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        },);
    });
}

const titulo = document.querySelector('.msg1')
    typewriter(titulo);
*/