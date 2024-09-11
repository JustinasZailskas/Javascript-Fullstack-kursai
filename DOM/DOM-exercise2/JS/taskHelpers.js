function showTask(task, index, tasks) {
  const taskItem = document.createElement("li");
  const bttContainer = document.createElement("div");
  // const deleteButton = document.createElement("button");
  const startButton = document.createElement("button");
  const stopButton = document.createElement("button");

  //text contenct
  taskItem.textContent = task;
  // deleteButton.textContent = "Delete";
  startButton.textContent = "Start";
  stopButton.textContent = "Stop";

  //styles
  taskItem.classList.add("task");
  bttContainer.classList.add("buttonContainer");
  //append child section

  startButton.addEventListener("click", () => {
    startButtonPressed(taskItem);
    // taskItem.style.backgroundColor = "#c2e8ce";
  });
  stopButton.addEventListener("click", () => {
    stoptButtonPressed(taskItem);
  });
  // bttContainer.appendChild(deleteButton);
  bttContainer.appendChild(startButton);
  bttContainer.appendChild(stopButton);
  taskItem.appendChild(bttContainer);
  // deleteButton.addEventListener("click", () => {
  //   tasks.splice(index, 1);
  //   showAllTasks(tasks);
  // });
  document.getElementById("tasksList").appendChild(taskItem);
}

function showAllTasks(tasks) {
  console.log(tasks.length);
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

function startButtonPressed(taskItem) {
  console.log("Start button");
  taskItem.style.backgroundColor = "#c2e8ce";
}

function stoptButtonPressed(taskItem) {
  console.log("Stop button");
  taskItem.style.backgroundColor = "#758694";
}

export { showAllTasks };
