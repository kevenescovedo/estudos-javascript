//delcarar função
//só quando eu declaro 
//função dessa maneira ocorre o function
// hosting ele vai elevar as funcoes para o topo ou seja eu posso executar a função antes da declaração dela
falaoi();
function falaoi() {
    console.log("oi");
}
// as funções são objetos de primeira classe
//ou seja você  pode tratar função como dado
const souDado = function () {
 console.log("Sou um dado") ;  
}
souDado();
function executaFuncao(funcao){
 console.log("vou executar essta funcão");
funcao();
}
executaFuncao(souDado);
// arrow function
const funcaoArrow = () => {
    console.log("Sou um Arrow Function");
}
funcaoArrow();
//funcao dentro de um objeto
const obj = {
   // falar: function () {
    //    console.log("Estou falando");
    //pu
    falar() {
        console.log("Estou falando");
    }
    }

obj.falar();
obj['falar']();
//paramtros da funcao
//svc pode passar argumentos para funções sem parametros e o javascript não reclama
//ao usar palavra function ele permite como paramtro um variavel arguments, e vc pode acessa os argumentos passados atravez do index
//arguments não está disponivel em arrow functions

function funcao(arguments) {
var total = 0;
for(let a in arguments) {
    total += arguments[a];

}
console.log(total);
}
//você pode ocultar o arguments
funcao(1,2,3,4,6,7,8,9);
function funcao2(a,b,c) {
var total = 0;
for(let a of arguments) {
    total == a;

}
console.log(total);
}
funcao2(1,2,3,4,6,7,8,9);
//se eu faltar argumentos para parametros os que faltaram vão ficar undefined
function funcao3(a,b) {
b  = b || 2;
console.log(a+b);
}
//maenira mais nova adicionando valor padrão de b
function funcao4(a,b = 2, c = 3) {
   
    console.log(a+b + c);
    }
funcao4(2); 
funcao3(2);
//se você quer pular parametros basta passar undefined  para ele
function funcao5(a,b = 2, c = 3) {
   
    console.log(a+b + c);
    }
funcao4(2,undefined,4); 
//atribuição via destruração com parametros de objetos
function f6({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade);
}
f6({nome: "keven", sobrenome: 'Escovedo', idade: 18})
//atribuição via destruração com parametros de objetos
function f7([valor, valor2, valor3]){
    console.log(valor,valor2, valor3);
}
f7([1,2,4]);
//pegar o resto dos parametros com rest operator
function conta(operador,acumulador, ...numeros) {
   

    console.log(operador, acumulador, numeros);
    for(let n of numeros ) {
       if(acumulador === '+') acumulador += numeros;
       if(acumulador === '-') acumulador += numeros;
       if(acumulador === '*') acumulador *= numeros;
       if(acumulador === '/') acumulador /= numeros;
        console.log(n);
    }
    console.log(acumulador);
}
conta('+',0,1,2,3,4,5,6,7,8,9)

let conta2 = function (operador,acumulador, ...numeros) {
   
   console.log(arguments);
    console.log(operador, acumulador, numeros);
    for(let n of numeros ) {
       if(acumulador === '+') acumulador += numeros;
       if(acumulador === '-') acumulador += numeros;
       if(acumulador === '*') acumulador *= numeros;
       if(acumulador === '/') acumulador /= numeros;
        console.log(n);
    }
    console.log(acumulador);
}
conta2(2,'+',0,1,2,3,4,5,6,7,8,9);

