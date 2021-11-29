//return -retorna um valor
function somar(a,b) {
    return a + b;
}
console.log(somar(2,4));
function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

console.log(typeof criarPessoa("Keven",'Escovedo'));
function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}
const olaMundo = falaFrase("Olá");
console.log(olaMundo("Mundo!"));

//funcao que duplica o valor
function criarmultiplicac(multiplicador) {
return function multiplicarcao(n){
    return n * multiplicador;
}
}

var x = criarmultiplicac(4);
var y = x
console.log(y);

