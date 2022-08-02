import { UI } from "./ui";

class Events{

    constructor(controller){
        this.controller = controller;
    }

    init(){
        const newTaskButton = document.getElementById('new-task-button');
        newTaskButton.addEventListener('click', UI.openTaskForm);
    
        const closeFormButton = document.querySelector('.close-popup');
        closeFormButton.addEventListener('click', UI.closeTaskForm);
    
        const createTaskButton = document.getElementById('form-submission');
        createTaskButton.addEventListener('click', this.controller.createTask);
    }

    initRemoveTaskListener(){
        const removeTaskButtonList = document.querySelectorAll('.remove-task');
        removeTaskButtonList.forEach(removeButton => {
            removeButton.addEventListener('click', this.controller.deleteTask);
        });
    }
}

export { Events };

