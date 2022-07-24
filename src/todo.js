function ToDo(title, desc, dueDate, priority, notes, completed) {

    const getTitle = () => title;
    const getDescription = () => desc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const isCompleted = () => completed;
    
    const setTitle = (val) => {
        title = val;
    }

    const setDescription = (val) => {
        desc = val;
    }

    const setDueDate = (val) => {
        dueDate = val;
    }

    const setPriority = (val) => {
        priority = val;
    }

    const setNotes = (val) => {
        notes = val;
    }

    const setCompleted = (val) => {
        completed = val;
    }
    

    return { getTitle, getDescription, getDueDate, getPriority, getNotes, setCompleted, setTitle, setDescription, setDueDate, setPriority, setNotes, isCompleted };
}

export default ToDo;