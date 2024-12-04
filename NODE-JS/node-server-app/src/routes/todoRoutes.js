const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");
const { cacheMiddleware } = require("../middlewares/cacheMiddleware");
const auth = require("../middlewares/authMiddleware");
const corsHandler = require("../middlewares/corsHandler");
const { checkPermission } = require("../middlewares/accessControl");

router.get(
  "/",
  auth,
  checkPermission("read_own_todos"),
  todoController.getAllTodos
);
router.get(
  "/:id",
  auth,
  checkPermission("read_own_todos"),
  cacheMiddleware,
  todoController.getTodoById
);
router.post(
  "/",
  auth,
  checkPermission("create_todo"),
  todoController.createTodo
);
router.put(
  "/:id",
  auth,
  checkPermission("update_own_todo"),
  todoController.updateTodo
);
router.delete(
  "/:id",
  auth,
  checkPermission("delete_own_todo"),
  todoController.deleteTodo
);

module.exports = router;
