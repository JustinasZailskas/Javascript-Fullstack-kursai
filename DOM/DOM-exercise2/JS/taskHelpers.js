import { getButtonLabel } from "./helpers/statusButtonsHelpers.js";

function showTask(task, index, tasks) {
  const taskLiElement = document.createElement("li");
  const bttContainer = document.createElement("div");
  const deleteButton = document.createElement("button");
  const statusButton = document.createElement("button");

  //text contenct
  taskLiElement.textContent = task.title;
  deleteButton.textContent = "Delete";
  statusButton.textContent = getButtonLabel(task.status);

  //styles
  taskLiElement.classList.add("task");
  bttContainer.classList.add("buttonContainer");
  //append child section

  statusButton.addEventListener("click", () => {
    switch (task.status) {
      case "created":
        startButtonPressed(taskLiElement);
        break;
      case "started":
        stopButtonPressed(taskLiElement);
        break;
      default:
        break;
    }
  });

  deleteButton.addEventListener("click", () => {
    tasks.splice(index, 1);
    showAllTasks(tasks);
  });

  if (task.status !== "completed") {
    bttContainer.appendChild(statusButton);
  }
  bttContainer.appendChild(deleteButton);
  taskLiElement.appendChild(bttContainer);

  document.getElementById("tasksList").appendChild(taskLiElement);
}

function showAllTasks(tasks) {
  document.getElementById("tasksList").innerHTML = "";

  if (tasks.length !== 0) {
    tasks.forEach((task, index) => {
      showTask(task, index, tasks);
    });
    return;
  }

  const displayContainer = document.createElement("div");
  displayContainer.textContent = "There is no tasks created";
  displayContainer.classList.add("displayMessage");
  document.getElementById("tasksList").appendChild(displayContainer);
}

function startButtonPressed(taskLiElement) {
  console.log("Start button");
  taskLiElement.style.backgroundColor = "#c2e8ce";
}

function stopButtonPressed(taskLiElement) {
  console.log("Stop button");
  taskLiElement.style.backgroundColor = "#758694";
}

export { showAllTasks };
