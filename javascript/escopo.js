//escopo léxico
// afunção lembra do seus visinhos do momento que ela foi declarada, ou seja ela lembra do local que ela foi declarada


const nome = "Keven escovedo";
function falaNome() {
    const nome = "Escovedo";
    console.log(nome);
}
function usafalaNome(){
    const nome = 'Rodrigo';
    falaNome();
}
usafalaNome();
