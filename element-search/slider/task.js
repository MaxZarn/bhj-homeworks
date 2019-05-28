"use strict" 

const prev = document.querySelector('div.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow_next');

const sliders = document.querySelectorAll('div.slider__item');
let currentSlider = 0;

prev.onclick = function() {
    sliders[currentSlider].className = 'slider__item'
    currentSlider = (currentSlider - 1 + sliders.length) % sliders.length;
    sliders[currentSlider].className = 'slider__item slider__item_active'
};

next.onclick = function() {
    sliders[currentSlider].className = 'slider__item'
    currentSlider = (currentSlider + 1 + sliders.length) % sliders.length;
    sliders[currentSlider].className = 'slider__item slider__item_active'
};