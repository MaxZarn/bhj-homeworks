"use strict"

const success = document.getElementById('modal_success');
const main = document.getElementById('modal_main');
const close = document.querySelectorAll('div.modal__close');
const show = document.querySelector('.show-success');

let arrClose = Array.from(close);

main.className = 'modal modal_active';

show.onclick = function() {
    main.className = 'modal';
    success.className = 'modal modal_active';
};

arrClose[0].onclick = function() {
    main.className = 'modal';
    
};

arrClose[1].onclick = function() {
    
    success.className = 'modal';
};