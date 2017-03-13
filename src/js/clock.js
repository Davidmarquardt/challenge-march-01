export default function Clock() {
    var d  = new Date();
    var hour  = d.getHours();
    var minutes  = d.getMinutes();
    var seconds  = d.getSeconds();
    var ms = d.getMilliseconds();

    setTimeout(secondCounter, 1); 

    function getRemain() {
    ms++; 
    if (ms >= 1000) {
        secondCounter();
        ms = 0;
        } 
    else {
        setTimeout(getRemain, 1);
        }
    }

    function secondCounter() {
        seconds++
        if (seconds >= 60) {
            seconds = 0
            return setMinAndHour();
        } else {
            setTimeout(secondCounter, 1000)
            var text = hour + ':' + minutes + ':' + seconds;
            document.getElementById('watch').innerHTML = text;
        }
    }

    function setMinAndHour() {
        minutes++
            if (minutes >= 60) {
            hour++
            minutes = 0;
            secondCounter();
        }
        else {
            secondCounter();
        }
    }
}