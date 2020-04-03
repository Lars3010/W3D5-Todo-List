
const createTaskItem = (task) => {
    const div = document.createElement('div');
    div.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    if(task.done) {
        checkbox.checked = true;
    }
    div.appendChild(checkbox);

    const p = document.createElement('p');
    const taskdescription = document.createTextNode(task.description);
    p.appendChild(taskdescription);
    div.appendChild(p);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    div.appendChild(deleteButton);
    console.log(div);
}
// const task = {
//     id: '-LroB4tAZnuNhYcnyIYf',
//     description: 'dit is de omschrijving van de taak',
//     done: false
//   };
// createTaskItem(task);



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
    return tasks;
}

convertResponse();