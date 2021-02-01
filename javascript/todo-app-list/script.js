// lista de tareas
var taskList = [];

// lista de exhibicion
let showList = document.getElementById('div-list-ol');


/* ========= Botones ========= */
// boton Submit
let buttonInput = document.getElementById('button-submit');

buttonInput.addEventListener('click', () => {
    // Add an item! input
    let taskInput = document.getElementById('form-input');
    taskList.push(taskInput.value);
    // create li element
    let elementAdded = document.createElement('li');
    let elementAddedText = document.createTextNode(taskInput.value);
    elementAdded.setAttribute('class', 'li-element');
    
    elementAdded.appendChild(elementAddedText);
    showList.appendChild(elementAdded);
    // create 'erase' button
    let eraseButton = document.createElement('button');
    let eraseButtonText = document.createTextNode('X');
    eraseButton.setAttribute('class', 'element-button');
    eraseButton.appendChild(eraseButtonText);
    elementAdded.appendChild(eraseButton);

    eraseButton.addEventListener('click', () => {
        showList.removeChild(elementAdded);
    })
    // create 'done' button
    let doneButton = document.createElement('button');
    let doneButtonText = document.createTextNode('Done');
    doneButton.setAttribute('class', 'element-button');
    doneButton.appendChild(doneButtonText);
    elementAdded.appendChild(doneButton);
    taskInput.value = '';

    doneButton.addEventListener('click', () => {
        elementAdded.setAttribute('style', 'text-decoration: line-through;')
    })
});

// boton Clear
let buttonClear = document.getElementById('button-clear');

buttonClear.addEventListener('click', () => {
    while (showList.firstChild) {
        showList.removeChild(showList.firstChild);
    }
})
