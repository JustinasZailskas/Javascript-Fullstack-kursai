import { getButtonLabel } from "./helpers/statusButtonsHelpers.js";

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
  const updatedObj = tasks[taskIndex];
  const newObj = {
    title: updatedObj.title,
    status: taskStatus,
  };

  tasks.splice(taskIndex, 1, newObj);
}

export { createNewTask, updateTaskStatus };
