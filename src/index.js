import { UI } from "./ui";
import { Project } from "./project";
import { Task } from "./task";
import { Controller } from "./controller";

UI.initEventListeners();
const defaultProject = new Project("Default");
const projectList = [];
projectList.push(defaultProject);
let selectedProject = defaultProject;
const controller = new Controller(projectList, selectedProject);


// const task1 = new Task("title", "description", "12/08/1996", "low");
// const task2 = new Task("title", "description", "12/08/1996", "low");
// const task3 = new Task("title", "description", "12/08/1996", "low");
// const task4 = new Task("title", "description", "12/08/1996", "low");
// selectedProject.addTask(task1);
// selectedProject.addTask(task2);
// selectedProject.addTask(task3);
// selectedProject.addTask(task4);


UI.displayProjectTasks(selectedProject);