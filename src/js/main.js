'use strict';

const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menuH');
const links = document.querySelectorAll('.headerH__textH');
const checkbox = document.querySelector('.js-hamburger');

const flagsElement = document.getElementById('flags');
const languageSwitch = document.getElementById('languageSwitch');
const textsToChange = document.querySelectorAll('[data-section]');
const flagsMobile = document.getElementById('flags-mobile');
const languageSwitchMobile = flagsMobile.querySelector('#languageSwitch');

const handleInput = () => {
  menu.classList.toggle('hidden');
};

hamburger.addEventListener('click', handleInput);

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    checkbox.checked = false;
  });
});

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
  }
};

/*desktop*/

flagsElement.addEventListener('click', async (e) => {
  if (e.target.tagName === 'P') {
    const language = e.target.dataset.language;
    await changeLanguage(language);
  }
});

languageSwitch.addEventListener('change', async () => {
  const language = languageSwitch.checked ? 'en' : 'es';
  await changeLanguage(language);
});

/*mobile*/

flagsMobile.addEventListener('click', async (e) => {
  if (e.target.tagName === 'P') {
    const language = e.target.dataset.language;
    await changeLanguage(language);
  }
});

languageSwitchMobile.addEventListener('change', async () => {
  const language = languageSwitchMobile.checked ? 'en' : 'es';
  await changeLanguage(language);
});
