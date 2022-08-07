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
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectList(this.projectList);
    }

    setSelectedProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject = this.projectList[projectIndex];
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));

        this.ui.displayProjectTasks(this.selectedProject);
    }

    removeProjectFromList = (index) => {
        this.projectList.splice(index, 1);
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    deleteProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.removeProjectFromList(projectIndex);
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectList(this.projectList);
        this.ui.contentDeletedDisplay();
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
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectTasks(this.selectedProject);
    }

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectTasks(this.selectedProject);
    }


}

export { Controller };