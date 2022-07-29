class UI {

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