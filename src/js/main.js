import Clock from "./clock.js";
require('../index.html');
require('../css/main.scss');
Clock((hour, minute, second) => {
    document.getElementById('watch').innerHTML = (hour + ':' + minute + ':' + second)
});
