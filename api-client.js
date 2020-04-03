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

const postTask = async(task) => {
    try {
        const post = await fetch(endpointUrl, {method: 'GET', headers: {'Content-Type': 'application/json'} });
        return post;
    } catch (error) {
        console.log(error);
        return error;
    }
}