//let tem escopo de bloco {....bloco}
// var só tem escopo de função, ou seja se um avariavel for declarada dentro uma função ela não pode ser acessada fora
//mas dentro da função eu posso acesssar as variaveis fora da funcAO

const verdadeira = true;
let nome = "keven";
let nome2 = "keven";
var lala = "123";
if(verdadeira) {
    var lala = "125";
    let nome = "rodrigo";

console.log(nome,nome2);
if(verdadeira) {
    let nome = "qualquer";
    var lala = "777";
    console.log(nome,lala);
}
}
console.log(nome, lala)