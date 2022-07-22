import ToDo from "./todo";
import Project from "./project";

const toDo = ToDo();
const defaultProject = Project();
defaultProject.addToDo(toDo);
defaultProject.toDoList;
 
