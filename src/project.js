import displayTask from "./displayController"

function Project() {
    const todoList = [];

    const addToList = (toDo) => {
        todoList.push(toDo);
    }

    const getToDoList = () => todoList;

    return { getToDoList, addToList};

}

export default Project;