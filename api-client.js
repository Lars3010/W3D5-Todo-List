const endpointUrl = `https://wincacademydatabase.firebaseio.com/lars/tasks.json`;

/**
 * Function that makes a fetch call to the endpoint and gets all tasks that are stored there. Converts the response into json and returns json.
 */
const getAllTasks = async () => {
    const response = await fetch(endpointUrl, {method: 'GET'});
    const json = await response.json();
    return json;
}

//getAllTasks();