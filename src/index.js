import { UI } from "./ui";
import { Controller } from "./controller";
import { Events } from "./events";
import { Local } from "./local.js";

const main = () => {
        const { projectList, selectedProject } = Local.initObjectsFromLocalStorage();
        const controller = new Controller(projectList, selectedProject);
        const events = new Events(controller);
        events.init();
        const ui = new UI(controller);
        ui.displayProjectTasks(selectedProject);
        ui.displayProjectList(projectList); 
}


main();