"use strict"

const reveal = document.querySelectorAll('div.reveal');


let isInViewPort = function(element) {
    const viewPortHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
   
    return elementTop < viewPortHeight ? true : false;
};

window.onscroll = function() {
    for (const elems of reveal) {
        if (isInViewPort(elems) == true) {
            elems.classList.add('reveal_active');
        } else {
            elems.classList.remove('reveal_active');

        }
    }
};
