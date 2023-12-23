'use strict';

console.log('holis')

const hamburger = document.querySelector ('.js-hamburger');
const menu = document.querySelector ('.js-menuH');
const infoH = document.querySelector ('.js-infoHang');


const handleInput = (event) =>{
    event.preventDefault();
    menu.classList.toggle('hidden');
}

const handleInfoH = (event) =>{
    event.preventDefault();
}

hamburger.addEventListener('click', handleInput);
infoH.addEventListener('click', handleInfoH);
