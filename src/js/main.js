import Clock from "./clock.js";
require('../index.html');
require('../css/main.scss');
Clock((hour, minute, second) => {
    if (second < 10) {
        second = '0'.concat(second); 
    }
    if (minute < 10) {
        minute = '0'.concat(minute);
    }
    
    document.getElementById('watch').innerHTML = (hour + ':' + minute + ':' + second); 
});
