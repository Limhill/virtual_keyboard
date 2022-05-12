import './main.sass';
import {
  appendMultipleChildren, addKeyCode, renderingKeyText, addClassesForStyle,
  addKeyPress, removeKeyPress, writeInTextarea, deleteSymbolBeforeCursor,
  deleteSymbolAfterCursor,
} from './functions';
import {
  BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ADDITIONAL_INFO, ROW, KEY, SPECIAL_KEYS, KEYS,
} from './constants';

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
WRAPPER.appendChild(ADDITIONAL_INFO);
appendMultipleChildren(KEYBOARD, ROW, 5);

const rowsCollection = document.querySelectorAll('.row');
appendMultipleChildren(rowsCollection[0], KEY, 14);
appendMultipleChildren(rowsCollection[1], KEY, 15);
appendMultipleChildren(rowsCollection[2], KEY, 13);
appendMultipleChildren(rowsCollection[3], KEY, 13);
appendMultipleChildren(rowsCollection[4], KEY, 9);

// Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
ADDITIONAL_INFO.textContent = 'Клавиши для смены языка: Shift + левый Alt';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

const KEYS_COLLECTION = document.querySelectorAll('.key');
let lang = localStorage.getItem('lang') || 'en';
let capsLock = false;
let shift = false;

function changeLanguage() {
  if (lang === 'en') {
    lang = 'ru';
    localStorage.setItem('lang', 'ru');
  } else if (lang === 'ru') {
    lang = 'en';
    localStorage.setItem('lang', 'en');
  }
}

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
      shift = KEYS_COLLECTION[i].classList.contains('active');
    }
    if (e.code === 'ShiftRight' && e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.toggle('active');
      shift = KEYS_COLLECTION[i].classList.contains('active');
    }
    if (e.code === 'CapsLock' && e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.toggle('active');
      capsLock = KEYS_COLLECTION[i].classList.contains('active');
    }
    if (e.altKey && shift) {
      e.preventDefault();
      changeLanguage();
      shift = false;
      KEYS_COLLECTION.forEach((key) => {
        if (key.getAttribute('key_code') === 'ShiftLeft' || key.getAttribute('key_code') === 'ShiftRight') {
          key.classList.remove('active');
        }
      });
      renderingKeyText(KEYS_COLLECTION, lang);
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
    if (e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.remove('key_pressed');
    }
  }
  if (e.altKey) {
    e.preventDefault();
  }
});

KEYBOARD.addEventListener('mousedown', (e) => {
  const targetItem = e.target;
  const targetItemCode = targetItem.getAttribute('key_code');

  if ((targetItem.classList.contains('key') && !SPECIAL_KEYS.includes(targetItemCode))) {
    if (capsLock && !shift) {
      const newValue = KEYS[targetItemCode].main[lang];
      writeInTextarea(newValue);
    } else if (capsLock && shift) {
      if (!KEYS[targetItemCode].additional) {
        const newValue = KEYS[targetItemCode].main[lang].toLowerCase();
        writeInTextarea(newValue);
      } else {
        const newValue = KEYS[targetItemCode].additional[lang];
        writeInTextarea(newValue);
      }
    } else if (!capsLock && shift) {
      if (!KEYS[targetItemCode].additional) {
        const newValue = KEYS[targetItemCode].main[lang];
        writeInTextarea(newValue);
      } else {
        const newValue = KEYS[targetItemCode].additional[lang];
        writeInTextarea(newValue);
      }
    } else {
      const newValue = KEYS[targetItemCode].main[lang].toLowerCase();
      writeInTextarea(newValue);
    }
  }

  if (targetItemCode === 'CapsLock') {
    capsLock = !capsLock;
    targetItem.classList.toggle('active');
  }

  if (targetItemCode === 'ShiftLeft' || targetItemCode === 'ShiftRight') {
    shift = !shift;
    targetItem.classList.toggle('active');
  }

  if (targetItemCode === 'AltLeft' && shift) {
    shift = false;
    changeLanguage();
    KEYS_COLLECTION.forEach((key) => {
      if (key.getAttribute('key_code') === 'ShiftLeft' || key.getAttribute('key_code') === 'ShiftRight') {
        key.classList.remove('active');
      }
    });
    renderingKeyText(KEYS_COLLECTION, lang);
  }

  if (targetItemCode === 'Tab') {
    e.preventDefault();
    const newValue = '    ';
    writeInTextarea(newValue);
  }

  if (targetItemCode === 'Backspace') {
    deleteSymbolBeforeCursor();
  }

  if (targetItemCode === 'Delete') {
    deleteSymbolAfterCursor();
  }

  if (targetItemCode === 'Enter') {
    const newValue = '\n';
    writeInTextarea(newValue);
  }
});

TEXTAREA.focus();
