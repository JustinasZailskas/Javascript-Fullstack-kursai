import { getTaskNewStatus } from "./helpers/statusButtonsHelpers.js";

function createNewTask(tasks) {
  const newPlanValue = document.getElementById("newTaskInput").value;
  if (!newPlanValue.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }
  let newTaskObject = {
    title: newPlanValue,
    status: "created",
  };
  tasks.push(newTaskObject);
  document.getElementById("newTaskInput").value = "";
}

function updateTaskStatus(tasks, taskIndex, taskStatus) {
  const newObj = { ...tasks[taskIndex], status: getTaskNewStatus(taskStatus) };
  tasks.splice(taskIndex, 1, newObj);
}

export { createNewTask, updateTaskStatus };
