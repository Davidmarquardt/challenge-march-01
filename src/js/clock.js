var d  = new Date();
var h  = d.getHours();
var m  = d.getMinutes();
var s  = d.getSeconds();
var ms = d.getMilliseconds();

console.log(h + ':' + m + ':' + s);


setTimeout(fastSeconds, 1); 

function fastMilliseconds() {
   ms++; 
   if (ms >= 1000) {
     fastSeconds();
     ms = 0;
   } else {
      setTimeout(fastMilliseconds, 1);
  }
}

function fastSeconds() {
    s++
    if (s >= 60) {
        fastMinutes();
        s = 0
    } else {
        setTimeout(fastSeconds, 1000)
        console.log(s);
    }
}

function fastMinutes() {
    m++
    if (m >= 60) {
        h++
    }
    else {
        fastSeconds();
    }
}