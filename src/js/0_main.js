'use strict';

console.log('holis')

const hamburger = document.querySelector ('.js-hamburger');
const menu = document.querySelector ('.js-menuH');


const handleInput = () =>{
    menu.classList.toggle('hidden');
}

hamburger.addEventListener('click', handleInput);