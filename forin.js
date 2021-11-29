frutas = ['Pera', 'Maçã', 'Uva'];
//For -> ler as cahves ou idnices de um onjeto como array
// o i e o indice ou chave ou seja você não precisa de colocar uma condição de parada pois ele vai ler até o final


for (let i in frutas) {
    console.log(i);
    console.log(frutas[i]);
}
const pessoa = {
    nome: "Keven",
    sobrenome: "Rodrigo"
};
for(let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}
//outra maneira de acessar uma propridade ou valor de uma chave de um onjeto
console.log(pessoa['nome'])