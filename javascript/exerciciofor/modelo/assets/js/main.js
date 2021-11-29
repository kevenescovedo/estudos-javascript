var listaelementos = [
    {tag: "p", texto: "Frase 1"},
    {tag: "div", texto: "Frase 2"},
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase 4"},
]


function criarDivPrincipal() {
    var container = document.querySelector(".container");
    var div = document.createElement("div");
    
    
    container.appendChild(div);
    return div;
}
function percorrer() {
    for(var i = 0; i < listaelementos.length; i++) {
    //voce podia fazer atribuicao via destruracao
    //var {tag, texto} = liselementos[i];
    var createlement = document.createElement(listaelementos[i].tag);
    //vc pode usar inner text por que é mais seguro , pois vc sabe que vai ter texto
    //você pode adicionar texto através da criação de um nó de texto;
   // var notexto = document.createTextNode(texto);
   //createlement.appendChild(notexto);
    createlement.innerHTML = listaelementos[i].texto;
    criarDivPrincipal().appendChild(createlement);

    }
}

percorrer();