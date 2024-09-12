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

export { createNewTask };
