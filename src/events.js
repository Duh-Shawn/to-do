import { UI } from "./ui";

class Events{

    constructor(controller){
        this.controller = controller;
    }

    //black below is used for initializing static html elements. Called when app is run

    init(){
        const newTaskButtonList = document.querySelectorAll('.new-task-button');
        newTaskButtonList.forEach(newTaskButton => {
            newTaskButton.addEventListener('click', UI.openTaskForm);
        });
        
        const newProjectButton = document.getElementById('new-project-button');
        newProjectButton.addEventListener('click', UI.openProjectForm);
    
        const closeFormButtons = document.querySelectorAll('.close-popup');
        closeFormButtons.forEach(button => {
            button.addEventListener('click', UI.closeForm);
        });
        
        const createTaskButton = document.getElementById('task-form-submission');
        createTaskButton.addEventListener('click', (e) => {
            this.controller.createTask(e);
            UI.closeTaskPopUp();
        });

        const createProjectButton = document.getElementById('project-form-submission');
        createProjectButton.addEventListener('click', (e) => {
            this.controller.createProject(e);
            UI.closeProjectPopUp();
        });
    }

    //block below is used to init buttons / features on elements created dynamically with JS

    initTask(taskDiv){
        taskDiv.querySelector('.remove-task').addEventListener('click', this.controller.deleteTask);
        taskDiv.querySelector('.task-completed-checkbox').addEventListener('click', this.controller.markTaskCompleted);
        taskDiv.querySelector('.task-info-icon').addEventListener('click', this.controller.viewTaskInfo);
        taskDiv.querySelector('.task-edit-icon').addEventListener('click', this.controller.viewEditTask);
    }

    initProject(projectDiv){
        projectDiv.querySelector('.remove-project').addEventListener('click', this.controller.deleteProject);
        projectDiv.querySelector('.project-name').addEventListener('click', this.controller.setSelectedProject);
        projectDiv.querySelector('.project-edit-icon').addEventListener('click', this.controller.viewEditProject);
    }
    initCloseInfoPopupButton(taskInfoPopup){
        taskInfoPopup.querySelector('.close-info-popup').addEventListener('click', UI.closeTaskInfo);
    }

    //listener waits for edit submission, passes the callback and task back to the controller
    initTaskEdit(editButton, task){
        editButton.addEventListener('click', (e) => {
            console.log(task);
            this.controller.editTask(e, task);
            UI.closeEditPopUp(e);
        });
        
    }

    initProjectEdit(editButton, project){
        editButton.addEventListener('click', (e) => {
            this.controller.editProject(e, project);
            UI.closeEditPopUp(e);
        });
        
    }

}

export { Events };

