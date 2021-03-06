export default function Clock(callback) {
    var d  = new Date();
    var hour  = d.getHours();
    var minutes  = d.getMinutes();
    var seconds  = d.getSeconds();
    var ms = d.getMilliseconds();
    let delta = Date.now();

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
        delta = Date.now() - delta;
        console.log('passou', delta);
        if (seconds >= 60) {
            seconds = 0
            return setMinAndHour();
        } else {
            delta = Date.now();
            setTimeout(secondCounter, 1000)
            if (callback) {
                callback(hour, minutes, seconds);
            }
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