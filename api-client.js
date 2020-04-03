const endpointUrl = `https://wincacademydatabase.firebaseio.com/lars/tasks.json`;

/**
 * Function that makes a fetch call to the endpoint and gets all tasks that are stored there. Converts the response into json and returns json.
 */
const getAllTasks = async () => {
    try {
        const response = await fetch(endpointUrl, {method: 'GET'});
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

/**
 * Function that posts a task object to the database
 * @param {Object} task The task object
 * @param {string} task.description the description of the task
 * @param {boolean} task.done bool that decides if the task had been completed - default: false
 */
const postTask = async(task) => {
    try {
        const post = await fetch(endpointUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task) });
        return post;
    } catch (error) {
        console.log(error);
    }
}