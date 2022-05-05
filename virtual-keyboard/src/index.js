import "./main.sass";
import {appendMultipleChildren} from "./_functions";

// Объявляем все необходимые переменные
const BODY = document.querySelector('.body');
const HEADER = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const WRAPPER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const ROW = document.createElement('div');
const KEY = document.createElement('div');
const ADDITIONAL_KEY_VALUE = document.createElement('div');

// Присваиваем классы
HEADER.className = 'header';
TEXTAREA.className = 'textarea';
WRAPPER.className = 'wrapper';
KEYBOARD.className = 'keyboard';
ROW.className = 'row';
KEY.className = 'key';
ADDITIONAL_KEY_VALUE.className = 'key__value_additional';

// Формируем каркас страницы
BODY.appendChild(WRAPPER);
WRAPPER.appendChild(HEADER);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);

appendMultipleChildren(KEYBOARD, ROW, 5);
let rows = document.querySelectorAll('.row');

appendMultipleChildren(rows[0], KEY, 14);
appendMultipleChildren(rows[1], KEY, 15);
appendMultipleChildren(rows[2], KEY, 13);
appendMultipleChildren(rows[3], KEY, 14);
appendMultipleChildren(rows[4], KEY, 9);

//Присваиваем значения
HEADER.textContent = 'Клавиатура создана в ОС Windows';
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('cols', '120');

let values = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', "Щ", "З", "Х", "Ъ", "\\", "DEL"],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
    ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '1', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '4', '2', '6'],
]

let firstRow = rows[0].querySelectorAll('.key');




