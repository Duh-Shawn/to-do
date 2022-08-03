import { UI } from "./ui";
import { Task } from "./task";
import { Events } from "./events";
import { Project } from "./project";

class Controller {
    constructor (projectList, selectedProject){
        this.projectList = projectList;
        this.selectedProject = selectedProject;
        this.ui = new UI(this);
    }

    //Project logic
    createProject = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        this.projectList.push(new Project(name));
        this.ui.displayProjectList(this.projectList);
    }

    setSelectedProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject = this.projectList[projectIndex];
        this.ui.displayProjectTasks(this.selectedProject);
        console.log(this.selectedProject);
    }

    removeProjectFromList = (index) => {
        this.projectList.splice(index, 1);
    }

    deleteProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.removeProjectFromList(projectIndex);
        this.ui.displayProjectList(this.projectList);
    }

    //Task logic
    createTask = (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due').value;
        const priority = document.getElementById('priority').value; 
        const task = new Task(title, description, dueDate, priority);
        this.selectedProject.addTask(task);
        this.ui.displayProjectTasks(this.selectedProject);
    }

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        this.ui.displayProjectTasks(this.selectedProject);
    }


}

export { Controller };