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
  tasks: [...mockData],
  setTasks: function (newTask) {
    this.tasks = newTask;
  },
  deleteTask: function (id) {
    let taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
  },
  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
  },
};
