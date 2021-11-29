///se a gente sabe executarr um codgio que pode lançar um erro ou exceção , então utilie o try e cath
// o try significa então ele executa o que ta no bloco try e se acontecer ele vai executar o que está no bloco catch
//finaly sempre é executado;

try {
    console.log(naoexiste);
}
catch(err) {
    console.log();
}
function somarnumeros(x,y) {
    if(typeof x !== 'number' || typeof y !== "number") {
        //throw lança um stringna aplicação
       // throw("x e y precisam ser números");
       //lança um erro
       throw new Error("x e y precisam ser números");
     
    }
    console.log("aaaaaaaaa");
    return x + y;
}
try {
    console.log(somarnumeros("",2));
}
catch(err) {
console.log(err);
}


try {
    console.log(a);
    console.log('Abrir um araquivo');
    console.log("Manipulei o arquivo e gerou erro");

    console.log("fechei o arquivo");
    
}
catch(err) {
console.log('tratando erro');
} finally {
console.log(" Finally eu sempre serei executado");
}

function retornaHora(data) {
if(data && !(data instanceof Date)) {
console.log("Não é");
throw new TypeError("Esperando instância de data");
}
else if(!data) {
data = new Date();

}
return data.toLocaleTimeString('pt-Br', {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
try {
    AuthController.currentUser(context);
}catch(error) {
    console.log(error);
}
finally {
    console.log("tenha um bom dia");
}