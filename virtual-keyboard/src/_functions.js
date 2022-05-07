function appendMultipleChildren(parentElement, childElement, numberOfCopies, deepCopies=false) {
    for (let i = 0; i < numberOfCopies; i++) {
        let clone = childElement.cloneNode(deepCopies);
        parentElement.appendChild(clone);
    }
}



export {appendMultipleChildren};