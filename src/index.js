import { UI } from "./ui";
import { Project } from "./project";
import { Task } from "./task";
import { Controller } from "./controller";
import { Events } from "./events";

const localListContainsSelectedProject = () => {
    const localProjectList = JSON.parse(localStorage.getItem('projectList'));
    const localSelectedProject = JSON.parse(localStorage.getItem('selectedProject'));
    return localProjectList.some(project => project.id === localSelectedProject.id);

}

const convertJsonToProject = (jsonProject) => {
    const jsonTaskList = jsonProject.taskList;
    const project = new Project(jsonProject.name);
    jsonTaskList.forEach(jsonTask => {
            const task = new Task(jsonTask.title, jsonTask.description, jsonTask.dueDate, jsonTask.priority);
            project.addTask(task);
    });
    return project;
}


const main = () => {

    let selectedProject;
    let projectList = [];
   //local storage is empty
    if (localStorage.length === 0){  
        selectedProject = new Project("Default");
        projectList = [];
        projectList.push(selectedProject);
        localStorage.setItem('projectList', JSON.stringify(projectList));
        localStorage.setItem('selectedProject', JSON.stringify(selectedProject));
    }
    else{
        const localProjectList = JSON.parse(localStorage.getItem('projectList'));
        //no projects saved locally. Start by default
        if (localProjectList.length === 0){ 
            selectedProject = new Project("Default");
            projectList = [];
            projectList.push(selectedProject);
            localStorage.setItem('projectList', JSON.stringify(projectList));
            localStorage.setItem('selectedProject', JSON.stringify(selectedProject));
        }
        //projects are saved locally
        else{ 
            const localSelectedProject = JSON.parse(localStorage.getItem('selectedProject'));
            let foundSelectedProject = false;
            if (localListContainsSelectedProject()){
                selectedProject = convertJsonToProject(localSelectedProject);
                foundSelectedProject = true;
            }
            localProjectList.forEach(jsonProject => {
                const project = convertJsonToProject(jsonProject);
                projectList.push(project);
            });
            if (!foundSelectedProject){
                selectedProject = projectList[0];
            }
        }
    }

        const controller = new Controller(projectList, selectedProject);
        const events = new Events(controller);
        events.init();
        const ui = new UI(controller);
    
        ui.displayProjectTasks(selectedProject);
        ui.displayProjectList(projectList); 
}


main();