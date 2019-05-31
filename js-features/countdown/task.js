"use strict"

const setTimer = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent > 0) {
        timer.textContent = timer.textContent - 1;
    } else {
        alert('Вы победили в конкурсе!');
        clearInterval();
    }
};


setInterval(setTimer, 1000);

