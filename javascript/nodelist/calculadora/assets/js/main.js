function criarCalculadora(){
    return {
     display: document.querySelector(".display"),
     btnClear: document.querySelector('.btn-clear'),
     iniciar() {
        alert("oI iniciei");
        this.cliqueBotoes();
        this.clearDisplay();
        this.pressionaEnter();
        
    },
    pressionaEnter() {
        this.display.addEventListener("keyup", e => {
        if(e.keyCode === 13) {
            this.realizaConta();
        }
        });
    },
     realizaConta() {
   let conta =  this.display.value;
   try {
    conta = eval(conta);
    if(!conta && conta !== 0) {
        alert('Conta Inválida');
        return;
    }
    this.display.value = String(conta);
   }catch(e) {
    alert('Conta Inválida');
    return;
   }
     },
       clearDisplay() {
       this.display.value = '';
       },
       
     apagaUm() {
    this.display.value = this.display.value.slice(0, -1);
     },
     cliqueBotoes() {
         document.addEventListener('click', function (event) {
             const el = event.target;

             if(el.classList.contains('btn-num')) {
                 console.log(el.innerText);
              this.btnParaDisplay(el.innerText);
             }
             if(el.classList.contains('btn-clear')) {
                 this.clearDisplay();
             }

             if(el.classList.contains("btn-del")) {
                 this.apagaUm();
             }
             if(el.classList.contains("btn-eq")) {
                 this.realizaConta();
             }

         }.bind(this));
     },
     btnParaDisplay(valor){
    this.display.value += valor;
     }
    
    };
}
const calculadora = criarCalculadora();
calculadora.iniciar();