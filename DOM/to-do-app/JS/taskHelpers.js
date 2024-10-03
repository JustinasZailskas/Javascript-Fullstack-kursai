import {
  getButtonLabel,
  getTaskNewStatus,
} from "./helpers/statusButtonsHelpers.js";
import { filterStatus, filterByTitle, sortByDate } from "./script.js";
import { data } from "./helpers/data.js";

function getTasksCreatedDate(time) {
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return "Created at: " + year + " " + monthName[month] + " " + day;
}

function showTask(task) {
  const taskLiContainer = document.createElement("div");
  const taskLiElementContainer = document.createElement("div");
  const taskLiElement = document.createElement("li");
  const timeElement = document.createElement("p");
  const bttContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const statusButton = document.createElement("button");

  //text contenct
  taskLiElement.textContent = task.title;
  timeElement.textContent = getTasksCreatedDate(task.createdAt);
  deleteButton.textContent = "Delete";
  statusButton.textContent = getButtonLabel(task.status);

  //styles
  taskLiContainer.classList.add("task");
  taskLiElementContainer.classList.add("taskLiElemContainer");
  taskLiElement.classList.add();
  timeElement.classList.add("timeContainer");
  bttContainer.classList.add("buttonContainer");
  //append child section

  if (task.status === "started") {
    taskLiContainer.classList.add("task--start");
  } else if (task.status === "completed") {
    taskLiContainer.classList.add("task--stop");
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
  taskLiElementContainer.appendChild(taskLiElement);
  taskLiElementContainer.appendChild(timeElement);
  taskLiContainer.appendChild(taskLiElementContainer);
  // taskLiElement.appendChild(timeElement);
  taskLiContainer.appendChild(bttContainer);

  document.getElementById("tasksList").appendChild(taskLiContainer);
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
        if (!filterByTitle) return true;
        return task.title.toLowerCase().includes(filterByTitle);
      })
      .sort((a, b) => {
        if (sortByDate === "old" || !sortByDate) {
          return a.createdAt - b.createdAt;
        }
        if (sortByDate === "new" || !sortByDate) {
          return b.createdAt - a.createdAt;
        }
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
