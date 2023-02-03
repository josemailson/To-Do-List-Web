//cotinuar 42:00 min

const form = document.createElement('form');
const inputActivity = document.createElement('input');
const inputActivityDate = document.createElement('input');
const selectTagPriority = document.createElement('select');
const submitButton = document.createElement('button');

inputActivity.id = 'input-activity';
inputActivity.type = 'text';
inputActivity.placeholder = 'Inform the activity';

inputActivityDate.id = 'input-date';
inputActivityDate.type = 'date';

const arrayOptions = ['Baixa', 'Normal', 'Alta', 'Altíssima'];

selectTagPriority.id = 'select-tag-priority';
arrayOptions.forEach(element => {
    const optionTagPriority = document.createElement('option');
    optionTagPriority.textContent = element;
    selectTagPriority.appendChild(optionTagPriority);
});

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const inputActivityValue = inputActivity.value;
    const inputActivityDateValue = inputActivityDate.value;
    const selectTagPriorityValue = selectTagPriority.value;
    console.log(inputActivityValue, inputActivityDateValue, selectTagPriorityValue);
});
submitButton.textContent = 'Adicionar';
submitButton.type = 'submit';

form.appendChild(inputActivity);
form.appendChild(inputActivityDate);
form.appendChild(selectTagPriority);
form.appendChild(submitButton);

const divNewActivity = document.querySelector('.new-activity');
divNewActivity.append(form);

class ToDoList {
    listOfToDos = [];

    addToDo(toDo) {
        this.listOfToDos.push(toDo);
    }

    deleToDo(id) {
        for (let i = 0; i < listOfToDos.length; i++) {
            const e = listOfToDos[i];
            if(e.id === id){
            this.listOfToDos.pop(e);
            }
        }
    }

    editToDo(id, editedToDo) {
        for (let i = 0; i < listOfToDos.length; i++) {
            const e = listOfToDos[i];
            if (e.id === id) {
                this.listOfToDos.replace(e, editedToDo);
            }
        }
    }
}

class ToDoModel {
   id;
   description;
   date;
   priority;
   concluded = false;
}