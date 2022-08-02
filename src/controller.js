import { UI } from "./ui";
import { Task } from "./task";

class Controller {
    constructor (projectList, selectedProject){
        this.projectList = projectList;
        this.selectedProject = selectedProject;
    }

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        UI.displayProjectTasks(this.selectedProject);
        this.attachRemoveEvents();
    }

    attachRemoveEvents = () => {
        const removeTaskButtonList = document.querySelectorAll('.remove-task');
        removeTaskButtonList.forEach(removeButton => {
            removeButton.addEventListener('click', this.deleteTask);
        })
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
        this.attachRemoveEvents();
    }

    

    

}

export { Controller };