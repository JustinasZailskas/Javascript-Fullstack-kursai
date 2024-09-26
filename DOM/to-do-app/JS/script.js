import { showAllTasks } from "./taskHelpers.js";
import { createNewTask } from "./createNewTask.js";
import { data } from "./helpers/data.js";
import { getUserInfo } from "./services/getUser.js";

export let filterStatus = "all";

showAllTasks(data.tasks);

document.getElementById("addButton").addEventListener("click", () => {
  createNewTask();
  showAllTasks(data.tasks);
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    createNewTask();
    showAllTasks(data.tasks);
  }
});

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  showAllTasks(data.tasks);
});

// fetch("https://jsonplaceholder.typicode.com/users/4")
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user);
//     const username = document.createElement("h5");
//     username.textContent = user.username;
//     document.getElementById("user").appendChild(username);
//   });

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
