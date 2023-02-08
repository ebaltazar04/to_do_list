let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
});



 
// function newToDoItem() {
//     let paragraph = document.createElement('p');
    // paragraph.innerText = inputField.value;
    // toDoContainer.appendChild('newItem');
// }

// let heading = document.getElementById('title');

// function changeHeading() {
//     heading.style.backgroundColor = 'gray';
// }

// heading.addEventListener('mouseover', changeHeading);