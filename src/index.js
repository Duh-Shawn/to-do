import { UI } from "./ui"
import { Project } from "./project"
import { Task } from "./task"




const defaultProject = new Project("Default");
const task1 = new Task("title", "description", "12/08/1996", "low");
const task2 = new Task("title", "description", "12/08/1996", "low");
const task3 = new Task("title", "description", "12/08/1996", "low");
const task4 = new Task("title", "description", "12/08/1996", "low");
defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
defaultProject.addTask(task4);



UI.displayProjectTasks(defaultProject);
UI.initEventListeners();