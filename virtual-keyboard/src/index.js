import './main.sass';
import {
  appendMultipleChildren, addKeyPress, removeKeyPress, keyboardWork,
} from './_functions';
import {
  BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEY,
  KEYS, SPECIAL_KEYS, DOUBLE_WIDTH_KEYS,
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
appendMultipleChildren(rowsCollection[3], KEY, 14);
appendMultipleChildren(rowsCollection[4], KEY, 9);

// Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

const KEYS_COLLECTION = document.querySelectorAll('.key');
const lang = 'en';
const capsLock = true;

// Добавляю коды для кнопок
for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
  KEYS_COLLECTION.forEach((key, index) => {
    key.setAttribute('key_code', Object.keys(KEYS[index])[0]);
  });
}

// Добавляю текст внутрь кнопок
for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
  const keyCode = KEYS_COLLECTION[i].getAttribute('key_code');
  if (!capsLock && !SPECIAL_KEYS.includes(KEYS[i][keyCode].main[lang])) {
    KEYS_COLLECTION[i].textContent = KEYS[i][keyCode].main[lang].toLowerCase();
  } else {
    KEYS_COLLECTION[i].textContent = KEYS[i][keyCode].main[lang];
  }
}

// Добавляю дополнительные значения
for (let i = 0; i < KEYS_COLLECTION.length; i += 1) {
  const keyCode = KEYS_COLLECTION[i].getAttribute('key_code');
  if (KEYS[i][keyCode].additional) {
    const additionalValue = document.createElement('span');
    additionalValue.textContent = KEYS[i][keyCode].additional[lang];
    KEYS_COLLECTION[i].insertBefore(additionalValue, KEYS_COLLECTION[i].firstChild);
  }
}

// Устанавливаю длину для кнопок
KEYS_COLLECTION.forEach((item) => {
  if (DOUBLE_WIDTH_KEYS.includes(item.getAttribute('key_code'))) item.classList.add('key_double-width');
  if (item.getAttribute('key_code') === 'Space') item.classList.add('space');
});

KEYBOARD.addEventListener('mousedown', addKeyPress);
KEYBOARD.addEventListener('mouseup', removeKeyPress);

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
    }, 100);
  }
});

KEYBOARD.addEventListener('mousedown', keyboardWork);

TEXTAREA.focus();
