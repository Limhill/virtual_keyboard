import "./main.sass";
import {appendMultipleChildren} from "./_functions";
import {BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEYS, KEY} from './_constants';

// Присваиваем классы
HEADER.className = 'header';
TEXTAREA.className = 'textarea';
WRAPPER.className = 'wrapper';
KEYBOARD.className = 'keyboard';
ROW.className = 'row';
KEYS.className = 'keys';
KEY.className = 'key';

// Формируем каркас страницы
BODY.appendChild(WRAPPER);
WRAPPER.appendChild(HEADER);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);
appendMultipleChildren(KEYBOARD, ROW, 5);

let rows = document.querySelectorAll('.row');
rows.forEach((item) => {
    appendMultipleChildren(item, KEYS, 1);
})

let keysCollection = document.querySelectorAll('.keys');
appendMultipleChildren(keysCollection[0], KEY, 14);
appendMultipleChildren(keysCollection[1], KEY, 15);
appendMultipleChildren(keysCollection[2], KEY, 13);
appendMultipleChildren(keysCollection[3], KEY, 14);
appendMultipleChildren(keysCollection[4], KEY, 9);

//Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

let values = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', "Щ", "З", "Х", "Ъ", "\\", "DEL"],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
    ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
];

//Добавляю значения для кнопок
let additionalValues = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

for (let i = 0; i < keysCollection.length; i++) {
    let row = keysCollection[i].querySelectorAll('.key');
    row.forEach((key, index) => {
        key.textContent = values[i][index];
    })
}

//В первый ряд добавляю дополнительные значения
let firstRow = keysCollection[0].querySelectorAll('.key');
firstRow.forEach((item, index) => {
    let additionalValue = document.createElement('span');
    additionalValue.className = 'additional-value';
    additionalValue.textContent = additionalValues[index];
    let firstChild = item.firstChild;
    item.insertBefore(additionalValue, firstChild);
});

//Устанавливаю длину для кнопок
let allKeys = document.querySelectorAll('.key');
let shifts = [];
allKeys.forEach((item) => {
    let doubleWidthKeys = ['Caps Lock', 'ENTER', 'Backspace'];
    if (doubleWidthKeys.includes(item.textContent)) {
        item.classList.add('key_double-width');
    }
    if (item.textContent === 'Shift') {
       shifts.push(item);
    }
    if (item.textContent === ' ') {
        item.classList.add('key_space');
    }
})
shifts[0].classList.add(('key_double-width'));





