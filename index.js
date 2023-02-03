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
arrayOptions.forEach(element => {
    const optionTagPriority = document.createElement('option');
    optionTagPriority.textContent = element;
    selectTagPriority.appendChild(optionTagPriority);
});

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputActivityValue = inputActivity.value;
    const inputActivityDateValue = inputActivityDate.value;
    const selectTagPriorityValue = selectTagPriority.value;
    const formIsFilled = inputActivityValue != 0 && inputActivityDateValue != 0 && selectTagPriorityValue != 0;
    if (formIsFilled) {
        const newActivity = new ToDo(inputActivityValue, inputActivityDateValue, selectTagPriorityValue);
        toDoList.push(newActivity);
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

class ToDo {
    description;
    date;
    priority;
    concluded = false;
    constructor(description, date, priority, concluded) {
        this.description = description,
        this.date = date,
        this.priority = priority,
        this.concluded
    }
}