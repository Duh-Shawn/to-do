import { UI } from "./ui";

class Events{

    constructor(controller){
        this.controller = controller;
    }

    init(){
        const newTaskButton = document.getElementById('new-task-button');
        newTaskButton.addEventListener('click', UI.openTaskForm);

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
        const removeTaskButtonList = document.querySelectorAll('.remove-task');
        removeTaskButtonList.forEach(removeButton => {
            removeButton.addEventListener('click', this.controller.deleteTask);
        });
    }
}

export { Events };

