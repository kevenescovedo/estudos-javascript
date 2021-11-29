let string = "Um texto";
console.log(string);
//exibir aspas em uma string;
let stringaspas = "Um \"texto\""; 
//string são indexadas e interavel ou seja você pode pegar cracteres, se indice estiver ele rertornará undefined que aponta para nenhum lugar da memoria
console.log(string[1]);
//para pegar um caracter atraveis da posicao vc pode usar chatAt, ele retorna vazio se nada encontrar
console.log(string.charAt(4));
//função para concatenar string;
console.log(string.concat("bom"," ", "dia")); 
//mas é preferivel ou usando templates strings;
console.log(`${string} é uma boa maneira de concatenar string`)
console.log(string + "eae beleza");
//para retornar um indice de um determinado caractere, se ele não encontra ele retorna -1
console.log(string.indexOf('e'));
//você pode também mandar que o index of procure um indice apartir de um determinado index utilizando
console.log(string.indexOf('t',4));
//lastIndexof começa do final para o começo da string, por exemplo abaixo ele começa por utilmo e por isso apartir do caracter que esta na posicao 4 ele encontra o u
console.log(string.lastIndexOf('U',4));
//retorna tudo o que combina através de uma expressão regular exemplo
//ele irá trazer todas as letras minusuculas da string
//O g significa que match retornará um array~
//tambem temos o search que retorna o indice igual o index of , porém ele aceita expressões regulares
console.log(string.search(/x/g));
console.log(string.match(/[a-z]/g));
//replace utiliza para subistituir um caracter ou uma parte do texto
console.log(string.replace('t','O')); //ou
console.log(string.replace(/Um/,'O'));
//ao aplicar o g em um espressão regular vc quer que o replace é aplicado em todas as letras ou parte que é igual
console.log(string.replace(/t/g,'O'));
//pegar o tamanho de uma string;
console.log(string.length);
//slice traz uma parte de uma string coloca onde começa e onde termina, porém deve acrescentar uma a mais onde termina exemplo
// vai exibir apenas text então para pegar o texto coloque sete
console.log(string.slice(3,6)) ;
console.log(string.slice(3,7)) ;
//traz os dois ultimos lenght -2 // ele vaic começar apartir do legnht -2
console.log(string.slice(-2));
//vc pode usar o substring que faz a mesma coisa que não aceita só o - 1 mas sim string.lenght -1
//console.log(string.substring(string.length -2));
// fatiar um string em partes ou seja transformar ela em um array
//limitar a quantidade vc coloca a qtd depois da da virgula

console.log(string.split('t', ));

console.log(string.split('t', 1 ));






