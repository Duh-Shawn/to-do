import { Events } from "./events";

class UI {

    constructor(controller){
        this.controller = controller;
        this.events = new Events(controller);
    }

    displayProjectList = (projectList) => {
        this.clearProjectContainer();
        for (let i = 0; i < projectList.length; i++){
            const projectDiv = document.createElement('div');
            projectDiv.classList = "project";
            projectDiv.dataset.indexNumber = i;
            projectDiv.innerHTML=`<p class="project-name">${projectList[i].name}</p><div class="remove-project">+</div>`
            
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
            taskDiv.innerHTML=`<div class="task-left"><input class="task-completed-checkbox" type="checkbox"><p class="task-title">${task.title}</p></div><div class="task-right"><p class="task-due">${task.dueDate}<div class="remove-task">+</div></div>`;
            if (task.isCompleted === true){
                taskDiv.querySelector('.task-left').querySelector('.task-completed-checkbox').checked = true;
            }
            this.events.initTask(taskDiv); //attach events to task
            document.querySelector('.project-data').appendChild(taskDiv);
        }
    }

    static openTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.new-task-popup').style.display = 'flex';
    }

    static closeForm = (e) => {
        document.querySelector('.bg-modal').style.display = 'none';
        e.target.parentNode.style.display = 'none';
    }

    static openProjectForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.querySelector('.new-project-popup').style.display = 'flex';
    }
}


export { UI }