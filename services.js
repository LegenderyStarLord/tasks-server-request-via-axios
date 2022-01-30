//Server request via axios

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5555`);
    return promise.then((response) => {
        return response.data;
    });   
};

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=5555&title=${title}`);
    return promise.then((response) => {
        return response.data;
    });   
};

function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=5555&taskId=${id}`);
    return promise.then((response) => {
        return response.data;
    });   
};


