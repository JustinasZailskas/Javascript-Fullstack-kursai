const tasks = [];

function showTask(task, index) {
  const taskItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  taskItem.textContent = task;
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  taskItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    showAllTasks(tasks);
  });
  document.getElementById("tasksList").appendChild(taskItem);
}

function showAllTasks(tasks) {
  document.getElementById("tasksList").innerHTML = "";
  tasks.forEach((task, index) => {
    showTask(task, index);
  });
}
showAllTasks(tasks);

function createNewTask() {
  const newPlanValue = document.getElementById("newTaskInput").value;
  if (!newPlanValue.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }
  tasks.push(newPlanValue);
  document.getElementById("newTaskInput").value = "";
}

document.getElementById("addButton").addEventListener("click", () => {
  createNewTask();
  showAllTasks(tasks);
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createNewTask();
    showAllTasks(tasks);
  }
});
