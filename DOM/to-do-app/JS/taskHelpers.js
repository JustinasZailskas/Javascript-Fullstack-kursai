import { getButtonLabel } from "./helpers/statusButtonsHelpers.js";
import { updateTaskStatus } from "./createNewTask.js";

function showTask(task, index, tasks) {
  const taskLiElement = document.createElement("li");
  const bttContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const statusButton = document.createElement("button");

  //text contenct
  taskLiElement.textContent = task.title;
  deleteButton.textContent = "Delete";
  statusButton.textContent = getButtonLabel(task.status);

  //styles
  taskLiElement.classList.add("task");
  bttContainer.classList.add("buttonContainer");
  //append child section

  if (task.status === "started") {
    taskLiElement.classList.add("task--start");
  } else if (task.status === "completed") {
    taskLiElement.classList.add("task--stop");
  }

  statusButton.addEventListener("click", () => {
    updateTaskStatus(tasks, index, task.status);
    showAllTasks(tasks);
  });
  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    showAllTasks(tasks);
  });

  if (task.status !== "completed") {
    bttContainer.appendChild(statusButton);
  }
  bttContainer.appendChild(deleteButton);
  taskLiElement.appendChild(bttContainer);

  document.getElementById("tasksList").appendChild(taskLiElement);
}

function showAllTasks(tasks) {
  document.getElementById("tasksList").innerHTML = "";

  if (tasks.length !== 0) {
    tasks.forEach((task, index) => {
      showTask(task, index, tasks);
    });
    return;
  }

  const displayContainer = document.createElement("div");
  displayContainer.textContent = "There is no tasks created";
  displayContainer.classList.add("displayMessage");
  document.getElementById("tasksList").appendChild(displayContainer);
}

export { showAllTasks };
