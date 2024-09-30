import {
  getButtonLabel,
  getTaskNewStatus,
} from "./helpers/statusButtonsHelpers.js";
import { filterStatus, filterByTitle } from "./script.js";
import { data } from "./helpers/data.js";

function showTask(task) {
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
    data.changeTaskStatus(task.id, getTaskNewStatus(task.status));
    showAllTasks();
  });
  deleteButton.addEventListener("click", () => {
    data.deleteTask(task.id);
    showAllTasks();
  });

  if (task.status !== "completed") {
    bttContainer.appendChild(statusButton);
  }
  bttContainer.appendChild(deleteButton);
  taskLiElement.appendChild(bttContainer);

  document.getElementById("tasksList").appendChild(taskLiElement);
}

function showAllTasks() {
  document.getElementById("tasksList").innerHTML = "";

  if (data.tasks.length !== 0) {
    data.tasks
      .filter((task) => {
        if (filterStatus === "all" || !filterStatus) return true;
        return task.status === filterStatus;
      })
      .filter((task) => {
        if (filterByTitle === "" || !filterByTitle) return true;
        return task.title.toLowerCase() === filterByTitle.toLowerCase();
      })
      .forEach((task) => {
        showTask(task);
      });
    return;
  }

  const displayContainer = document.createElement("div");
  displayContainer.textContent = "There is no tasks created";
  displayContainer.classList.add("displayMessage");
  document.getElementById("tasksList").appendChild(displayContainer);
}

export { showAllTasks };
