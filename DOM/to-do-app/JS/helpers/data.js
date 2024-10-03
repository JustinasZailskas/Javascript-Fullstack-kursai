const mockData = [
  {
    id: crypto.randomUUID(),
    title: "Task1",
    status: "created",
  },
  {
    id: crypto.randomUUID(),
    title: "Task2",
    status: "started",
  },
  {
    id: crypto.randomUUID(),
    title: "Task3",
    status: "completed",
  },
  {
    id: crypto.randomUUID(),
    title: "Task4",
    status: "completed",
  },
  {
    id: crypto.randomUUID(),
    title: "Task5",
    status: "created",
  },
  {
    id: crypto.randomUUID(),
    title: "Task6",
    status: "started",
  },
];

export const data = {
  tasks: [],
  getTasks: function () {
    let response = localStorage.getItem("tasks");
    let data = JSON.parse(response);
    if (data && Array.isArray(data)) {
      this.tasks = data;
    }
  },
  setTasks: function (newTasks) {
    if (newTasks) {
      this.tasks = newTasks;
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
  deleteTask: function (id) {
    let taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
    this.setTasks();
  },
  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    this.setTasks();
  },
  createTask: function (title) {
    let newTask = {
      id: crypto.randomUUID(),
      title: title,
      status: "created",
      createdAt: Date.now(),
    };
    this.tasks = [...this.tasks, newTask];
    this.setTasks();
  },
};

data.getTasks();
