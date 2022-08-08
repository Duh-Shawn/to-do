import { Project } from "./project";
import { Task } from "./task";


class Local{

    
    //boolean check used to determine if the previously stored selected project has been deleted or not
    static localListContainsSelectedProject = () => {
        const localProjectList = JSON.parse(localStorage.getItem('projectList'));
        const localSelectedProject = JSON.parse(localStorage.getItem('selectedProject'));
        return localProjectList.some(project => project.id === localSelectedProject.id);
    
    }
    
    //helper method to handle converting json data to project objects
    static convertJsonToProject = (jsonProject) => {
        const jsonTaskList = jsonProject.taskList;
        const project = new Project(jsonProject.name);
        jsonTaskList.forEach(jsonTask => {
                const task = new Task(jsonTask.title, jsonTask.description, jsonTask.dueDate, jsonTask.priority, jsonTask.isCompleted);
                project.addTask(task);
        });
        return project;
    }

    //convert local storage data to true object for use by the controller
    static initObjectsFromLocalStorage = () => {
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
                if (this.localListContainsSelectedProject()){
                    selectedProject = this.convertJsonToProject(localSelectedProject);
                    foundSelectedProject = true;
                }
                localProjectList.forEach(jsonProject => {
                    const project = this.convertJsonToProject(jsonProject);
                    projectList.push(project);
                });
                if (!foundSelectedProject){
                    selectedProject = projectList[0];
                }
            }
        }

        return { projectList, selectedProject };

    }
}

export { Local }