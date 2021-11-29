const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
function criarLi() {
const li = document.createElement("li");
return li;
}
function criaTarefa(tarefa) {
const li = criarLi();
li.innerText = tarefas;
tarefas.append(li);
limpaInput();
criarBotaoApagar(li);
salvarTarefas();
}
function criarBotaoApagar(li) {
    li.innerText += ' ';
const btApagar = document.createElement("button");
btnApagar.innerText = 'Apagar';
btnApagar.setAttribute("class", 'apagar');
btnApagar.setAttribute("title", 'apagar esta tarefa');

li.appendChild(btnApagar);

}
inputTarefa.addEventListener('keypress', function (event){
if(event.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
}
});
btnTarefas.addEventListener("click", function (event) {
    if(!inputTarefa.value) return;
     criaTarefa(inputTarefa.value);
});
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
document.addEventListener("click", function (event){
 const el = event.target;
 if(el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
 }

});
function salvarTarefas() {
    const lis = tarefas.querySelectorAll("li");
    var listaDeTarefas = [];
    for(let tarefa of lis) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", '').trim();
       listaDeTarefas.push(tarefaTexto);
       //converter de json ou seja pra string;
       
 

    }
 const tarefasJson = JSON.stringify(listaDeTarefas);
 localStorage.setItem("tarefas", tarefasJson);
}
function adicionaTarefasSlvas() {
  const tarefas = localStorage.getItem('tarefas'); 
  const listaDeTarefas = JSON.parse(tarefas);
  for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
  }
}  
adicionaTarefasSlvas();