class Calccontroller {
    constructor() {
      this._displayCalc = '0';
        this._currentDate;
        this.initialize();
            this._displayCalEl = document.querySelector("#display");
        this._dateEl =  document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
    }
    initialize() {
    
  
  let data = new Date();
  this._dateEl.innerHTML = `${data.toLocaleDateString("pt-br")}`;
  console.log(data.getHours);

  this.timeEl.innerHTML = `a`;
    }
    get displayCalc() {
        return this._displayCalEl.innerHTML;
    }
    set displaycalc(displaycalcp) {
        this._displayCalEl.innerHTML = displaycalcp;
    } 
    set currentDate(value) {
        this._currentDate = value;
    }
    get currentDate() {
        return this._currentDate;
    }


} 