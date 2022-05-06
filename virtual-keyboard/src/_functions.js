function appendMultipleChildren(parentElement, childElement, numberOfCopies, deepCopies=false) {
    for (let i = 0; i < numberOfCopies; i++) {
        let clone = childElement.cloneNode(deepCopies);
        parentElement.appendChild(clone);
    }
}

// function setKeyValues (elementCollection) {
//     rows.forEach((item, index) => {
//         let row = item.querySelectorAll('.key');
//
//     })
// }

export {appendMultipleChildren};