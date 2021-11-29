function f1(calback) {
    setTimeout(function (){
        console.log('f1');
        if(calback) calback();
    },  rand())
   
}
function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f2(calback) {
    setTimeout(function (){
        console.log('f2');
        if(calback) calback();
    },  rand())
}
function f3(calback) {
    setTimeout(function (){
        console.log('f3');
        if(calback) calback();
    },  rand());
}

f1(function (){
    f2(function (){
        f3(function(){
            console.log('ola mundo');

        });
    });
});

//para melhor isso você poderia fazer isso
function f1calback() {
f2(f2calback)
}
function f2calback() {
    f3(f3calback)
    }
function f3calback() {
console.log("olá mundo");
}
f1(f1calback);
