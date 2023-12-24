'use strict';

console.log('holis')

const hamburger = document.querySelector ('.js-hamburger');
const menu = document.querySelector ('.js-menuH');
const infoH = document.querySelector ('.js-infoHang');


const handleInput = () =>{
    
    menu.classList.toggle('hidden');
}


hamburger.addEventListener('click', handleInput);

