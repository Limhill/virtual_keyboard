const BODY = document.querySelector('.body');
const HEADER = document.createElement('h1');
const TEXTAREA = document.createElement('textarea');
const WRAPPER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const ROW = document.createElement('div');
const KEY = document.createElement('div');
const DOUBLE_WIDTH_KEYS = ['CapsLock', 'Enter', 'Backspace'];
const TRIPLE_WIDTH_KEYS = ['ShiftLeft'];

const KEYS = {
  Backquote: { main: { en: '`', ru: 'Ё' }, additional: { en: '~' } },
  Digit1: { main: { en: '1', ru: '1' }, additional: { en: '!', ru: '!' } },
  Digit2: { main: { en: '2', ru: '2' }, additional: { en: '@', ru: '"' } },
  Digit3: { main: { en: '3', ru: '3' }, additional: { en: '#', ru: '№' } },
  Digit4: { main: { en: '4', ru: '4' }, additional: { en: '$', ru: ';' } },
  Digit5: { main: { en: '5', ru: '5' }, additional: { en: '%', ru: '%' } },
  Digit6: { main: { en: '6', ru: '6' }, additional: { en: '^', ru: ':' } },
  Digit7: { main: { en: '7', ru: '7' }, additional: { en: '&', ru: '?' } },
  Digit8: { main: { en: '8', ru: '8' }, additional: { en: '*', ru: '*' } },
  Digit9: { main: { en: '9', ru: '9' }, additional: { en: '(', ru: '(' } },
  Digit0: { main: { en: '0', ru: '0' }, additional: { en: ')', ru: ')' } },
  Minus: { main: { en: '-', ru: '-' }, additional: { en: '_', ru: '_' } },
  Equal: { main: { en: '=', ru: '=' }, additional: { en: '+', ru: '+' } },
  Backspace: { main: { en: 'Backspace', ru: 'Backspace' } },
  Tab: { main: { en: 'Tab', ru: 'Tab' } },
  KeyQ: { main: { en: 'Q', ru: 'Й' } },
  KeyW: { main: { en: 'W', ru: 'Ц' } },
  KeyE: { main: { en: 'E', ru: 'У' } },
  KeyR: { main: { en: 'R', ru: 'К' } },
  KeyT: { main: { en: 'T', ru: 'Е' } },
  KeyY: { main: { en: 'Y', ru: 'Н' } },
  KeyU: { main: { en: 'U', ru: 'Г' } },
  KeyI: { main: { en: 'I', ru: 'Ш' } },
  KeyO: { main: { en: 'O', ru: 'Щ' } },
  KeyP: { main: { en: 'P', ru: 'З' } },
  BracketLeft: { main: { en: '[', ru: 'Х' }, additional: { en: '{' } },
  BracketRight: { main: { en: ']', ru: 'Ъ' }, additional: { en: '}' } },
  Backslash: { main: { en: '\\', ru: '\\' }, additional: { en: '|', ru: '/' } },
  Delete: { main: { en: 'Delete', ru: 'Delete' } },
  CapsLock: { main: { en: 'Caps Lock', ru: 'Caps Lock' } },
  KeyA: { main: { en: 'A', ru: 'Ф' } },
  KeyS: { main: { en: 'S', ru: 'Ы' } },
  KeyD: { main: { en: 'D', ru: 'В' } },
  KeyF: { main: { en: 'F', ru: 'А' } },
  KeyG: { main: { en: 'G', ru: 'П' } },
  KeyH: { main: { en: 'H', ru: 'Р' } },
  KeyJ: { main: { en: 'J', ru: 'О' } },
  KeyK: { main: { en: 'K', ru: 'Л' } },
  KeyL: { main: { en: 'L', ru: 'Д' } },
  Semicolon: { main: { en: ';', ru: 'Ж' }, additional: { en: ':' } },
  Quote: { main: { en: '\'', ru: 'Э' }, additional: { en: '"' } },
  Enter: { main: { en: 'Enter', ru: 'Enter' } },
  ShiftLeft: { main: { en: 'Shift', ru: 'Shift' } },
  KeyZ: { main: { en: 'Z', ru: 'Я' } },
  KeyX: { main: { en: 'X', ru: 'Ч' } },
  KeyC: { main: { en: 'C', ru: 'С' } },
  KeyV: { main: { en: 'V', ru: 'М' } },
  KeyB: { main: { en: 'B', ru: 'И' } },
  KeyN: { main: { en: 'N', ru: 'Т' } },
  KeyM: { main: { en: 'M', ru: 'Ь' } },
  Comma: { main: { en: ',', ru: 'Б' }, additional: { en: '<' } },
  Period: { main: { en: '.', ru: 'Ю' }, additional: { en: '>' } },
  Slash: { main: { en: '/', ru: '.' }, additional: { en: '?', ru: ',' } },
  ArrowUp: { main: { en: '↑', ru: '↑' } },
  ShiftRight: { main: { en: 'Shift', ru: 'Shift' } },
  ControlLeft: { main: { en: 'Ctrl', ru: 'Ctrl' } },
  MetaLeft: { main: { en: 'Win', ru: 'Win' } },
  AltLeft: { main: { en: 'Alt', ru: 'Alt' } },
  Space: { main: { en: ' ', ru: ' ' } },
  AltRight: { main: { en: 'Alt', ru: 'Alt' } },
  ControlRight: { main: { en: 'Ctrl', ru: 'Ctrl' } },
  ArrowLeft: { main: { en: '←', ru: '←' } },
  ArrowDown: { main: { en: '↓', ru: '↓' } },
  ArrowRight: { main: { en: '→', ru: '→' } },
};

const SPECIAL_KEYS = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
  'ControlLeft', 'ControlRight', 'MetaLeft', 'AltLeft', 'AltRight',
  'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

export {
  BODY, HEADER, TEXTAREA, WRAPPER, KEYBOARD, ROW, KEY,
  KEYS, SPECIAL_KEYS, DOUBLE_WIDTH_KEYS, TRIPLE_WIDTH_KEYS,
};
