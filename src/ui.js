class UI {

    static clearProjectContent = () => {
        document.querySelector('.project-data').innerHTML = "";
    }

    static displayProjectTasks = (project) => {
        const heading = document.querySelector('.content h1');
        heading.textContent = project.name;
        this.clearProjectContent();
        project.taskList.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList = "task";
            taskDiv.innerHTML=`<p class="task-title">${task.title}</p><p class="task-description">${task.description}</p><p class="task-due">${task.dueDate}</p><p class="task-priority">${task.priority}</p><button class="task-remove">X</button>`
            document.querySelector('.project-data').appendChild(taskDiv);
        }); 
    }

    static openTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    static closeTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'none';
    }


    static initEventListeners(){

        const newTaskButton = document.getElementById('new-task-button');
        newTaskButton.addEventListener('click', this.openTaskForm);

        const closeFormButton = document.querySelector('.close-popup');
        closeFormButton.addEventListener('click', this.closeTaskForm);
    }
}


export { UI }