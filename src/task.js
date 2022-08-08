class Task {
    constructor(title, description, dueDate, priority, isCompleted){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; 
        this.priority = priority;
        this.isCompleted = isCompleted;
    }

    markComplete () {
        this.isCompleted = true; 
    }

    markIncomplete () {
        this.isCompleted = false; 
    }

}

export { Task }