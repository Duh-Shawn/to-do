import { UI } from "./ui";
import { Task } from "./task";
import { Events } from "./events";
import { Project } from "./project";

class Controller {
    constructor (projectList, selectedProject){
        this.projectList = projectList;
        this.selectedProject = selectedProject;
        this.events = new Events(this);
    }

    setSelectedProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject = this.projectList[projectIndex];
        UI.displayProjectTasks(this.selectedProject);
        console.log(this.selectedProject);
    }

    removeProjectFromList = (index) => {
        this.projectList.splice(index, 1);
    }

    createProject = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        this.projectList.push(new Project(name));
        UI.displayProjectList(this.projectList);
        this.events.initRemoveProjectListener();
        this.events.initProjectSelectionListener();
        /* const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due').value;
        const priority = document.getElementById('priority').value; 
        const task = new Task(title, description, dueDate, priority);
        this.selectedProject.addTask(task);
        UI.displayProjectTasks(this.selectedProject);
        this.events.initRemoveTaskListener(); */
        
    }

    deleteProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.removeProjectFromList(projectIndex);
        UI.displayProjectList(this.projectList);
        this.events.initRemoveProjectListener()
        this.events.initProjectSelectionListener();
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

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        UI.displayProjectTasks(this.selectedProject);
        this.events.initRemoveTaskListener();
    }
    
    

    

}

export { Controller };