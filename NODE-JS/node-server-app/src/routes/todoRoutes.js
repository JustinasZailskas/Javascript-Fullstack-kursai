const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { cacheMiddleware } = require("../middlewares/cacheMiddleware");
const authenticateUser = require("../middlewares/authenticateUser");
const corsHandler = require("../middlewares/corsHandler");

router.get("/", corsHandler, authenticateUser, todoController.getAllTodos);
router.get(
  "/:id",
  corsHandler,
  authenticateUser,
  cacheMiddleware,
  todoController.getTodoById
);
router.post("/", corsHandler, authenticateUser, todoController.createTodo);
router.put("/:id", corsHandler, authenticateUser, todoController.updateTodo);
router.delete("/:id", corsHandler, authenticateUser, todoController.deleteTodo);

module.exports = router;
