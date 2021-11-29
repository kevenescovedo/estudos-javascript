function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
    return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao());
//
function retornaFuncao2(nome) {
   
    return function () {
   return nome;
    };
}

const funcao2 = retornaFuncao2('keven');
console.log(funcao2());
//