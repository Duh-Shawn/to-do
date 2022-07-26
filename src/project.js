import displayTask from "./displayController"

function Project() {
    const todoList = [];

    const addToList = (toDo) => {
        todoList.push(toDo);
    }

    const getList = () => todoList;

    return { addToList, getList };

}

export default Project;