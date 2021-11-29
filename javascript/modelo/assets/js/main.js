//pegando a div paragrafos
const paragrafos = document.querySelector(".paragrafos");
//pegar todos os elemento da div o queryselector retorna um nodelist com todos os elementos

const ps = paragrafos.querySelectorAll("p");
//pegar os estilos do css do body computados pelo nav3egador  e para pegar estilos de ume elemento vc usa getComputedStyle e passa o elemento como parametro

const estilosBody = getComputedStyle(document.body);
var backgroundColor =  estilosBody.backgroundColor;


//percorrer uma nodelist
for(let p of ps){

    console.log(p);
    p.style.backgroundColor =  backgroundColor;
    p.style.color = 'white';
}
console.log('qaqq');
console.log(estilosBody.backgroundColor);