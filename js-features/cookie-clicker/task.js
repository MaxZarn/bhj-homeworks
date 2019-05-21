"use strict"

const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');


cookie.onclick = function() {
    clickerCounter.textContent = + clickerCounter.textContent + 1;
    if (clickerCounter.textContent % 2 === 1) {
        cookie.width = 250;
    } else if (clickerCounter.textContent % 2 === 0) {
        cookie.width = 200;
    }
};

