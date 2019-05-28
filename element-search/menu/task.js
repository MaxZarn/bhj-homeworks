"use strict"

const menuLink = document.querySelectorAll('.menu__link');
let firstElement = menuLink.item(1); // О компании
let secondElement = menuLink.item(5); // Услуги

const menu = document.querySelectorAll('ul.menu');
let menu1 = menu.item(1);
let menu2 = menu.item(2);

firstElement.onclick = function() {
    menu1.className = 'menu menu_sub menu_active';
    menu2.className = 'menu menu_sub'
    return false;
};

secondElement.onclick = function() {
    menu2.className = 'menu menu_sub menu_active';
    menu1.className = 'menu menu_sub';
    return false;
};