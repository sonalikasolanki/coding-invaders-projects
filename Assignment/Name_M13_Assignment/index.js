
function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput !== "") {
        var todoItem = createTodoItem(taskInput);
        document.getElementById("taskList").appendChild(todoItem);
        document.getElementById("taskInput").value = "";
    }
}

function addPriorityTask() {
    var taskInput = document.getElementById("taskInput").value;
    if (taskInput !== "") {
        var todoItem = createTodoItem(taskInput);
        var taskList = document.getElementById("taskList");
        var firstTodoItem = taskList.firstElementChild;
        taskList.insertBefore(todoItem, firstTodoItem);
        document.getElementById("taskInput").value = "";
    }
}

function createTodoItem(task) {
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    var todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = task;

    var completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerText = "Completed";
    completeButton.addEventListener("click", function() {
        this.parentElement.style.opacity = "0.3";
    });

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        this.parentElement.remove();
    });

    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(deleteButton);

    return todoDiv;
}

function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
