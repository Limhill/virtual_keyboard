import './main.sass';
import {
  appendMultipleChildren, addKeyCode, renderingKeyText, addClassesForStyle,
  addKeyPress, removeKeyPress,
} from './_functions';
import {
  BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEY, SPECIAL_KEYS, KEYS,
} from './_constants';

// Присваиваем классы
HEADER.className = 'header';
TEXTAREA.className = 'textarea';
WRAPPER.className = 'wrapper';
KEYBOARD.className = 'keyboard';
ROW.className = 'row';
KEY.className = 'key';

// Формируем каркас страницы
BODY.appendChild(WRAPPER);
WRAPPER.appendChild(HEADER);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);
appendMultipleChildren(KEYBOARD, ROW, 5);

const rowsCollection = document.querySelectorAll('.row');
appendMultipleChildren(rowsCollection[0], KEY, 14);
appendMultipleChildren(rowsCollection[1], KEY, 15);
appendMultipleChildren(rowsCollection[2], KEY, 13);
appendMultipleChildren(rowsCollection[3], KEY, 13);
appendMultipleChildren(rowsCollection[4], KEY, 9);

// Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

const KEYS_COLLECTION = document.querySelectorAll('.key');
let lang = localStorage.getItem('lang');
let capsLock = false;
let shift = false;
let bigLetters;

if (capsLock && shift) bigLetters = false;
if (capsLock && !shift) bigLetters = true;
if (!capsLock && shift) bigLetters = true;
if (!capsLock && !shift) bigLetters = false;

// Добавляю коды для кнопок
addKeyCode(KEYS_COLLECTION);

// Добавляю текст внутрь кнопок
renderingKeyText(KEYS_COLLECTION, lang);

// Устанавливаю длину для кнопок
addClassesForStyle(KEYS_COLLECTION);

KEYBOARD.addEventListener('mousedown', addKeyPress);
KEYBOARD.addEventListener('mouseup', removeKeyPress);

window.addEventListener('mouseup', () => {
  for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
    KEYS_COLLECTION[i].classList.remove('key_pressed');
  }
});

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
    if (e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.add('key_pressed');
    }
    if (e.code === 'ShiftLeft' && e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.toggle('active');
    }
    if (e.code === 'ShiftRight' && e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.toggle('active');
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
    if (e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.remove('key_pressed');
    }
    setTimeout(() => {
      KEYS_COLLECTION[i].classList.remove('key_pressed');
    }, 1000);
  }
  if (e.code === 'CapsLock') {
    capsLock = !capsLock;
    renderingKeyText(KEYS_COLLECTION, lang, bigLetters);
  }
});

KEYBOARD.addEventListener('mousedown', (e) => {
  const targetItem = e.target;
  const targetItemCode = targetItem.getAttribute('key_code');

  if ((targetItem.classList.contains('key') && !SPECIAL_KEYS.includes(targetItemCode))) {
    if (capsLock && !shift) {
      TEXTAREA.value += KEYS[targetItemCode].main[lang];
    } else if (capsLock && shift) {
      if (!KEYS[targetItemCode].additional) {
        TEXTAREA.value += KEYS[targetItemCode].main[lang].toLowerCase();
      } else {
        TEXTAREA.value += KEYS[targetItemCode].additional[lang];
      }
    } else if (!capsLock && shift) {
      if (!KEYS[targetItemCode].additional) {
        TEXTAREA.value += KEYS[targetItemCode].main[lang];
      } else {
        TEXTAREA.value += KEYS[targetItemCode].additional[lang];
      }
    } else {
      TEXTAREA.value += KEYS[targetItemCode].main[lang].toLowerCase();
    }
  }

  if (targetItemCode === 'CapsLock') {
    capsLock = !capsLock;
  }

  if (targetItemCode === 'ShiftLeft' || targetItemCode === 'ShiftRight') {
    shift = !shift;
    targetItem.classList.toggle('active');
  }

  if (targetItemCode === 'AltLeft' && shift) {
    if (lang === 'en') {
      lang = 'ru';
      localStorage.setItem('lang', 'ru');
    } else if (lang === 'ru') {
      lang = 'en';
      localStorage.setItem('lang', 'en');
    }
    shift = false;
    KEYS_COLLECTION.forEach((key) => {
      if (key.getAttribute('key_code') === 'ShiftLeft' || key.getAttribute('key_code') === 'ShiftRight') {
        key.classList.remove('active');
      }
    });
    renderingKeyText(KEYS_COLLECTION, lang);
  }
});

TEXTAREA.focus();
