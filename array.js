let frutas = ["maçâs", "banana","morango","uva","laranja"];
frutas.forEach((value, index) => {
    console.log(index,value);
})
//um array é uma lista e coleção de coisas
const nomes = ["keven", "Angela","Anselmo","Thiago"];
//você pode inserir elementos em um array
console.log(nomes);
nomes[0] = "outro nome";


console.log(nomes);
//inserir no final de um array com .push ou 
//adicionar no fim
nomes[nomes.length] = "aaaaaaa";
nomes.push("eeeee");


console.log(nomes);
//adicionar no indice zero e jogar os outros pra frente
nomes.unshift("kkkkkkk");
//remove o ultimo item da lista e retorna o item removido
var itemremovido = nomes.pop();
var itemremovidocomeco = nomes.shift();
console.log(itemremovido);
console.log(itemremovidocomeco);

console.log(nomes);
//see eu quero remover um valor mas permanecer o indice eu faço isso ficando no lugar console.log(nomes);
delete nomes[2]; 
console.log(nomes);
//voce pode fatiar um array usando o slice ou seje pegar de um index até outro
console.log(nomes.slice(0,2));
//se vc colocar o numero negativo ele vai vai subistrair o lenght desse array menos o númwero
console.log(nomes.slice(0,-2));
//um array é objeto do javascript
console.log(typeof nomes);
console.log(typeof itemremovido);
//verificar se algo é um array
console.log(nomes instanceof Array);


