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
  const newObjArray = tasks;
  console.log(newObjArray);
  const updatedObj = tasks[taskIndex];
  console.log(updatedObj);
  const newObj = {
    title: updatedObj.title,
    status: taskStatus,
  };

  console.log(newObj);
  tasks.splice(taskIndex, 1, newObj);
}

export { createNewTask, updateTaskStatus };
