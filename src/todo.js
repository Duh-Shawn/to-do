const ToDo = () => { 
 
    // array to hold multiple projects 
    const projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const getProjects = () => projects;

    return { addProject, getProjects}

};

export default ToDo;