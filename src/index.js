import { UI } from "./ui";
import { Project } from "./project";
import { Task } from "./task";
import { Controller } from "./controller";
import { Events } from "./events";

const defaultProject = new Project("Default");
const projectList = [];
projectList.push(defaultProject);
let selectedProject = defaultProject;

const controller = new Controller(projectList, selectedProject);
const events = new Events(controller);
events.init();


/* 
const ui = new UI(controller);


const task1 = new Task("title", "description", "12/08/1996", "low");
const task2 = new Task("title", "description", "12/08/1996", "low");
const task3 = new Task("title", "description", "12/08/1996", "low");
const task4 = new Task("title", "description", "12/08/1996", "low");
selectedProject.addTask(task1);
selectedProject.addTask(task2);
selectedProject.addTask(task3);
selectedProject.addTask(task4);


ui.displayProjectTasks(selectedProject);
ui.displayProjectList(projectList);
    */