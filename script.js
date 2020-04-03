
const createTaskItem = (task) => {
    const div = document.createElement('div');
    div.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    const p = document.createElement('p');

    const deleteButton = document.createElement('button');
    
}

/**
 * Function that converts the object with hashes into an array with tasks.
 */
const convertResponse = async () => {
    const result = await getAllTasks();
    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done
    }));
    console.log("After the tasks array", tasks);
}

convertResponse();