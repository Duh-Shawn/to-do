import { UI } from "./ui";
import { Task } from "./task";
import { Events } from "./events";

class Controller {
    constructor (projectList, selectedProject){
        this.projectList = projectList;
        this.selectedProject = selectedProject;
        this.events = new Events(this);
    }

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        UI.displayProjectTasks(this.selectedProject);
        this.events.initRemoveTaskListener();
    }
    
    createTask = (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due').value;
        const priority = document.getElementById('priority').value; 
        const task = new Task(title, description, dueDate, priority);
        this.selectedProject.addTask(task);
        UI.displayProjectTasks(this.selectedProject);
        this.events.initRemoveTaskListener();
    }

}

export { Controller };