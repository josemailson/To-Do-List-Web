export class ToDo {
    id;
    description;
    date;
    priority;
    constructor(description, date, priority) {
        this.id = Date.now().toString();
        this.description = description;
        this.date = date;
        this.priority = priority;
    }
}