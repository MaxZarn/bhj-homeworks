"use strict"

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const mole = document.getElementById('hole_has-mole');
//const hole = document.getElementsByClassName('hole');


function getHole(index) {
    return document.getElementById(`hole${index}`)
};

const hole = getHole(index);

for (let i = 0; i < 9; i++) {
    emptyHole = hole[i];
    emptyHole.onclick = function() {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent = + dead.textContent + 1;
        } else {
            lost.textContent = + lost.textContent + 1;
        }
    }
}

/*
hole.onclick = function() {
    if (hole.className.includes( 'hole_has-mole' )) {
        dead.textContent = + dead.textContent + 1;
    } else {
        lost.textContent = + lost.textContent + 1;
    }
}*/

mole.onclick = function() {
        dead.textContent = +dead.textContent + 1;
    
        lost.textContent = +lost.textContent + 1;
    
}