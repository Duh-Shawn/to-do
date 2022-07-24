const displayTask = (task) => {

    const content = document.querySelector('.content');
    const taskDiv = document.createElement('div');
    taskDiv.classList = "task-div";

    const checkBox = document.createElement('button');
    checkBox.classList = "task-checkbox";

    const title = document.createElement('p');
    title.textContent = task.getTitle();
    title.classList = "task-title";

    const dueDate = document.createElement('p');
    dueDate.textContent = task.getDueDate();
    dueDate.classList = "task-date"

    // const desc = document.createElement('p');
    // desc.textContent = task.getDescription();
    // desc.classList = "task-description";

    // const notes = document.createElement('p');
    // notes.textContent = task.getNotes();
    // notes.classList = "task-notes";

    const priority = document.createElement('p');
    priority.textContent = task.getPriority();
    priority.classList = "task-priority";
    
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(title);
    taskDiv.appendChild(dueDate);
    // taskDiv.appendChild(desc);
    // taskDiv.appendChild(notes);
    taskDiv.appendChild(priority);

    content.appendChild(taskDiv);

}

export default displayTask;