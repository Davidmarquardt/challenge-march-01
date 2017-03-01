

var d  = new Date();
var h  = d.getHours();
var m  = d.getMinutes();
var s  = d.getSeconds();
var ms = d.getMilliseconds();

console.log(h + ':' + m + ':' + s);

console.log(fastMilliseconds(ms));

function fastMilliseconds(ms) {
    for (i = ms; i <= 1000; i++){
        setTimeout(fastMS(ms),1);
    }
    return ms;
}

function fastMS(ms){
    ms = ms + 1;
    return ms;
}

let counter = 0;

setTimeout(onFinished, 1); // executa onFinished, 1 ms
 
function onFinished() {
   counter++; // adiciona uma unidade em cada execucao, no caso a gente ta na primeira entao aqui tem 1
   if (counter >= 1000) {
     console.log() // só é executado no milésimo loop
   } else {
      setTimeout(onFinished, 1); //chama a mesma funcao porém após 1ms
  }
}