import { showAllTasks } from "./taskHelpers.js";
import { createNewTask } from "./createNewTask.js";

const tasks = [
  {
    id: 1,
    title: "Task1",
    status: "created",
  },
  {
    id: 2,
    title: "Task2",
    status: "started",
  },
  {
    id: 3,
    title: "Task3",
    status: "completed",
  },
  {
    id: 4,
    title: "Task4",
    status: "completed",
  },
  {
    id: 5,
    title: "Task5",
    status: "created",
  },
  {
    id: 6,
    title: "Task6",
    status: "started",
  },
];

export let filterStatus = "all";
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

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  showAllTasks(tasks);
});
