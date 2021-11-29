//for of pega o valor em si, porém não é usado em onjeto pois ele não é interavel

var nome = 'Keven Escovedo';
for (let valor of nome) {
    console.log(valor);
}
var nomes = ['Keven', 'Angela', 'Anselmo', 'Thiago'];
for (let nome of nomes) {
    console.log(nome);
}
// é um metodo do objeto vetor e recebe como paramaetro o elemento que é obrigatorio e o indice    que é opcional

nomes.forEach(function (el,indice,array) {
    console.log(el,indice,array);
});