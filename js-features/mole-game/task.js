"use strict"

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const mole = document.getElementsByClassName('hole_has-mole');
const hole = document.getElementsByClassName('hole');

for (let i = 0; i < hole.length; i++) {
    hole[i].onclick = function() {
        if (hole[i].className.includes( 'hole_has-mole' ) === true) {
           dead.textContent = +dead.textContent + 1;
        } else {
          lost.textContent = +lost.textContent + 1;
        }
    };
};