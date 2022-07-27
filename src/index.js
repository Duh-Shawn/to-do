import Task from "./task";
import Project from "./project";
import ToDo from "./todo";
import DisplayController from "./displayController";


const displayController = DisplayController();
displayController.initEventListeners();
const toDoList = ToDo;
const defaultProject = Project();
const selectedProject = defaultProject;

const task = Task("test", "test", "12/08/1996", 1, "any", 1);



const createNewTask = (e) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('due').value;
    const priority = document.getElementById('priority').value; 
    const notes = document.getElementById('notes').value; 
    const completed = document.getElementById('completed').value;
    const task = Task(title, description, date, priority, notes, completed);
    selectedProject.addToList(task);
    displayController.displayProject(selectedProject);
}

const createNewTaskButton = document.getElementById('form-submission');
createNewTaskButton.addEventListener('click', createNewTask);
