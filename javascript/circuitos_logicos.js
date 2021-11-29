//retorna o valor falso ou seja irá printar o 0
console.log("Keven" && 0 && "Maria");
// e se todas fosscem vardeiras ele ira retornar a ultima
// true && false -> retorn o 'valor falso'
//true && "joazinho" retorna o valor verdadeiro nesse caso joazinho'
//ou retorna o primeiro valor verdadeiro encontrado
//

console.log("Keven" && true && "Maria");
//valores que avaliam em falso
//false
//0
//"" '' ``
//null
//undefined
//NAN
function falaoi(){
    return oi;
}
vaiexecutar = false;
//se vai executar for true ele irá executar a ultima instrução que no caso é falaoi e se não ele retorna false, que é o caso

console.log(vaiexecutar && falaoi());
corusuario = null;
corpadrao = 'red' ;
//se usuario escolher cor ou seja corusuario naõ tiver um valor considerado falso , o valor retorndo é o verdadeiro preto
corpadrao = corusuario || 'preto';