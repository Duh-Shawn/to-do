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
    }
 
    deleteProject = (e) => {
        const projectIndex = e.target.parentNode.parentNode.dataset.indexNumber;
        if(this.projectList[projectIndex] === this.selectedProject) this.ui.contentDeletedDisplay();
        this.removeProjectFromList(projectIndex);
        this.ui.displayProjectList(this.projectList);
        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    }

    viewEditProject = (e) => {
        const projectIndex = e.target.parentNode.parentNode.dataset.indexNumber;
        const project = this.projectList[projectIndex];
        this.ui.displayEditProjectPopup(project);
    }

    editProject = (e, project) => {
        e.preventDefault();
        const name = document.querySelector('#edit-project-form #name').value;
        project.setName(name);
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectList(this.projectList);
    }

    //Task logic
    createTask = (e) => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due').value;
        const priority = document.getElementById('priority').value; 
        const completed = document.getElementById('completed');
        let isTaskComplete;
        if (completed.checked){
            isTaskComplete = true;

        }
        else{
            isTaskComplete = false;
        }
        const task = new Task(title, description, dueDate, priority, isTaskComplete);
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


    viewTaskInfo = (e) => {
        const taskIndex = e.target.parentNode.parentNode.dataset.indexNumber;
        const task = this.selectedProject.taskList[taskIndex];
        this.ui.displayTaskInfo(task, this.selectedProject);
    }

    viewEditTask = (e) => {
        const taskIndex = e.target.parentNode.parentNode.dataset.indexNumber;
        const task = this.selectedProject.taskList[taskIndex];
        this.ui.displayEditTaskPopup(task);
    }

    editTask = (e, task) => {
        e.preventDefault();
        const title = document.querySelector('#edit-task-form #title').value;
        const description = document.querySelector('#edit-task-form #description').value;
        const dueDate = document.querySelector('#edit-task-form #due').value;
        const priority = document.querySelector('#edit-task-form #priority').value;
        const completed = document.querySelector('#edit-task-form #completed').checked;
        
        task.setTitle(title);
        task.setDescription(description);
        task.setDueDate(dueDate);
        task.setPriority(priority);
        task.setCompletedStatus(completed);

        localStorage.setItem('selectedProject', JSON.stringify(this.selectedProject));
        localStorage.setItem('projectList', JSON.stringify(this.projectList));
        this.ui.displayProjectTasks(this.selectedProject); 
    }


}

export { Controller };