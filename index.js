//Server request via axios
const resultBlock = document.getElementById("result");
const pageNumberEl = document.getElementById("page-number");
const clickMeButton = document.getElementById("button");
const getTasksButton = document.getElementById("get-tasks");
const createTasksButton = document.getElementById("create-tasks");
const deleteTasksButton = document.getElementById("delete-tasks");


createTasksButton.addEventListener("click", () => {
    let textAreaValue = document.getElementById("area").value;
    createTask(textAreaValue);
    document.getElementById("area").value = "";
});


deleteTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then((tasks) => {
        let lastTask = (tasks[tasks.length - 1]);
        return(lastTask);
    })
    .then((lastTask) => {
        let lastTskid = lastTask.id;
        deleteTask(lastTskid);
    })

   
});

getTasksButton.addEventListener("click", () => { 
    const promise = getTasks();
    promise.then(onTasksRecieved); 
});


function onTasksRecieved(tasks) {
    const result = document.querySelector("#tasks-result");
    result.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = task.title;
        document.querySelector("#tasks-result").appendChild(li);
    });
};










