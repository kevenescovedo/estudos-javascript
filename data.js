const data =  new Date();
data.toLocaleDateString("pt-BR",{year: 'numeric'})
//data em string em formatostring
console.log(data.toString());
//correspondem o numero de milisegundos que decorreram de 1/1/1970 o marco inicio da marca inux
//marco 0
const datainicio =  new Date(0);
//evento inferior ao marco 0

const datadepoisinicio =  new Date(-1);
// 3 horas quantos milesimos de segundo tem tres horas
const trehoras = 60*60*3*100;
//um dia, quantos milesimos de segundo tem um fis
const umdia = 60*60*24*1000;
const newdata = new Date(0 + trehoras + umdia);
//criando uma data normalmente
const datanormal = new Date(2019,3,20,15,14,27,500);
console.log(datanormal.toString());
//você pode mandar a nota em string
const stringdata = new Date('2019-04-20 20:20:59');
console.log(stringdata.toString());

console.log(stringdata.getTime());
//pegar o número do dia
console.log("número do dia", data.getDate());
//pegar numero do mes
console.log("número do mês", data.getMonth());
//pegar numero do ano
console.log("número do ano", data.getFullYear());
//pegar numero da hora
console.log("número da hora", data.getHours());
//minutos
console.log("número de minutos", data.getMinutes());
//segundo 
console.log("número do segundo", data.getSeconds());
//milesimos de segundo
console.log("número de milisegundos", data.getMilliseconds());
//numero do dia da semana
console.log("número do dia da semana", data.getDay());
//obter os milesimos de segundo da data atual
console.log("milesimos de segundo de data", Date.now());
function datatoFormatBrazil () {
   var  data = new Date();
    var dia = zeroaesquerda(data.getDate());
   var mes = zeroaesquerda( data.getMonth());
    ano =  zeroaesquerda(data.getFullYear());
    var hora = zeroaesquerda(data.getHours());
    var minuto = zeroaesquerda( data.getMinutes());
    var segundo = zeroaesquerda(data.getSeconds());
    var milisegundo = zeroaesquerda(data.getMilliseconds());


    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}:${milisegundo}`;
}
function zeroaesquerda(num) {
    return num >= 10 ?  num : `0${num}`;
}
// funcao
console.log(datatoFormatBrazil());
let dataoptions = new Date();
var options = {
    dateStyle:'full',
    timeStyle: "short"
};
console.log(dataoptions.toLocaleDateString("pt-BR", options));






