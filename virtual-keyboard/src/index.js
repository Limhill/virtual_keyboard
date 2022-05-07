import "./main.sass";
import {appendMultipleChildren, addKeyPress, removeKeyPress} from "./_functions";
import {BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEY,
    KEYS_VALUES, KEYS_ADDITIONAL_VALUES} from './_constants';

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

let rowsCollection = document.querySelectorAll('.row');
appendMultipleChildren(rowsCollection[0], KEY, 14);
appendMultipleChildren(rowsCollection[1], KEY, 15);
appendMultipleChildren(rowsCollection[2], KEY, 13);
appendMultipleChildren(rowsCollection[3], KEY, 14);
appendMultipleChildren(rowsCollection[4], KEY, 9);

//Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

const KEYS_COLLECTION = document.querySelectorAll('.key');
let lang = 'ru';
//Добавляю значения для кнопок
for (let i = 0; i < KEYS_COLLECTION.length; i++) {
    KEYS_COLLECTION.forEach((key, index) => {
        key.textContent = KEYS_VALUES[lang][index];
        key.setAttribute('value', KEYS_VALUES[lang][index]);
        key.setAttribute('value_lower-case', KEYS_VALUES[lang][index].toLowerCase());
    })
}

//В первый ряд добавляю дополнительные значения
let firstRow = KEYS_COLLECTION[0].querySelectorAll('.key');
firstRow.forEach((item, index) => {
    let additionalValue = document.createElement('span');
    additionalValue.className = 'additional-value';
    additionalValue.textContent = KEYS_ADDITIONAL_VALUES[index];
    let firstChild = item.firstChild;
    item.insertBefore(additionalValue, firstChild);
});

//Устанавливаю длину для кнопок
let shifts = 0;
KEYS_COLLECTION.forEach((item) => {
    let doubleWidthKeys = ['Caps Lock', 'ENTER', 'Backspace'];
    if (doubleWidthKeys.includes(item.textContent)) item.classList.add('key_double-width');
    if (item.textContent === 'Caps Lock') item.classList.add('caps-lock');
    if (item.textContent === ' ') item.classList.add('space');
    if (item.textContent === 'Shift' && shifts === 0) {
        item.classList.add('key_double-width');
        shifts++;
    }

})
shifts = 0;

KEYBOARD.addEventListener('mousedown', addKeyPress);
KEYBOARD.addEventListener('mouseup', removeKeyPress);

