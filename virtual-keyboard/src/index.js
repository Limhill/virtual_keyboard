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
const lang = 'en';
let capsLock = false;

// Добавляю коды для кнопок
addKeyCode(KEYS_COLLECTION);

// Добавляю текст внутрь кнопок
renderingKeyText(KEYS_COLLECTION, lang, capsLock);

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
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
    if (e.code === KEYS_COLLECTION[i].getAttribute('key_code')) {
      KEYS_COLLECTION[i].classList.remove('key_pressed');
    }
    setTimeout(() => {
      KEYS_COLLECTION[i].classList.remove('key_pressed');
    }, 400);
  }
});

KEYBOARD.addEventListener('mousedown', (e) => {
  const targetItem = e.target;
  const targetItemCode = targetItem.getAttribute('key_code');
  if (targetItem.classList.contains('key') && !SPECIAL_KEYS.includes(targetItemCode) && capsLock) {
    TEXTAREA.value += KEYS[targetItemCode].main[lang];
  } else if (targetItem.classList.contains('key') && !SPECIAL_KEYS.includes(targetItemCode) && !capsLock) {
    TEXTAREA.value += KEYS[targetItemCode].main[lang].toLowerCase();
  }
  if (targetItemCode === 'CapsLock') {
    capsLock = !capsLock;
    targetItem.classList.toggle('active');
    renderingKeyText(KEYS_COLLECTION, lang, capsLock);
  }
});

TEXTAREA.focus();
