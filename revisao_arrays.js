const nomes = ["keven", "angela", "thiago", "anselmo", "larissa", 'dffdfff'];
nomes[6] = "qualquer nomw";
console.log(nomes);
//deplete o valor sem alterar indice e fica no vazio emty item
delete nomes[6];
console.log(nomes);
//outra forma 
const nomes2 = new Array("keven", "escovedo");
console.log(nomes2);
//array valores passados por referência
const novo = nomes2;
//apaegar valor e ultimo indice
novo.pop();
console.log(nomes2);
//copiar valores de um array
const outro = [...nomes2];
outro.push("aaaa");
console.log(outro);
console.log(nomes2);
//ver o tamanho de um array
console.log(nomes2.length);
//remove o ultimo valor
const remov = outro.pop();
console.log(remov);
//remove o primeiro valor
const remov2 = outro.shift();
console.log(remov2);
//adicionar no final do array
outro.push("lalal");
console.log(outro);
//adicionar no começo
outro.unshift("outro nome");
console.log(outro);
//fatiar um array
const testeslice = nomes.slice(1,5);
console.log(testeslice);
//converter para o string e array
const nome = "Keven Rodrigo dos Santos Escovedo";
const nomeArray =  nome.split( " ");
console.log(nomeArray);
//array para string
const nome2 = nomeArray.join(" ");
console.log(nome2);
