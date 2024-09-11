import { showAllTasks } from "./taskHelpers.js";
import { createNewTask } from "./createNewTask.js";

const tasks = [];

showAllTasks(tasks);

document.getElementById("addButton").addEventListener("click", () => {
  createNewTask(tasks);
  showAllTasks(tasks);
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createNewTask(tasks);
    showAllTasks(tasks);
  }
});
