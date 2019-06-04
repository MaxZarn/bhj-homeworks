"use strict"


setInterval(() => {
    //const rotatorCase = this.closest('.rotator__case');
    //const rotatorNext = rotatorCase.querySelector('span');
    const rotator = document.querySelector('span.rotator__case_active');
    const rotatorCase = document.querySelector('.rotator__case');
   // const prev = rotator.previousElementSibling;
    const next = rotator.nextElementSibling;
    
    if (next.classList.contains('rotator__case')) {
        rotator.classList.remove('rotator__case_active');
        next.classList.add('rotator__case_active');
    } else {
        //rotator.classList.remove('rotator__case_active');
        rotatorCase.firstElementChild.classList.add('.rotator__case_active');
        
    }
    
}, 1000);