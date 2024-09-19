import { data } from "./helpers/data.js";

function createNewTask() {
  const newTaskTitle = document.getElementById("newTaskInput").value;
  if (!newTaskTitle.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }
  data.createTask(newTaskTitle);
  document.getElementById("newTaskInput").value = "";
}

export { createNewTask };
