'use strict';

const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menuH');
const links = document.querySelectorAll('.headerH__textH');
const checkbox = document.querySelector('.js-hamburger');

const handleInput = () => {
  menu.classList.toggle('hidden');
};

hamburger.addEventListener('click', handleInput);

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    checkbox.checked = false;
  });
});
