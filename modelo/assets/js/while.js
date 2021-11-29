//while e do while são usados quando não se sabe quantas vezes irá se repetir por exemplo ate quando uma condicao for verdade

let controle = 0;

while(controle <= 10){
console.log(controle);
controle++;
}
let i = 0;
var nome = 'keven escovedo';

while(i < nome.length){
    console.log(nome[i]);
    i++;
//function 
}
const min = 1;
const max = 50;

function random(min, max) {
    const r = Math.random() * (max - min ) + max;
   return Math.floor(r);
}
let random =  10;
while(rand !== 10) {
rand = random(min,max);
console.log(rand);
}
// o do while significa faça e depois cheque, ou seja ele vai execultar o codigo pelo menos primeira vez
do{
    rand = random(min,max);
    console.log(rand);
}while(rand !== 10);