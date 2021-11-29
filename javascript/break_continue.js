//break and continue funcionam no for , for in, for of ,while e do while
//funciona em qualquer laços de repeticao;
//continue pula para proxima interação do laço, ou seja não exuta o que está abaixo do continue;
//break pode poupar recrusos do pc e do servirdor, por exemplo ele apode deixar codigo rapido, imagina vc esta numa lista procurando um elemento e vc so quer, ele então  vc so encontra o número e não precisa procurar, se achar ele para o laço naquele momento
//break interrompe o laço o contuniue pula o a interacao mais continua no laço


const numeros = [1,2,3,4,5,6,7,8,9];
for(let n of numeros) {
  if(n === 2) {
    console.log("Pulei o dois");  
    continue;
  }
  if(n === 5) {
     console.log("Pulei o cinco");
    continue;
  }
  if(n === 7) {
      console.log("sete encontrado, saindo....");
    break;
  }
  console.log(n);
}
