const pessoa = {
    nome : "Keven",
    sobrenome : "Escovedo",
    idade : 30,
    endereco : {
        rua : 'Av Brasil',
        numero : 320,
    }
}
//atribuição via destruturação e como estou usando uma variavel com mesmo nome da chave , basta eu usar so isso

//const { nome } = pessoa;
//console.log(nome);
//vc pode atribuir um valor padroão caso a variavel não exita exemplo
const { nome = 'kkkk', sexo = "masculino" } = pessoa;
console.log(nome, sexo);
//caso você não quiera uma variavel como mesmo nome da cchave basta colocar cahve: nome variavel
var {nome: nomeloco = ''} = pessoa;
console.log(nomeloco);
//pegar valores de um onjeto dentro de um objeto utilize o nome da chave: {e o nome da cahve dentro do endereco}
var {endereco: {rua, numero}} = pessoa;
console.log(rua);
//destrurando o endereco e pegando o endereco completo
var {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, endereco);
//também posso passar um valor padrao caso ela não exista ser passado
var {endereco: {rua : r = '', numero}, endereco} = pessoa;
console.log(rua, endereco);
// também posso pegar as proprieades restantes com operador rest
var {nome: nome2, ...resto} = pessoa;
console.log(nome2,resto);