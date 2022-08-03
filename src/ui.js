class UI {

    static removeTask(e){
        e.target.parentNode.remove();
    }


    static displayProjectList = (projectList) => {
        this.clearProjectContainer();
        for (let i = 0; i < projectList.length; i++){
            const projectDiv = document.createElement('div');
            projectDiv.classList = "project";
            projectDiv.dataset.indexNumber = i;
            projectDiv.innerHTML=`<p class="project-name">${projectList[i].name}</p><div class="remove-project">+</div>`
            document.querySelector('.projects-container').appendChild(projectDiv);
        }
    }
    
    static clearProjectContainer = () => {
        document.querySelector('.projects-container').innerHTML = "";
    }

    static clearProjectContent = () => {
        document.querySelector('.project-data').innerHTML = "";
    }

    static displayProjectTasks = (project) => {
        const heading = document.querySelector('.content h1');
        heading.textContent = project.name;
        this.clearProjectContent();
        for (let i = 0; i < project.taskList.length; i++){
            const taskDiv = document.createElement('div');
            taskDiv.classList = "task";
            taskDiv.dataset.indexNumber = i;
            taskDiv.innerHTML=`<p class="task-title">${project.taskList[i].title}</p><p class="task-description">${project.taskList[i].description}</p><p class="task-due">${project.taskList[i].dueDate}</p><p class="task-priority">${project.taskList[i].priority}</p><div class="remove-task">+</div>`
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