import { Events } from "./events";
import info from './icons/info.svg';
import edit from './icons/edit.svg';

class UI {

    constructor(controller){
        this.controller = controller;
        this.events = new Events(controller);
    }


   //Sanitize and encode HTML from user inputted values
    sanitizeHTML = (input) => {
        const temp = document.createElement('div');
        temp.textContent = input;
        return temp.innerHTML;
    };


    displayEditTaskPopup = (task) => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.edit-task-popup').style.display = 'flex';
        document.querySelector('#edit-task-form #title').value = task.title;
        document.querySelector('#edit-task-form #description').value = task.description;
        document.querySelector('#edit-task-form #due').value = task.dueDate;
        document.querySelector('#edit-task-form #priority').value = task.priority;
        if (task.isCompleted){
            document.querySelector('#edit-task-form #completed').checked = true;
        }
        else{
            document.querySelector('#edit-task-form #completed').checked = false;
        }

        this.events.initTaskEdit(document.querySelector('#edit-task-form #edit-form-submission'), task); //attach event listener for submitting an edit on a task
        
    }

    displayTaskInfo = (task, project) => {
        document.querySelector('.bg-modal').style.display = 'flex';
        const taskInfoPopup = document.querySelector('.task-info-popup');
        taskInfoPopup.innerHTML = `<div class="close-info-popup">+</div><div class="task-info">

        
    <div class="task-info-title">
        <span>Title: </span> <span>${this.sanitizeHTML(task.title)}</span>
    </div>
    <div class="task-info-project">
        <span>Project: </span> <span>${this.sanitizeHTML(project.name)}</span>
    </div>
    <div class="task-info-completion">
        <span>Completed: </span> <span>${this.sanitizeHTML(task.isCompleted)}</span>
    </div>
    <div class="task-info-priority">
        <span>Priority: </span> <span>${this.sanitizeHTML(task.priority)}</span>
    </div>
    <div class="task-info-date">
        <span>Due Date: </span> <span>${this.sanitizeHTML(task.dueDate)}</span>
    </div>
    <div class="task-info-details">
        <span>Description: </span> <span class="task-info-description">${this.sanitizeHTML(task.description)}</span>
    </div></div>`;
        document.querySelector('.bg-modal').appendChild(taskInfoPopup);
        taskInfoPopup.style.display = 'block';
        this.events.initCloseInfoPopupButton(taskInfoPopup);
    }

    displayProjectList = (projectList) => {
        this.clearProjectContainer();
        for (let i = 0; i < projectList.length; i++){
            const projectDiv = document.createElement('div');
            projectDiv.classList = "project";
            projectDiv.dataset.indexNumber = i;
            projectDiv.innerHTML=`<p class="project-name">${this.sanitizeHTML(projectList[i].name)}</p><div class="remove-project">+</div>`
            
            this.events.initProject(projectDiv); //attach events to project
            document.querySelector('.projects-container').appendChild(projectDiv);
        }
    }
    
    clearProjectContainer = () => {
        document.querySelector('.projects-container').innerHTML = "";
    }

    clearProjectContent = () => {
        document.querySelector('.project-data').innerHTML = "";
    }

    contentDeletedDisplay = () => {
        document.querySelector('.content h1').innerHTML = "Project has successfully been deleted";
        document.querySelector('.project-data').innerHTML = " This project has been deleted please select a new one";
    }

    displayProjectTasks = (project) => {
        const heading = document.querySelector('.content h1');
        heading.textContent = project.name;
        this.clearProjectContent();
        for (let i = 0; i < project.taskList.length; i++){
            const task = project.taskList[i];
            const taskDiv = document.createElement('div');
            taskDiv.classList = "task";
            taskDiv.dataset.indexNumber = i;
            taskDiv.innerHTML=`<div class="task-left"><input class="task-completed-checkbox" type="checkbox"><p class="task-title">${this.sanitizeHTML(task.title)}</p></div><div class="task-right"><p class="task-due">${this.sanitizeHTML(task.dueDate)}</p><img class="task-info-icon"><img class="task-edit-icon"><div class="remove-task">+</div></div>`;
            // const editLogo = taskDiv.querySelector('.edit-icon');
            taskDiv.querySelector('.task-info-icon').src = info;
            taskDiv.querySelector('.task-edit-icon').src = edit;
            // editLogo
            if (task.isCompleted === true){
                taskDiv.querySelector('.task-left').querySelector('.task-completed-checkbox').checked = true;
            }
            this.events.initTask(taskDiv); //attach events to task
            document.querySelector('.project-data').appendChild(taskDiv);
        }
    }

    //popups and forms

    static openTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.new-task-popup').style.display = 'flex';
    }

    static closeForm = (e) => {
        document.querySelector('.bg-modal').style.display = 'none';
        e.target.parentNode.style.display = 'none';
    }

    static closeEditPopUp = () => {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.edit-task-popup').style.display = 'none';
    }

    static closeTaskPopUp = (e) => {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.new-task-popup').style.display = 'none';
    }

    static closeProjectPopUp = (e) => {
        document.querySelector('.bg-modal').style.display = 'none';
        document.querySelector('.new-project-popup').style.display = 'none';
    }

    static openProjectForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.new-project-popup').style.display = 'flex';
    }

    static closeTaskInfo = () => {
        document.querySelector('.task-info-popup').style.display = 'none';
        document.querySelector('.bg-modal').style.display = 'none';
    }

}


export { UI }