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