import { showAllTasks } from "./taskHelpers.js";
import { createNewTask } from "./createNewTask.js";
import { getUserInfo } from "./services/getUser.js";

export let filterStatus = "all";
export let filterByTitle = "";
export let sortByDate = "old";

showAllTasks();

document.getElementById("addButton").addEventListener("click", () => {
  createNewTask();
  showAllTasks();
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createNewTask();
    showAllTasks();
  }
});

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  showAllTasks();
});

document.getElementById("searchButton").addEventListener("click", () => {
  createNewTask();
  showAllTasks();
});

document.getElementById("filterByTitle").addEventListener("input", () => {
  filterByTitle = document.getElementById("filterByTitle").value.toLowerCase();
  showAllTasks();
});

document.getElementById("sortByDate").addEventListener("change", () => {
  sortByDate = document.getElementById("sortByDate").value;
  console.log(sortByDate);
  showAllTasks();
});

async function printUser() {
  const { success, data, error } = await getUserInfo();
  if (success) {
    const username = document.createElement("h5");
    username.textContent = data.username;
    document.getElementById("user").appendChild(username);
    return;
  }
  const errorMessage = document.createElement("h5");
  errorMessage.textContent = error;
  document.getElementById("user").appendChild(errorMessage);
}

printUser();
