import {
  DOUBLE_WIDTH_KEYS, TRIPLE_WIDTH_KEYS, KEYS, TEXTAREA,
} from './_constants';

function appendMultipleChildren(parentElement, childElement, numberOfCopies, deepCopies = false) {
  for (let i = 0; i < numberOfCopies; i += 1) {
    const clone = childElement.cloneNode(deepCopies);
    parentElement.appendChild(clone);
  }
}

function addKeyCode(listOfKeys) {
  const keyList = listOfKeys;
  for (let i = 0; i < keyList.length; i += 1) {
    keyList.forEach((key, index) => {
      key.setAttribute('key_code', Object.keys(KEYS)[index]);
    });
  }
}

function renderingKeyText(listOfKeys, lang) {
  const keyList = listOfKeys;
  for (let i = 0; i < keyList.length; i += 1) {
    const keyCode = keyList[i].getAttribute('key_code');
    keyList[i].textContent = KEYS[keyCode].main[lang];
    if (KEYS[keyCode].additional) {
      const additionalValue = document.createElement('span');
      additionalValue.textContent = KEYS[keyCode].additional[lang];
      keyList[i].insertBefore(additionalValue, keyList[i].firstChild);
    }
  }
}

function addClassesForStyle(listOfKeys) {
  const keyList = listOfKeys;
  keyList.forEach((item) => {
    if (DOUBLE_WIDTH_KEYS.includes(item.getAttribute('key_code'))) item.classList.add('key_double-width');
    if (TRIPLE_WIDTH_KEYS.includes(item.getAttribute('key_code'))) item.classList.add('key_triple-width');
    if (item.getAttribute('key_code') === 'Space') item.classList.add('space');
  });
}

function addKeyPress(e) {
  const targetItem = e.target;
  if (targetItem.classList.contains('key') && !targetItem.classList.contains('key_pressed')) {
    targetItem.classList.add('key_pressed');
  }
}

function removeKeyPress(e) {
  const targetItem = e.target;
  if (targetItem.classList.contains('key') && targetItem.classList.contains('key_pressed')) {
    targetItem.classList.remove('key_pressed');
    TEXTAREA.focus();
  }
}

export {
  appendMultipleChildren, addKeyCode, renderingKeyText, addClassesForStyle,
  addKeyPress, removeKeyPress,
};
