class Project{
    
    static id = 0;

    static incrementId() {
        this.id++;
    }
    
    constructor(name){
        Project.incrementId();
        this.name = name;
        this.taskList = [];
        this.id = Project.id;
    }

    

    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(index) {
        this.taskList.splice(index, 1);
    }

}

export { Project }