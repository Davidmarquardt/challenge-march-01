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
     return true
   } else {
      setTimeout(fastMilliseconds, 1);
  }
}

function fastSeconds() {
    s++
    if (fastMilliseconds()){
        if (s >= 60) {
            return true
        } else {
            setTimeout(fastSeconds, 1000)
            console.log(s);
        }
    }
    else {
        s = 0
    }
}

function fastMinutes() {
    if (fastSeconds()){
        m++
        ms = 0;
        if (m < 60) {
            h++
            return h;
        }
    }
}