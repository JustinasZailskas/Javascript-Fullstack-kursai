interface Task {
  id: string;
  title: string;
  status: string;
  createdAt: number;
}

export default class Data {
  id: string = "";
  tasks: Task[] = [];
  getTasks(): void {
    let tasksStr = localStorage.getItem("tasks") || "";
    let data = JSON.parse(tasksStr);
    if (data && Array.isArray(data)) {
      this.tasks = data;
    }
  }
  setTasks(newTasks: Task[] = []): void {
    this.tasks = newTasks;
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  deleteTask(id: string): void {
    let taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
    this.setTasks();
  }
  changeTaskStatus(id: string, nextStatus: string) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    this.setTasks();
  }
  createTask(title: string): void {
    let newTask = {
      id: crypto.randomUUID(),
      title: title,
      status: "created",
      createdAt: Date.now(),
    };
    this.tasks = [...this.tasks, newTask];
    this.setTasks();
  }
}
