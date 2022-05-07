const BODY = document.querySelector('.body');
const HEADER = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const WRAPPER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const ROW = document.createElement('div');
const KEY = document.createElement('div');


const KEYS_VALUES =
    {'en':
    [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', "O", "P", "[", "]", "\\", "DEL",
        'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER',
        'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '↑', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'
    ],
    'ru':
    [
        'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', "Щ", "З", "Х", "Ъ", "\\", "DEL",
        'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER',
        'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '↑', 'Shift',
        'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'
    ],
}
;

const KEYS_ADDITIONAL_VALUES = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

export {BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEY,
    KEYS_VALUES, KEYS_ADDITIONAL_VALUES};