class UI {

    static removeTask(e){
        e.target.parentNode.remove();
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
            taskDiv.innerHTML=`<p class="task-title">${project.taskList[i].title}</p><p class="task-description">${project.taskList[i].description}</p><p class="task-due">${project.taskList[i].dueDate}</p><p class="task-priority">${project.taskList[i].priority}</p><button class="remove-task">X</button>`
            document.querySelector('.project-data').appendChild(taskDiv);
        }
        console.log(document.querySelector('.project-data'));
    }

    static openTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    static closeTaskForm = () => {
        document.querySelector('.bg-modal').style.display = 'none';
    }
}


export { UI }