import Task from "./task";
import Project from "./project";

const task = Task("test123", "test123", "12/08/2023", 1, "test123", 1);
const defaultProject = Project();
defaultProject.addToList(task);
defaultProject.displayList();