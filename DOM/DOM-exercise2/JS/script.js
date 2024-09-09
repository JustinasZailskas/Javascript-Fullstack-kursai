import { showAllTasks, createNewTask } from "./taskHelpers.js";

const tasks = ["Task 1", "Task2"];

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
