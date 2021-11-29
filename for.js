//estrutura de repetição, executar ações de forma repetida
//esqueleto
//for (){}
//deve ter variavel de controlle
//condição de parada
//incrementar ou decrementar variavel de controle
for (let i = 0; i <= 10; i--) {
console.log(`Linha ${i}`);
}

//ver se o número é par ou não
for(var i = 0; i <= 10; i++ ) {
    var tipo = i % 2 === 0 ? 'É Par' : ' É Impar';
    console.log(i,tipo);

}
//você pode usar o for para percorrer um array
const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; I++ ) {
    console.log(`Indice ${i}`, frutas[i]);
}