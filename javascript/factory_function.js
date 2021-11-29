//factory function
function criaPessoa(nome,sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        //pode ser um getter
        nomeCompleto(){
          return `${this.nome} ${this.nome}`
        },
        fala(assunto) {
            return `${nome} está falando ${assunto} e tem ${this.peso}`
        },

        get imc() {
            const indice = this.peso/(this.altura ** 2);
            return indice.toFixed(2);
        }, 
        set NomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        }

    }

}

const p1 = criaPessoa('Keven', 'Escovedo', 1.73,70);

console.log(p1.fala("sobre JS"));
console.log(p1.imc);
console.log(p1.NomeCompleto = 'keven escovedo');
console.log(p1.nome);

//constrcutor function

