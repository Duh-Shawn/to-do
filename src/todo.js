function ToDo(title, desc, dueDate, priority, notes, checklist) {

    const getTitle = () => title;
    const getDesc = () => desc;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getCheckList = () => checklist;
    
    const setTitle = (val) => {
        title = val;
    }

    const setDesc = (val) => {
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

    const setCheckList = (val) => {
        checklist = val;
    }
    

    return { getTitle, getDesc, getDueDate, getPriority, getNotes, getCheckList, setTitle, setDesc, setDueDate, setPriority, setNotes, setCheckList };
}

export default ToDo;