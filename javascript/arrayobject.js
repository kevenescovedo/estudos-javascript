const listaPessoas = Array();
document.querySelector("#formulario").addEventListener('submit', (event) => {
event.preventDefault();    
var nome =  document.querySelector("#nome").value;
var sobrenome = document.querySelector("#sobrenome").value;
var peso =  document.querySelector("#peso").value
var altura =  document.querySelector("#altura").value;
console.log(nome);
listaPessoas.push(criarPessoa(nome,sobrenome,peso,altura));
console.log(listaPessoas);
document.querySelector("#resultado").innerHTML += `<p>nome: ${nome} sobrenome: ${sobrenome} peso: ${peso} altura: ${altura}<p>`;



});
function criarPessoa(nome, sobrenome, peso, altura) {
 return {
     nome: nome,
     sobrenome: sobrenome,
     peso: peso,
     altura: altura,
 };

}
alert("lalala");
