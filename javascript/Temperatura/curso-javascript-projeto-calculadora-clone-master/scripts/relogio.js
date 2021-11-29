class Animal {
    constructor(tipo,cor,) {
       this. _tipo  = tipo;
       this._cor = cor;
       
       
    }
    static blablau() {

    }
    get tipo() {
        return this._tipo;
        
    }
    get cor() {
        return this._cor;
    }
    set cor(cor) {
        this._cor = cor;
        
    }
    set tipo(tipo) {
        this._tipo = tipo;
        if (tipo == "gato") {
            console.log("miau") 
        }
        if (tipo == "passaro") {
            console.log("piupiu") 
        }
    }
    fazer_barulho() {
        console.log(`${this._tipo} fez barulho`)
    }
}

   let cachorro = new Animal("cachorro","caramelo");
   cachorro.fazer_barulho();
   console.log(cachorro.tipo);
   cachorro.tipo = "gato";
   let data = new Date();
  console.log(data.toLocaleDateString("pt-br"));
  let dataantiga = new Date(2020,12,09);
  console.log(dataantiga.getTime());
  console.log(Math.sqrt(4));

  
  
