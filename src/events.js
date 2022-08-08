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

    initTask(taskDiv){
        taskDiv.querySelector('.remove-task').addEventListener('click', this.controller.deleteTask);
        taskDiv.querySelector('.task-left').querySelector('.task-completed-checkbox').addEventListener('click', this.controller.markTaskCompleted);
    }

    initProject(projectDiv){
        projectDiv.querySelector('.remove-project').addEventListener('click', this.controller.deleteProject);
        projectDiv.querySelector('.project-name').addEventListener('click', this.controller.setSelectedProject);
    }

}

export { Events };

