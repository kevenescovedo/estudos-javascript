//funcao construtora => constroi objetos
//funcao fabrica -> fabrica objetos
//Construtora -> Pessoa

function Pessoa(nome, sobrenome) {
    //atributos e metodos privados
    const id =  'qwwr23r2t23t';
    const metodoInterno = () => {
        console.log("eu sou um metodo interno");
    };
    //atributos ou metodos publicos 
this.nome = nome;
this.sobrenome = sobrenome;
this.metodo = () => {

    console.log(this.nome + " ; Sou um metodo");
}
}
const p1 = new Pessoa('Keven', 'Escovedo');
console.log(p1.nome);
p1.metodo();
