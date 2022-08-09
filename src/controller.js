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
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    setSelectedProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        this.selectedProject = this.projectList[projectIndex];
        this.ui.displayProjectTasks(this.selectedProject);
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
    }

    removeProjectFromList = (index) => {
        this.projectList.splice(index, 1);
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    deleteProject = (e) => {
        const projectIndex = e.target.parentNode.dataset.indexNumber;
        if(this.projectList[projectIndex] === this.selectedProject) this.ui.contentDeletedDisplay();
        this.removeProjectFromList(projectIndex);
        this.ui.displayProjectList(this.projectList);
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    //Task logic
    createTask = (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due').value;
        const priority = document.getElementById('priority').value; 
        const task = new Task(title, description, dueDate, priority, false);
        this.selectedProject.addTask(task);
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectTasks(this.selectedProject);
    }

    deleteTask = (e) => {
        const taskIndex = e.target.parentNode.parentNode.dataset.indexNumber;
        this.selectedProject.removeTask(taskIndex);
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectTasks(this.selectedProject); 
    }

    markTaskCompleted = (e) => {
        if (e.target.checked){
            const taskIndex = e.target.parentNode.parentNode.dataset.indexNumber;
            const task = this.selectedProject.taskList[taskIndex];
            task.markComplete();
        }
        else{
            const taskIndex = e.target.parentNode.parentNode.dataset.indexNumber;
            const task = this.selectedProject.taskList[taskIndex];
            task.markIncomplete();
        }
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }


}

export { Controller };