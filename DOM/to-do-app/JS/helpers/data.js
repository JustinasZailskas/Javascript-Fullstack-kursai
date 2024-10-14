"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor() {
        this.id = "";
        this.tasks = [];
    }
    getTasks() {
        let tasksStr = localStorage.getItem("tasks") || "";
        let data = JSON.parse(tasksStr);
        if (data && Array.isArray(data)) {
            this.tasks = data;
        }
    }
    setTasks(newTasks = []) {
        this.tasks = newTasks;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    deleteTask(id) {
        let taskIndex = this.tasks.findIndex((task) => task.id === id);
        this.tasks.splice(taskIndex, 1);
        this.setTasks();
    }
    changeTaskStatus(id, nextStatus) {
        this.tasks = this.tasks.map((task) => {
            if (task.id === id) {
                return Object.assign(Object.assign({}, task), { status: nextStatus });
            }
            return task;
        });
        this.setTasks();
    }
    createTask(title) {
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
exports.default = Data;
