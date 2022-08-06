import { UI } from "./ui";
import { Project } from "./project";
import { Task } from "./task";
import { Controller } from "./controller";
import { Events } from "./events";

const main = () => {

    //first time app is ever run
    if (JSON.parse(localStorage.getItem('projectList')) === null){
        let defaultProject = new Project("Default");
        let projectList = [];
        projectList.push(defaultProject);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }
    else{
        const localProjectList = JSON.parse(localStorage.getItem('projectList'));
        let defaultProject;
        let projectList = [];
        if (localProjectList.length === 0){ //local storage is empty
            defaultProject = new Project("Default");
            projectList = [];
            projectList.push(defaultProject);
        }
        else{
            localProjectList.forEach(jsonProject => {
                const jsonTaskList = jsonProject.taskList;
                const project = new Project(jsonProject.name);
                jsonTaskList.forEach(jsonTask => {
                    const task = new Task(jsonTask.title, jsonTask.description, jsonTask.dueDate, jsonTask.priority);
                    project.addTask(task);
                });
                projectList.push(project);
            });
            defaultProject = projectList[0];
        }

        const controller = new Controller(projectList, defaultProject);
        const events = new Events(controller);
        events.init();
        const ui = new UI(controller);
        ui.displayProjectTasks(defaultProject);
        ui.displayProjectList(projectList); 
    }
}


main();