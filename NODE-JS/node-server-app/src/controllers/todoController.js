const Todo = require("../models/todo");
const todoService = require("../services/todoService");

exports.getAllTodos = async (req, res) => {
  try {
    const todoItems = await todoService.getAllByUser(req.user._id.toString());
    res.json(todoItems);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Klaida nuskaitant duomenis: " + error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    res.json(todo);
  } catch (error) {
    if (error.message === "Todo not found") {
      res.status(404).json({ error: "Toks elementas nerastas" });
    } else {
      res
        .status(500)
        .json({ error: "Klaida nuskaitant duomenis: " + error.message });
    }
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body, req.user);
    res.json(todo);
  } catch (error) {
    if (error.message === "Missing required fields") {
      res.status(400).json({ error: "Uzpildykite visus laukelius" });
    } else {
      res.status(500).json({ error: "Klaida kuriant įrašą: " + error.message });
    }
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await todoService.updateTodo(req.params.id, req.body);
    res.json({ message: "Elementas atnaujintas" });
  } catch (error) {
    if (error.message === "Todo not found") {
      res
        .status(404)
        .json({ error: "Toks elementas nerastas, negalima atnaujinti" });
    } else {
      res
        .status(500)
        .json({ error: "Klaida atnaujinant duomenis: " + error.message });
    }
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.json({ message: "Elementas yra istrintas" });
  } catch (error) {
    if (error.message === "Todo not found") {
      res.status(404).json({ error: "Elementas nerastas" });
    } else {
      res
        .status(400)
        .json({ error: "Klaida trinant elementą: " + error.message });
    }
  }
};
