import { showAllTasks } from "./taskHelpers.js";
import { createNewTask } from "./createNewTask.js";

const tasks = [
  {
    title: "Task1",
    status: "created",
  },
  {
    title: "Task2",
    status: "started",
  },
  {
    title: "Task3",
    status: "completed",
  },
  {
    title: "Task4",
    status: "completed",
  },
  {
    title: "Task6",
    status: "created"
  }
];

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
