function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicializar = () => {
    this.limparDisplay();
    this.escutaBotoes();
    this.display.addEventListener("keyUp", e => {
   if(e.keyCode ==- 13) {
       this.calcularResultado();
   }
    });
    };
   this.limparDisplay = () => {
     this.display.value = '';
    };
   this.adicionaDisplay = (valor) => {
   this.display.value += valor;
   }
   this.calcularResultado = () => {
  
    
    try {
        let value = this.display.value;
          let re = eval(value);
    
        if(!re && re !== 0) {
           
            alert("Calculo Invalído");
            return;
        }
        this.display.value = String(re);
        return;
    }
    catch(ex) {
      alert("Calculo Invalído");
      return;
    }
       
   }
   this.deletar = () => {

       this.display.value = this.display.value.slice(0,-1);
   }
    this.escutaBotoes = () => {
    document.addEventListener("click", e => {
      const el = e.target;
      if(el.classList.contains('btn-num')) {
       let valor = el.innerText;
       this.adicionaDisplay(valor);
      }
      if(el.classList.contains('btn-del')) {
        this.deletar();
       }
       if(el.classList.contains("btn-eq")) {
        this.calcularResultado();
       }

    });
    };
}
const calculadora = new Calculadora();
calculadora.inicializar();