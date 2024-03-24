'use strict';

const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menuH');
const links = document.querySelectorAll('.headerH__textH');

const languageSwitch = document.querySelector('.languageSwitch');
const textsToChange = document.querySelectorAll('[data-section]');

const buttonUp = document.getElementById('button-up');

/** hambuger **/

const handleInput = () => {
  menu.classList.toggle('hidden');
};

hamburger.addEventListener('click', handleInput);

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    hamburger.checked = false;
  });
});

/** change languge **/

// const changeLanguage = async (language) => {
//   const requestJson = await fetch(`./languages/${language}.json`);
//   const texts = await requestJson.json();

//   for (const textToChange of textsToChange) {
//     const section = textToChange.dataset.section;
//     const value = textToChange.dataset.value;

//     textToChange.innerHTML = texts[section][value];
//   }
// };

// languageSwitch.addEventListener('change', async () => {
//   const language = languageSwitch.checked ? 'en' : 'es';
//   await changeLanguage(language);
// });

/** Scroll **/

function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

buttonUp.addEventListener('click', scrollUp);

window.addEventListener('scroll', function () {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 650) {
    buttonUp.style.display = 'block';
  } else {
    buttonUp.style.display = 'none';
  }
});
