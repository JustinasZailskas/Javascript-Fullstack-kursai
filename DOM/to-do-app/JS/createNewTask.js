import { getTaskNewStatus } from "./helpers/statusButtonsHelpers.js";

function createNewTask(tasks) {
  const newPlanValue = document.getElementById("newTaskInput").value;
  if (!newPlanValue.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }

  let newTaskObject = {
    id: tasks.length + 1,
    title: newPlanValue,
    status: "created",
  };
  tasks.push(newTaskObject);
  document.getElementById("newTaskInput").value = "";
}

function updateTaskStatus(tasks, taskID, taskStatus) {
  let taskIndex = tasks.findIndex((task) => task.id === taskID);
  const newObj = { ...tasks[taskIndex], status: getTaskNewStatus(taskStatus) };
  tasks.splice(taskIndex, 1, newObj);
}

export { createNewTask, updateTaskStatus };
