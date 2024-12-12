const todoRepository = require("../repositories/todoRepository");

class TodoService {
  async getAllTodos() {
    return await todoRepository.findAll();
  }
  async getAllByUser(userId) {
    return await todoRepository.findAllByUserId(userId);
  }

  async getTodoById(id) {
    const todo = await todoRepository.findById(id);

    if (!todo) {
      return null;
    }
    return todo;
  }

  async createTodo(todoData, user) {
    if (!todoData.title || !todoData.status || !todoData.createdAt) {
      throw new Error("Missing required fields");
    }

    todoData.userId = user._id;
    return await todoRepository.create(todoData);
  }

  async updateTodo(id, todoData) {
    const updatedTodo = await todoRepository.update(id, todoData);
    if (!updatedTodo) {
      throw new Error("Todo not found");
    }
    return updatedTodo;
  }

  async deleteTodo(id) {
    const deletedTodo = await todoRepository.delete(id);
    if (!deletedTodo) {
      throw new Error("Todo not found");
    }
    return deletedTodo;
  }
}

module.exports = new TodoService();
