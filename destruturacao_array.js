let a = 'A';
let b = 'B';
let c = 'C';
[a,b, c] = [c,b,a];
console.log(a,b,c);
const numeros = [1,2,3,4,5,6,7];
//se vc colocar o ...e o nome da variavel que no exblo abaizo é resto vpcê pega os valores restantes que no caso 4 5 6 7
var [k,l,m, ...resto] = numeros;
//se vc quiser pular utilize um esáço em branco
var [k, , , e, , r] = numeros;
console.log(k,l,m,resto);
