import { UI } from "./ui";

class Events{

    constructor(controller){
        this.controller = controller;
    }

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
        createTaskButton.addEventListener('click', this.controller.createTask);

        const createProjectButton = document.getElementById('project-form-submission');
        createProjectButton.addEventListener('click', this.controller.createProject);
        
    }

    initRemoveTaskListener(){
        const removeButtonList = document.querySelectorAll('.remove-task');
        removeButtonList.forEach(removeButton => {
            removeButton.addEventListener('click', this.controller.deleteTask);
        });
    }

    initRemoveProjectListener(){
        const removeButtonList = document.querySelectorAll('.remove-project');
        removeButtonList.forEach(removeButton => {
            removeButton.addEventListener('click', this.controller.deleteProject);
        });
    }
}

export { Events };

