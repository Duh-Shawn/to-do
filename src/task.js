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

    setTitle (title) {
        this.title = title;
    }

    setDescription (description) {
        this.description = description;
    }

    setDueDate (dueDate) {
        this.dueDate = dueDate;
    }

    setPriority (priority) {
        this.priority = priority;
    }

    setCompletedStatus (completed) {
        this.isCompleted = completed;
    }


}

export { Task }