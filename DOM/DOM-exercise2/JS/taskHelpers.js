function showTask(task, index, tasks) {
  const taskItem = document.createElement("li");
  const deleteButton = document.createElement("button");

  //text contenct
  taskItem.textContent = task;
  deleteButton.textContent = "Delete";

  //styles
  taskItem.classList.add("task");
  deleteButton.style.marginLeft = "10px";

  //append child section
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
    showTask(task, index, tasks);
  });
}

function createNewTask(tasks) {
  const newPlanValue = document.getElementById("newTaskInput").value;
  if (!newPlanValue.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }
  tasks.push(newPlanValue);
  document.getElementById("newTaskInput").value = "";
}

export { showAllTasks, createNewTask };
