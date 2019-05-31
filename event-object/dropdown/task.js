"use strict" 

const dropdownList = document.querySelector('ul.dropdown__list');
const dropdownValue = document.querySelector('div.dropdown__value');
const dropdownLink = document.querySelectorAll('a.dropdown__link');

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (const link of dropdownLink) {
    link.onclick = function() {
        dropdownValue.textContent = link.textContent; 
        return false;
    };
};