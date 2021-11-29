function retornaHora() {
    var data = new Date();
    return data.toLocaleTimeString("pt-BR",  {hour12: false});
}
console.log(retornaHora());
function mostraHora() {
    console.log(retornaHora());
}
//setInterval(mostraHora, 1000);
//executa uma ação em um intervalo
setInterval(function () {
    console.log(retornaHora());
}, 1000);


const timer = setInterval(function () {
    console.log(retornaHora());
}, 1000);
//executa uma ação depois de um periodo de esepra
setTimeout(function () {
 clearInterval(timer) ;
},5000);