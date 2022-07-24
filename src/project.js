import displayTask from "./displayController"

function Project() {
    const todoList = [];

    const addToList = (toDo) => {
        todoList.push(toDo);
    }

    const getList = () => todoList;

    const displayList = () => {
        const content = document.querySelector(".content");
        todoList.forEach(listItem => {
            
            displayTask(listItem); //call function from displayController to append the current task to the DOM.
        });  
    }

    return { addToList, getList, displayList };

}

export default Project;