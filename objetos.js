//objeto literal
const pessoa = {
    nome: "Keven",
    sobrenome: "Escovedo",
    idade: 18,
    fala() {
        console.log(`olá eu sou o ${this.nome} e tenho ${this.idade}`);
    }

}
const pessoa2 = {
    nome: "lalalala",
    sobrenome: "eeeeee",
    idade: 18,

}

console.log(pessoa.nome);
//criar um função que cria um objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }

}
const pessoa3 = criaPessoa("Luiz", "Miranda",34);
console.log(pessoa3);