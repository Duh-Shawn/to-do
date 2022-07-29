import { UI } from "./ui";
import { Task } from "./task";

class Controller {
    constructor (projectList, selectedProject){
        this.projectList = projectList;
        this.selectedProject = selectedProject;
        this.createNewTaskButton = document.getElementById('form-submission');
        this.createNewTaskButton.addEventListener('click', this.createTask);
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
    }

    

}

export { Controller };