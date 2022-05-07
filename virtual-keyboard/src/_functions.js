function appendMultipleChildren(parentElement, childElement, numberOfCopies, deepCopies=false) {
    for (let i = 0; i < numberOfCopies; i++) {
        let clone = childElement.cloneNode(deepCopies);
        parentElement.appendChild(clone);
    }
}

function addKeyPress(e) {
    let targetItem = e.target;
    if (e.target.classList.contains('key') && !e.target.classList.contains('key_pressed')) {
        targetItem.classList.add('key_pressed');
    }

}

function removeKeyPress(e) {
    let targetItem = e.target;
    if (e.target.classList.contains('key') && e.target.classList.contains('key_pressed')) {
        targetItem.classList.remove('key_pressed');
    }
}

export {appendMultipleChildren, addKeyPress, removeKeyPress};