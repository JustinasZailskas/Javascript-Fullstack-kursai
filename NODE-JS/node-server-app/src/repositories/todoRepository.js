const Todo = require("../models/todo");

class TodoRepository {
  async findAll() {
    return await Todo.find({});
  }

  async findById(id) {
    return await Todo.findById(id);
  }
  async findAllByUserId(userId) {
    return await Todo.find({ userId });
  }

  async create(todoData) {
    const todo = new Todo(todoData);
    return await todo.save();
  }

  async update(id, todoData) {
    const todo = await Todo.findById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, todoData);
    return await todo.save();
  }

  async delete(id) {
    return await Todo.findByIdAndDelete(id);
  }
}

module.exports = new TodoRepository();
