import {ToDo} from "./todo.js";

const form = document.createElement('form');
const inputActivity = document.createElement('input');
const inputActivityDate = document.createElement('input');
const selectTagPriority = document.createElement('select');
const submitButton = document.createElement('button');

inputActivity.id = 'input-activity';
inputActivity.type = 'text';
inputActivity.placeholder = 'Inform the activity';
inputActivity.required = true;

inputActivityDate.id = 'input-date';
inputActivityDate.type = 'date';
inputActivityDate.required = true;

const arrayOptions = ['Low', 'Normal', 'High', 'Very High'];

selectTagPriority.id = 'select-tag-priority';
arrayOptions.forEach((element, index) => {
    const optionTagPriority = document.createElement('option');
    optionTagPriority.value = index;
    optionTagPriority.textContent = element;
    selectTagPriority.appendChild(optionTagPriority);
});

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputActivityValue = inputActivity.value;
    const inputActivityDateValue = inputActivityDate.value;
    const selectTagPriorityValue = selectTagPriority.value;
    const formIsFilled = inputActivityValue != 0 && inputActivityDateValue != 0 && selectTagPriorityValue != null;
    if (formIsFilled) {
        const newActivity = new ToDo(inputActivityValue, inputActivityDateValue, selectTagPriorityValue);
        toDoList.push(newActivity);
        renderLi(newActivity);
        console.log(newActivity);
    } else {
        alert('Fill out all the fields!');
    }
});

submitButton.textContent = 'Add';
submitButton.type = 'submit';

form.appendChild(inputActivity);
form.appendChild(inputActivityDate);
form.appendChild(selectTagPriority);
form.appendChild(submitButton);

const divNewActivity = document.querySelector('.new-activity');
divNewActivity.append(form);

const toDoList = [];


const ulActivity = document.createElement('ul');
divNewActivity.appendChild(ulActivity);

function renderLi(item) {
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = toDoList.length;
    const labelCheckbox = document.createElement('label');
    labelCheckbox.for =toDoList.length;
    labelCheckbox.innerText = item.description;
    const divCheckbox = document.createElement('div');
    divCheckbox.appendChild(inputCheckbox);
    divCheckbox.appendChild(labelCheckbox);
    const liActivity = document.createElement('li');
    liActivity.appendChild(divCheckbox);
    ulActivity.appendChild(liActivity);
    const paragPriority = document.createElement('p');
    paragPriority.textContent = item.priority;
    const paragDate = document.createElement('p');
    paragDate.textContent = item.date;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
}