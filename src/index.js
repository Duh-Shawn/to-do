import ToDo from "./todo";
import Project from "./project";

const toDo = ToDo("test123", "test123", "12/08/2023", 1, "test123", 1);
const defaultProject = Project();
defaultProject.addToList(toDo);
defaultProject.displayList();