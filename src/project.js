class Project{
    constructor(name){
        this.name = name;
        this.taskList = [];
    }

    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }

}

export { Project }