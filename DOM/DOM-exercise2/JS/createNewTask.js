function createNewTask(tasks) {
  const newPlanValue = document.getElementById("newTaskInput").value;
  if (!newPlanValue.trim().length) {
    document.getElementById("newTaskInput").value = "";
    return;
  }
  tasks.push(newPlanValue);
  document.getElementById("newTaskInput").value = "";
}

export { createNewTask };
