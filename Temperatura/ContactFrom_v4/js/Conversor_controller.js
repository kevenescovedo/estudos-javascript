class Conversor {
    constructor() {
    this._input_temp = document.querySelector("#temp");
    this._de_unidade = document.querySelector("#de");

     
     
    }
    set input_temp(value) {
        this._input_temp.value = value;
    }
    get input_temp() {
        return  this._input_temp.value;
    }
    set de_unidade(value) {
        this._de_unidade.options[this._de_unidade.selectedIndex].value = value;
    }
    get de_unidade() {
        return   this._de_unidade.options[this._de_unidade.selectedIndex].value;
    }
  
}